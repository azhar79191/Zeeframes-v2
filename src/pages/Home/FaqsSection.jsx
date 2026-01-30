import { useState } from 'react'
import { Button } from '@/components/ui/button'
import stars from "@/assets/images/clutch-reviews.svg"
import SectionHeader from '@/components/SectionHeader'
const faqs = [
    {
        question: "What is UI UX design, and why is it important?",
        answer: "UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions."
    },
    {
        question: "What is the UX design process, and how long does it take?",
        answer: "UI design, or user interface design, is the visual design of digital products, including the layout, colors, typography, and other elements. It differs from UX design, focusing more on the product's aesthetic appeal and visual aspects. In contrast, UX design focuses on the overall experience of the user."
    },
    {
        question: "What types of UX design services do you offer?",
        answer: "We offer various UX design services, including UX research, wireframing, prototyping, usability testing, and graphics design. We work closely with our clients to understand their unique needs and goals and provide customized solutions to help them achieve their objectives."
    },
    {
        question: "How does ZeeFrames UI UX Design differ from other design solutions?",
        answer: "At ZeeFrames, we believe in the power of Human-Computer Interaction and leverage it to make informed, data-driven design decisions that set us apart from the competition. As a leading UI UX design studio in Pakistan, we follow a design strategy that begins with discovering the needs and pain points of users and ends with real user testing for direct feedback. This approach enables us to create user-centric designs that enhance usability, accessibility, and overall user satisfaction.Our design philosophy is simple: put users at the center of everything we do.Whether it's UX research or designing User Flows, Wireframing or Prototyping our team of expert UI UX designers ensure that your users are considered in every phase of designing to deliver outstanding results that meet the unique needs of your business."
    },
    {
        question: "Are there any customer reviews or case studies available for ZeeFrames UI UX Design?",
        answer: "At ZeeFrames, we take pride in our customer reviews and case studies that showcase our expertise in the UI UX design industry. You can easily access them on our website to get a glimpse of our work and the impact it has had on our clients' businesses. As a top-class UI UX design firm, we have worked with a diverse range of clients worldwide, helping them create engaging and intuitive digital experiences for their customers. With our expertise and user-centered design approach, you can be rest assured as we will take your website design to the next level."
    }
]

const FaqsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className="py-20 sm:block hidden">
            <div className="container">
                <div className="grid grid-cols-[minmax(100px,409px)_minmax(100px,739px)] gap-12">
                    <div>
                        <SectionHeader
                            align='start'
                            titleclassName='pt-4'
                            eyebrow="FAQs"
                            title="Got Question?"
                            description="We begin with meaningful conversations that drive design decisions."
                        />
                        <div className='flex items-center gap-8 pt-8'>
                            <Button onClick={() => window.location.href = "https://calendly.com/contact-zeeframes/30min?month=2026-01"} className="w-47 h-12 bg-white">
                                <span className="group-hover:hidden flex items-center gap-3 justify-center">
                                    Book a free call
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.10941 1.25C2.94365 1.25 2.78468 1.18415 2.66747 1.06694C2.55026 0.949731 2.48441 0.79076 2.48441 0.625C2.48441 0.45924 2.55026 0.300268 2.66747 0.183058C2.78468 0.0658479 2.94365 0 3.10941 0H10.6094C10.7752 0 10.9341 0.0658479 11.0514 0.183058C11.1686 0.300268 11.2344 0.45924 11.2344 0.625V8.125C11.2344 8.29076 11.1686 8.44973 11.0514 8.56694C10.9341 8.68415 10.7752 8.75 10.6094 8.75C10.4436 8.75 10.2847 8.68415 10.1675 8.56694C10.0503 8.44973 9.98441 8.29076 9.98441 8.125V2.13333L1.05108 11.0667C0.932597 11.1771 0.775892 11.2372 0.613974 11.2343C0.452057 11.2315 0.297569 11.1659 0.183058 11.0514C0.0685473 10.9368 0.00295422 10.7824 9.73728e-05 10.6204C-0.00275947 10.4585 0.057343 10.3018 0.167743 10.1833L9.10108 1.25H3.10941Z" fill="black" />
                                    </svg>
                                </span>
                                <span className="hidden group-hover:block">
                                    Lets talk
                                </span>
                            </Button>
                            <a href="#"><img src={stars} alt="stars" className='h-12 w-41' loading='lazy' /></a>

                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {faqs.map((item, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`rounded-xl border transition-all duration-300
          ${isActive
                                            ? "border-[#F3FE00] bg-[#111111]"
                                            : "border-[#1F1F1F] bg-[#0D0D0D]"
                                        }`}
                                >
                                    {/* QUESTION BUTTON */}
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between p-5 text-left"
                                    >
                                        <h3
                                            className="text-base font-['Geologica'] font-medium text-white"
                                        >
                                            {item.question}
                                        </h3>
                                        <span
                                            className={`flex items-center justify-center rounded-md p-1 transition-all duration-300
                                            ${isActive
                                                    ? "bg-[#F3FE00] text-black"
                                                    : "bg-[#2B2A2A] text-[#6D6D6D]"
                                                }`}
                                        >
                                            {isActive ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2.66669 8H13.3334" stroke="#0B0B0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M8 2.66663V13.3333" stroke="#6D6D6D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M2.66669 8H13.3334" stroke="#6D6D6D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                            )}
                                        </span>

                                    </button>
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out
            ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
                                    >
                                        <div className="overflow-hidden px-5">
                                            <p className="text-base text-[#D5D5D5] leading-6 pb-6">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FaqsSection
