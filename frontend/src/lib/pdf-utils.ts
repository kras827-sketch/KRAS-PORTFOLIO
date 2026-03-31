/**
 * Utility functions for PDF generation and downloads
 * Uses direct imports to ensure proper component differentiation
 */

import { pdf } from "@react-pdf/renderer";
import type { CVData } from "@/data/cv-data";
import React from "react";
import { CVTemplate } from "@/components/pdf/CVTemplate";
import { ResumeTemplate } from "@/components/pdf/ResumeTemplate";

/**
 * Generate and download CV as PDF
 */
export async function downloadCV(data: CVData, filename = "CV.pdf") {
  try {
    console.log("🔵 Downloading CV...", { docType: "CV", filename });
    // Create the CV element directly
    const element = React.createElement(CVTemplate, { data }) as any;
    
    // Generate PDF blob
    const asPdf = pdf(element);
    const blob = await asPdf.toBlob();

    console.log("✅ CV PDF created, blob size:", blob.size);
    // Create and trigger download
    downloadBlob(blob, filename);
  } catch (error) {
    console.error("Error generating CV:", error);
    throw error;
  }
}

/**
 * Generate and download Resume as PDF
 */
export async function downloadResume(data: CVData, filename = "Resume.pdf") {
  try {
    console.log("🟢 Downloading Resume...", { docType: "Resume", filename });
    // Create the Resume element directly
    const element = React.createElement(ResumeTemplate, { data }) as any;
    
    // Generate PDF blob
    const asPdf = pdf(element);
    const blob = await asPdf.toBlob();

    console.log("✅ Resume PDF created, blob size:", blob.size);
    // Create and trigger download
    downloadBlob(blob, filename);
  } catch (error) {
    console.error("Error generating Resume:", error);
    throw error;
  }
}

/**
 * Helper function to download a blob as a file
 */
function downloadBlob(blob: Blob, filename: string): void {
  console.log("📥 Downloading blob as:", filename);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
}

/**
 * Get download filename with date
 */
export function getDownloadFilename(type: "cv" | "resume"): string {
  const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const filename = type === "cv" ? "CV" : "Resume";
  return `${filename}-${date}.pdf`;
}
