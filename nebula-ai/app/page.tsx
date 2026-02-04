import HeroSection from "./components/HeroSection";
import LogoMarquee from "./components/LogoMarquee";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";
import FeatureThree from "./components/FeatureThree";
import FeatureFour from "./components/FeatureFour";
import FeatureFive from "./components/FeatureFive";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#060E17" }}>
      <HeroSection />
      <LogoMarquee />
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFour />
      <FeatureFive />
      <CTA />
      <Footer />
    </div>
  );
}
