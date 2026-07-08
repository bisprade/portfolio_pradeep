import { CaseStudyNav } from "./components/CaseStudyNav";
import { HeroSection } from "./components/HeroSection";
import { ChallengeSection } from "./components/ChallengeSection";
import { SolutionSection } from "./components/SolutionSection";
import { KeyChangesSection } from "./components/KeyChangesSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { CaseStudyFooter } from "./components/CaseStudyFooter";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <CaseStudyNav />
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <KeyChangesSection />
      <ComparisonSection />
      <CaseStudyFooter />
    </div>
  );
}
