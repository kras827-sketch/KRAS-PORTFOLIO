import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Not Found Page for Project Routes
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <div className="section-container text-center py-20">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-6">
            Project Not Found
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
            The project you're looking for doesn't exist or may have been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              View All Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
