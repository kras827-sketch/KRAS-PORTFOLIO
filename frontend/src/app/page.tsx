import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreExpertise from "@/components/CoreExpertise";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import GitHubCTA from "@/components/GitHubCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CoreExpertise />
        <FeaturedProjects />
        <TechStack />
        <GitHubCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
