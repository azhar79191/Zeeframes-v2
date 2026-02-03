
import { Button } from '@/components/ui/button'
import stars from "@/assets/images/clutch-reviews.svg"
import SectionHeader from '@/components/SectionHeader'
import { Arrowup1, Minus, Plus } from '@/assets/images'
import { Link } from 'react-router-dom'
import { FAQS } from './Home.constant'


const FaqsSection = ({activeIndex, toggle }) => {

    return (
        <section className="py-20 sm:block hidden">
            <div className="container">
                <div className="grid grid-cols-[minmax(100px,397px)_minmax(100px,1fr)] gap-12">
                    <div>
                        <SectionHeader
                            align='start'
                            titleclassName='pt-4'
                            eyebrow="FAQs"
                            title="Got Question?"
                            description="We begin with meaningful conversations that drive design decisions."
                        />
                        <div className='flex items-center gap-8 pt-8'>
                            <Button href="https://calendly.com/contact-zeeframes/30min?month=2026-01" target="_blank" className="w-47 h-12 bg-white">
                                <span className="group-hover:hidden flex items-center gap-3 justify-center">
                                    Book a free call
                                    <Arrowup1 />
                                </span>
                                <span className="hidden group-hover:block">
                                    Lets talk
                                </span>
                            </Button>
                            <Link href="#"><img src={stars} alt="stars" className='h-12 w-41' loading='lazy' />
                            </Link>

                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {FAQS.map((item, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`rounded-xl border transition-all duration-300
                                        ${isActive
                                            ? "border-[#F3FE00] bg-[rgba(243,254,0,0.04)]"
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
                                                <Minus />
                                            ) : (
                                                <Plus />
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
