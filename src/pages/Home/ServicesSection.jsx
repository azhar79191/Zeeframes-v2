import React from 'react'
import ServiceCard from '@/components/ServiceCard';
import uxImg from "@/assets/images/square.webp";
import SectionHeader from '@/components/SectionHeader';

const ServicesSection = ({ tag, title, image }) => {
  return (
    <section className="sm:py-20 py-8">
    <div className="container">
      <SectionHeader
        eyebrow="WE are great at"
        title="Our Services"
        description="Designs with Exceptional User Experiences."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 sm:mt-16 mt-8">

        <ServiceCard
          tag="For Digital Experiences"
          title="UX UI Design"
          image={uxImg}
          link="/services/ui-ux-design-main"
        />

        <ServiceCard
          tag="For Startups & Existing Companies"
          title="Product Revamp"
          image={uxImg}
          link="/services/product-revamp-main"
        />

        <ServiceCard
          tag="For Visual Storytellers"
          title="Brand Design"
          image={uxImg}
          link="/services/brand-design-main"
        />

        <ServiceCard
          tag="For Rapid App Builders"
          title="No-Code Development"
          image={uxImg}
          link="/services/nocode-development-main"
        />

        <ServiceCard
            tag="FOR STARTUPS & FOUNDERS"
          title="MVP Design"
          image={uxImg}
          link="/services/mvp-design-main"
        />

        <ServiceCard
            tag="Dedicated ux ui Team"
          title="Team Extension"
          image={uxImg}
          link="/services/team-extension-main"
        />

      </div>
      </div>
  </section>
  )
}

export default ServicesSection