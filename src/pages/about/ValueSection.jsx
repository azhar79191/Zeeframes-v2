import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import frontend from "@/assets/images/crafted.webp"
import seamless from "@/assets/images/seamless-collaboration.webp"
import flexible from "@/assets/images/stay-flexible.webp"
import pricing from "@/assets/images/transparent-pricing.webp"
const valuesData = [
    {
        id: 1,
        img: frontend,
        title: "Crafted, not copied",
        description: "No two problems are exactly alike, that’s why we believe every project deserves a specific tailored solution, including yours."
    },
    {
        id: 2,
        img: seamless,
        title: "Seamless collaboration",
        description: "We ensure all the deliverables are met timely because we love smooth-sailing projects. Our project managers are always ready to discuss and provide updates for you."
    },
    {
        id: 3,
        img: flexible,
        title: "Stay flexible",
        description: "Just like cats, we are flexible. We remain adaptable to any urgent needs or changes as your project evolves."
    },
    {
        id: 4,
        img: pricing,
        title: "Transparent pricing",
        description: "We provide a clear breakdown of invoices, so no hidden fees! Whether you do project-based or recurring partnership, you can cancel anytime."
    }

]
const ValueSection = () => {
    return (
        <section className='py-20 bg-[#0D0D0D] relative z-50'>
            <div className='container'>
                <div className='flex flex-col gap-6'>
                    <p className='main-heading'>Our Value</p>
                    <p className='description mb-20'>Together, we make perfect partners. We offer worry-free partnerships and deliver your vision into reality with our top-tier creativity. No fluff, just the good stuff.</p>
                </div>
                {valuesData.map((item, index) => (
                    <div className='flex flex-col px-6 py-8' key={index}>
                        <div className='flex justify-between gap-20 items-center'>
                            <div className='flex items-center gap-20'>
                                <h2 className="text-lg text-[#FFF] font-inter">
                                    {String(item.id).padStart(2, "0")}
                                </h2>
                                <div className="group relative flex items-center">
                                    {/* Image behind title */}
                                    <img
                                        src={item.img}
                                        alt="icon"
                                        width="58"
                                        height="58"
                                        className="absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all   duration-500 ease-out "
                                    />

                                    {/* Title */}
                                    <p
                                        className="relative z-10 pl-0 font-[Geologica] text-[#FFF] text-[32px] font-extralight transform transition-transform duration-500 ease-out group-hover:translate-x-20 "
                                    >
                                        {item.title}
                                    </p>
                                </div>


                            </div>
                            <p className="text-[white] text-base leading-6 w-[424px] font-['Inter']">{item.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default ValueSection
