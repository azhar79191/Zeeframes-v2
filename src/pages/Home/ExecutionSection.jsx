import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

import process1 from "@/assets/images/process1.webp";
import process2 from "@/assets/images/process2.webp";
import process3 from "@/assets/images/process3.webp";
import process4 from "@/assets/images/process4.webp";
import process5 from "@/assets/images/process5.webp";
import process6 from "@/assets/images/process6.webp";

const processSteps = [
    {
        id: 1,
        title: "01 Discovery",
        subtitle: "Research & Domain Analysis",
        description:
            "Don't ignore the crucial step of Research & Development in the UX Design Process! Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback. Improve user experience",
        image: process1,
    },
    {
        id: 2,
        title: "02 Flows",
        subtitle: "User Journey Map Sitemap",
        description:
            "Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.",
        image: process2,
    },
    {
        id: 3,
        title: "03 Wireframes",
        subtitle: "Low - Fidelity Design",
        description:
            "Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.",
        image: process3,
    },
    {
        id: 4,
        title: "Mockups",
        subtitle: "High - Fidelity Design",
        description:
            "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
        image: process4,
    },
    {
        id: 5,
        title: "Prototyping",
        subtitle: "Interaction Design",
        description:
            "UX Designers create clickable prototypes for your product using tools like Invision to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.",
        image: process5,
    },
    {
        id: 6,
        title: "Testing",
        subtitle: "Usability Testing",
        description:
            "UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.",
        image: process6,
    },
];

const ExecutionSection = ({ tag, title, image }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!containerRef.current) return;

    const containerHeight = containerRef.current.offsetHeight;
    const currentLineHeight = progress * containerHeight;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const itemTop = item.offsetTop;

      if (currentLineHeight >= itemTop) {
        setActiveIndex(index);
      }
    });
  });

  return (
    <section className="py-20">
        <div className="container">
          <SectionHeader
              eyebrow="Our process, Your Advantage"
              title="From Idea To Execution"
              description="We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
          />
      <div ref={containerRef}
        className="relative mx-auto flex max-w-7xl gap-20 px-6 py-24">
      <div className="relative w-1/2">
                    {/* Line */}
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-white/10">
                        <motion.div
                            style={{ height: lineHeight }}
                          className="w-full bg-[#F3FE00]"
                        />
                    </div>
    
                    {/* Cards */}
                  <div className="space-y-20 pl-16">
                      {processSteps.map((step, index) => {
                          const isActive = activeIndex === index;

                          return (
                              <div
                                  key={index}
                                  ref={(el) => (itemRefs.current[index] = el)}
                                  className="relative transition-all duration-300"
                              >
                                  {/* NUMBER – LEFT OF LINE */}
                                  {isActive && (
                                      <div className="absolute -left-25 top-1 text-lg font-semibold text-white transition-opacity duration-300">
                                          {String(step.id).padStart(1, "0")}
                                      </div>
                                  )}


                                  {/* CONTENT */}
                                  <h3
                                      className={`text-4xl font-semibold transition-colors duration-300
            ${isActive ? "text-white" : "text-[#8F8F8F]"}`}
                                  >
                                      {step.title.replace(/^\d+\s/, "")}
                                  </h3>

                                  <p
                                      className={`mt-1 text-sm transition-colors duration-300
            ${isActive ? "text-white" : "text-[#8F8F8F]"}`}
                                  >
                                      {step.subtitle}
                                  </p>

                                  <p
                                      className={`mt-3 max-w-md text-sm transition-colors duration-300
            ${isActive ? "text-white" : "text-[#8F8F8F]"}`}
                                  >
                                      {step.description}
                                  </p>
                              </div>
                          );
                      })}
                  </div>

                </div>
    
                {/* RIGHT STICKY IMAGE */}
                <div className="sticky top-30 h-126 w-132">
                    <motion.img
                        key={activeIndex}
                        src={processSteps[activeIndex].image}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="h-full w-full rounded-2xl object-cover"
                    />
                </div>
      </div>
          </div>
  </section>
  )
}

export default ExecutionSection
