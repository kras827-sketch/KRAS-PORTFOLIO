"use client";

import { useState } from "react";
import { Download, Loader } from "lucide-react";
import { downloadCV, downloadResume, getDownloadFilename } from "@/lib/pdf-utils";
import { cvData } from "@/data/cv-data";

/**
 * CV & Resume Download Buttons Component
 * Dual download options with loading state
 */
export function CVDownloadButtons() {
  const [loadingCV, setLoadingCV] = useState(false);
  const [loadingResume, setLoadingResume] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownloadCV = async () => {
    try {
      setLoadingCV(true);
      setError(null);
      await downloadCV(cvData, getDownloadFilename("cv"));
    } catch (err) {
      setError("Failed to download CV. Please try again.");
      console.error(err);
    } finally {
      setLoadingCV(false);
    }
  };

  const handleDownloadResume = async () => {
    try {
      setLoadingResume(true);
      setError(null);
      await downloadResume(cvData, getDownloadFilename("resume"));
    } catch (err) {
      setError("Failed to download Resume. Please try again.");
      console.error(err);
    } finally {
      setLoadingResume(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Error Message */}
      {error && (
        <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Button Container */}
      <div className="flex flex-col gap-3 sm:flex-row">
        {/* Download CV Button */}
        <button
          onClick={handleDownloadCV}
          disabled={loadingCV || loadingResume}
          className="group relative px-6 py-3 bg-blue-600 text-white border-2 border-blue-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 hover:border-blue-700 flex items-center justify-center gap-2 flex-1"
        >
          {loadingCV ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Download CV</span>
            </>
          )}
        </button>

        {/* Download Resume Button */}
        <button
          onClick={handleDownloadResume}
          disabled={loadingResume || loadingCV}
          className="group relative px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 flex items-center justify-center gap-2 flex-1"
        >
          {loadingResume ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Download Resume</span>
            </>
          )}
        </button>
      </div>

      {/* Info Text */}
      <p className="text-sm text-gray-600 text-center sm:text-left">
        📄 ATS-friendly, professionally formatted PDFs generated in your browser
      </p>
    </div>
  );
}

export default CVDownloadButtons;
