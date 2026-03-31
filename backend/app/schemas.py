from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional


class ContactForm(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100, description="Full name")
    email: EmailStr = Field(..., description="Email address")
    subject: str = Field(..., min_length=2, max_length=200, description="Message subject")
    message: str = Field(..., min_length=10, max_length=2000, description="Message body")

    class Config:
        json_schema_extra = {
            "example": {
                "full_name": "John Doe",
                "email": "john@example.com",
                "subject": "Project Inquiry",
                "message": "I'm interested in working together on a project."
            }
        }


class ContactResponse(BaseModel):
    success: bool
    message: str


class ProjectLink(BaseModel):
    type: str  # "github", "live", "case_study"
    url: str
    label: str


class Project(BaseModel):
    id: str
    title: str
    subtitle: Optional[str] = None
    category: str
    category_color: str = "purple"
    description: str
    tech_stack: List[str]
    image_url: str
    links: List[ProjectLink]
    cta_label: str
    cta_style: str = "dark"  # "dark" or "gradient"
    featured: bool = True
