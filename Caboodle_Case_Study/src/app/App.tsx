import { HeroSection } from "./components/HeroSection";
import { OverviewSection } from "./components/OverviewSection";
import { ProblemSection } from "./components/ProblemSection";
import { ResearchSection } from "./components/ResearchSection";
import { PersonasSection } from "./components/PersonasSection";
import { JourneySection } from "./components/JourneySection";
import { IASection } from "./components/IASection";
import { UIDesignSection } from "./components/UIDesignSection";
import { ImpactSection } from "./components/ImpactSection";
import { LessonsSection } from "./components/LessonsSection";
import { ConclusionSection } from "./components/ConclusionSection";

/* MARKER-MAKE-KIT-INVOKED */

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <HeroSection />
      <OverviewSection />
      <ProblemSection />
      <ResearchSection />
      <PersonasSection />
      <JourneySection />
      <IASection />
      <UIDesignSection />
      <ImpactSection />
      <LessonsSection />
      <ConclusionSection />
    </div>
  );
}
