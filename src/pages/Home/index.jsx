import DesignSection from "@/pages/Home/DesignSection";
import ExecutionSection from "@/pages/Home/ExecutionSection";
import FaqsSection from "@/pages/Home/FaqsSection";
import HeroSection from "@/pages/Home/HeroSection";
import InsightSection from "@/pages/Home/InsightSection";
import ServicesSection from "@/pages/Home/ServicesSection";
import ShowcaseSection from "@/pages/Home/ShowcaseSection";
import ContactFormSection from "@/pages/Home/contactFormSection";
import VideoSection from "./VideoSection";
import CursorGlow from "@/components/CursorGlow";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import useHome from "./useHome";

const HomeView = () => {

  const { activeIndex, toggle } = useHome()

  return (
    <>
      <CursorGlow />
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <ExecutionSection />
      <ShowcaseSection />
      <DesignSection />
      <FaqsSection activeIndex={activeIndex} toggle={toggle} />
      <InsightSection />
      <ContactFormSection />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />
    </>
  );
};

export default HomeView;
