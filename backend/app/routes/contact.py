import time
import smtplib
import logging
from email.message import EmailMessage
from collections import defaultdict
from fastapi import APIRouter, HTTPException, Request, BackgroundTasks
from pydantic import ValidationError
from app.schemas import ContactForm, ContactResponse
from app.config import settings

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/contact", tags=["contact"])

# Simple in-memory rate limiting
_rate_limit: dict[str, list[float]] = defaultdict(list)
RATE_LIMIT_WINDOW = 60  # seconds
RATE_LIMIT_MAX = 3  # max requests per window

def _check_rate_limit(client_ip: str) -> bool:
    now = time.time()
    _rate_limit[client_ip] = [
        t for t in _rate_limit[client_ip] if now - t < RATE_LIMIT_WINDOW
    ]
    if len(_rate_limit[client_ip]) >= RATE_LIMIT_MAX:
        return False
    _rate_limit[client_ip].append(now)
    return True

def _send_contact_email(form: ContactForm):
    """Sends the contact form details via SMTP with vibrant professional HTML template."""
    if not settings.SMTP_HOST or not settings.SMTP_USER or not settings.SMTP_PASSWORD:
        logger.warning("[SMTP] Missing config. Email not sent.")
        return

    msg = EmailMessage()
    msg['Subject'] = f"📧 New Contact: {form.subject}"
    msg['From'] = settings.SMTP_USER
    msg['To'] = settings.CONTACT_EMAIL
    
    # Create vibrant professional HTML email template with brand colors
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            * {{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }}
            body {{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
                line-height: 1.6;
                color: #1a1a1a;
                background: #f8fafc;
                padding: 16px;
            }}
            .container {{
                max-width: 680px;
                margin: 0 auto;
                background: white;
                border-radius: 16px;
                box-shadow: 0 8px 32px rgba(255, 107, 44, 0.12);
                overflow: hidden;
            }}
            .header {{
                background: linear-gradient(135deg, #FF6B2C 0%, #FF8A50 50%, #FFB366 100%);
                padding: 50px 40px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }}
            .header::before {{
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 300px;
                height: 300px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                transform: translate(50%, -30%);
            }}
            .header::after {{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 200px;
                height: 200px;
                background: rgba(255, 255, 255, 0.08);
                border-radius: 50%;
                transform: translate(-30%, 40%);
            }}
            .brand {{
                position: relative;
                z-index: 1;
            }}
            .logo {{
                font-size: 36px;
                font-weight: 800;
                color: white;
                letter-spacing: -1px;
                margin-bottom: 8px;
            }}
            .tagline {{
                font-size: 13px;
                font-weight: 500;
                color: rgba(255, 255, 255, 0.95);
                letter-spacing: 0.5px;
            }}
            .badge-contact {{
                display: inline-block;
                background: rgba(255, 255, 255, 0.25);
                color: white;
                padding: 6px 16px;
                border-radius: 24px;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 1px;
                margin-top: 16px;
                backdrop-filter: blur(10px);
            }}
            .content {{
                padding: 48px 40px;
            }}
            .section {{
                margin-bottom: 40px;
            }}
            .section-title {{
                font-size: 11px;
                font-weight: 800;
                color: #FF6B2C;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 24px;
                display: flex;
                align-items: center;
            }}
            .section-title::before {{
                content: '';
                display: inline-block;
                width: 8px;
                height: 8px;
                background: linear-gradient(135deg, #FF6B2C, #FF8A50);
                border-radius: 50%;
                margin-right: 12px;
            }}
            .field {{
                margin-bottom: 24px;
            }}
            .field-label {{
                font-weight: 700;
                color: #1a1a1a;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
            }}
            .field-value {{
                color: #4a5568;
                font-size: 15px;
                line-height: 1.6;
                word-break: break-word;
            }}
            .email-link {{
                color: #FF6B2C;
                text-decoration: none;
                font-weight: 600;
            }}
            .email-link:hover {{
                text-decoration: underline;
            }}
            .message-box {{
                background: linear-gradient(135deg, rgba(255, 107, 44, 0.08), rgba(255, 138, 80, 0.05));
                border-left: 4px solid #FF6B2C;
                padding: 28px;
                border-radius: 12px;
                margin-top: 12px;
            }}
            .message-text {{
                color: #2d3748;
                font-size: 14px;
                line-height: 1.8;
                white-space: pre-wrap;
                word-wrap: break-word;
            }}
            .cta-box {{
                background: linear-gradient(135deg, #FFF5F0, #FFF9F5);
                padding: 24px;
                border-radius: 12px;
                border: 2px solid #FFE0D0;
                position: relative;
                overflow: hidden;
            }}
            .cta-box::before {{
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 120px;
                height: 120px;
                background: rgba(255, 107, 44, 0.05);
                border-radius: 50%;
                transform: translate(30%, -30%);
            }}
            .cta-box strong {{
                color: #FF6B2C;
                font-size: 14px;
                position: relative;
                z-index: 1;
            }}
            .cta-box p {{
                margin-top: 12px;
                font-size: 13px;
                color: #2d3748;
                line-height: 1.6;
                position: relative;
                z-index: 1;
            }}
            .cta-link {{
                color: #FF6B2C;
                text-decoration: none;
                font-weight: 700;
            }}
            .cta-link:hover {{
                text-decoration: underline;
            }}
            .divider {{
                height: 1px;
                background: linear-gradient(90deg, transparent, #FFE0D0, transparent);
                margin: 40px 0;
            }}
            .footer {{
                background: linear-gradient(135deg, #f8fafc, #fff5f0);
                padding: 32px 40px;
                text-align: center;
                border-top: 1px solid #FFE0D0;
            }}
            .footer-brand {{
                font-weight: 700;
                color: #FF6B2C;
                font-size: 13px;
                margin-bottom: 8px;
            }}
            .footer-text {{
                font-size: 12px;
                color: #718096;
            }}
            .timestamp {{
                font-size: 11px;
                color: #a0aec0;
                margin-top: 12px;
                font-weight: 500;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="brand">
                    <div class="logo">Olawale.</div>
                    <div class="tagline">Backend & ML Developer</div>
                    <div class="badge-contact">NEW MESSAGE</div>
                </div>
            </div>

            <div class="content">
                <div class="section">
                    <div class="section-title">Sender Details</div>
                    
                    <div class="field">
                        <div class="field-label">Name</div>
                        <div class="field-value"><strong>{form.full_name}</strong></div>
                    </div>

                    <div class="field">
                        <div class="field-label">Email Address</div>
                        <div class="field-value">
                            <a href="mailto:{form.email}" class="email-link">{form.email}</a>
                        </div>
                    </div>

                    <div class="field">
                        <div class="field-label">Subject</div>
                        <div class="field-value"><strong>{form.subject}</strong></div>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="section">
                    <div class="section-title">Message</div>
                    <div class="message-box">
                        <div class="message-text">{form.message}</div>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="section">
                    <div class="cta-box">
                        <strong>💬 Reply Now</strong>
                        <p>
                            Click <a href="mailto:{form.email}" class="cta-link">here</a> to respond directly to {form.full_name.split()[0]}.
                        </p>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div class="footer-brand">Oyedeji Olawale</div>
                <div class="footer-text">Backend & Machine Learning Developer</div>
                <div class="timestamp">Message received on {__import__('datetime').datetime.now().strftime('%B %d, %Y at %H:%M:%S UTC')}</div>
            </div>
        </div>
    </body>
    </html>
    """
    
    # Set both plain text and HTML versions
    msg.set_content(
        f"New message from {form.full_name}\n\n"
        f"Email: {form.email}\n"
        f"Subject: {form.subject}\n\n"
        f"Message:\n{form.message}"
    )
    msg.add_alternative(html_content, subtype='html')
    
    try:
        if settings.SMTP_PORT == 465:
            with smtplib.SMTP_SSL(settings.SMTP_HOST, settings.SMTP_PORT) as server:
                server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
                server.send_message(msg)
        else:
            with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
                server.starttls()
                server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
                server.send_message(msg)
        logger.info("[SMTP] Email sent successfully.")
    except Exception as e:
        logger.error(f"[SMTP] Email failed to send: {e}")

@router.post("/", response_model=ContactResponse)
async def submit_contact(form: ContactForm, request: Request, background_tasks: BackgroundTasks):
    """Handle contact form submission."""
    client_ip = request.client.host if request.client else "unknown"
    
    logger.debug(f"[Contact] Received form: {form.dict()}")

    if not _check_rate_limit(client_ip):
        logger.warning(f"[Contact] Rate limit exceeded for IP: {client_ip}")
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please try again later."
        )

    # Dispatch email sending to background task
    background_tasks.add_task(_send_contact_email, form)
    
    # Log submission
    logger.info(f"[Contact] From: {form.full_name} <{form.email}>")
    logger.info(f"[Contact] Subject: {form.subject}")

    return ContactResponse(
        success=True,
        message="Messages sent successfully!"
    )
