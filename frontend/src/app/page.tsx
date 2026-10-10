import { Navbar } from "@/components/navigation/Navbar";
import { CinematicExperience } from "@/components/cinematic/CinematicExperience";
import { HeroSection } from "@/components/hero/HeroSection";
import { QuerySection } from "@/components/query/QuerySection";
import { HowItWorksSection } from "@/components/how-it-works/HowItWorksSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111A22] text-white selection:bg-[var(--color-signal)] selection:text-[var(--color-ink)]">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Continuous Main Cinematic Experience */}
      <main className="flex-1">
        <CinematicExperience>
          {/* Hero Section */}
          <HeroSection />

          {/* Query & Resolution Section */}
          <QuerySection />

          {/* Process Walkthrough Section */}
          <HowItWorksSection />
        </CinematicExperience>
      </main>

      {/* Footer strictly outside the cinematic wrapper */}
      <Footer />
    </div>
  );
}
