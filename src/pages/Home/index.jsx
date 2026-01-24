import DesignSection from "@/pages/Home/DesignSection";
import ExecutionSection from "@/pages/Home/ExecutionSection";
import FaqsSection from "@/pages/Home/FaqsSection";
import HeroSection from "@/pages/Home/HeroSection";
import InsightSection from "@/pages/Home/InsightSection";
import ServicesSection from "@/pages/Home/ServicesSection";
import ShowcaseSection from "@/pages/Home/ShowcaseSection";
import ContactFormSection from "@/pages/Home/contactFormSection";
import VideoSection from "./VideoSection";
const HomeView = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <ExecutionSection />
      <ShowcaseSection />
      <DesignSection />
      <FaqsSection />
      <InsightSection />
      <ContactFormSection />
    </>
  );
}

export default HomeView