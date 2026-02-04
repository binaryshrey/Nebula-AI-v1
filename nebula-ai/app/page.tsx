import HeroSection from "./components/HeroSection";
import LogoMarquee from "./components/LogoMarquee";
import FeatureOne from "./components/FeatureOne";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#060E17" }}>
      <HeroSection />
      <LogoMarquee />
      <FeatureOne />
    </div>
  );
}
