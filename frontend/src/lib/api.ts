import { API_BASE_URL } from "./constants";

export interface Project {
  id: string;
  title: string;
  subtitle: string | null;
  category: string;
  category_color: string;
  description: string;
  tech_stack: string[];
  image_url: string;
  links: { type: string; url: string; label: string }[];
  cta_label: string;
  cta_style: string;
  featured: boolean;
}

export interface ContactFormData {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/projects/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch projects");
    return res.json();
  } catch {
    // Return fallback data if backend is unavailable
    return [];
  }
}

export async function submitContact(
  data: ContactFormData
): Promise<ContactResponse> {
  console.log("Sending contact form to:", `${API_BASE_URL}/api/contact/`);
  console.log("Form data:", data);
  
  const res = await fetch(`${API_BASE_URL}/api/contact/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  console.log("Response status:", res.status);
  
  let responseBody;
  try {
    responseBody = await res.json();
  } catch {
    responseBody = { detail: "Invalid response from server" };
  }
  
  console.log("Response body:", responseBody);
  
  if (!res.ok) {
    const errorDetail = 
      responseBody?.detail || 
      responseBody?.message || 
      "Failed to submit form";
    throw new Error(errorDetail);
  }
  
  return responseBody;
}
