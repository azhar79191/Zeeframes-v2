import { ArrowUp, Clutch, Derrible, Star, Verified, Webflow } from '@/assets/images'
import React from 'react'
import {America,Europe} from "@/assets/images/index"
import { Button } from '@/components/ui/button'
import Team from "@/assets/images/team.png"
import AboutSection from './AboutSection'
import MissionSection from './MissionSection'
import SliderSection from './SliderSection'
import ValueSection from './ValueSection'
import TeamSection from './TeamSection'
import ReviewSection from './ReviewSection'
import { Link } from 'react-router-dom'
const ratingData = [
    {
        rating: "4.9 Rating",
        svg: <Clutch />,
        path:"https://clutch.co/profile/zeeframes"
    },
    {
        rating: "Best in",
        flags: [<America key="us" />, <Europe key="eu" />],
        svg: <Clutch />,
        path:"#"
    },
    {
        rating:"150 M Views",
        svg: <Derrible/>,
        path: "#"
    },
    {
        rating: "Verified",
        flags: [<Verified key="verified" />],
        svg: <Webflow />,
        path: "#"
    }

];

const About = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='flex relative items-center flex-col sm:gap-3 gap-4 justify-between sm:mt-20 mt-8'>
                        <h1 className=" text-white sm:text-7xl text-4xl max-w-182 text-center font-extrabold sm:leading-24 leading-12.5 items-center font-['Geologica'] uppercase">A Strategic UI UX Design Agency</h1>
                        <p className="text-white sm:text-lg text-base leading-[27px] sm:max-w-194 max-w-full text-center font-['Inter']">We are the best product design agency for startups. We excel in UI/UX design, branding, web development & committed to 100% satisfaction with every project.</p>

                    </div>
                    <div className='absolute sm:top-[51%] top-[30%] sm:right-[1070px] right-[320px] '><Star /></div>


                    <div className="sm:mt-8 mt-6 flex justify-center mx-auto">
                        <Button
                            variant="link"
                            size="default"
                            className="relative group border py-2.5 px-4 border-gray-700 text-white hover:text-[#F3FE00] bg-transparent overflow-hidden"
                        >
                            <span className="transition-opacity duration-700 group-hover:opacity-0">
                                Request a Proposal Today
                            </span>

                            <span
                                className="absolute inset-0 flex items-center justify-center gap-4
      opacity-0 translate-x-2 transition-all duration-300 text-[#F3FE00] ease-out
      group-hover:opacity-100 group-hover:translate-x-0"
                            >
                                Book a Demo
                            </span>
                        </Button>
                    </div>

                    <div className='grid sm:grid-cols-4 grid-cols-1 sm:mt-16 mt-8 sm:mb-25 mb-8 gap-4'>
                    {ratingData.map((item, index) => (
                        <div
                            key={index}
                            className="sm:px-5 px-3 py-3 flex sm:flex-col flex-row items-center sm:gap-3 gap-2 rounded-xl border sm:w-fit w-full bg-[#171717] border-[#373737]"
                        >
                            <div className='flex items-center justify-center sm:gap-2.5 gap-1.5'>
                            <h2 className="text-[#FFF] text-center whitespace-nowrap sm:text-lg text-base font-semibold leading-[21px] font-['Inter']">
                                {item.rating}
                            </h2>

                            {item.flags && (
                                <div className="flex items-center sm:gap-1 gap-0.5">
                                    {item.flags.map((flag, i) => (
                                        <span key={i}>{flag}</span>
                                    ))}
                                </div>
                            )}
                            </div>
                            <Link className="sm:px-1.5 px-1 py-1 sm:mt-4 mt-0 rounded-full border border-[#373737] flex items-center gap-1.5" to={item.path} target='blank'>
                                <span className="px-2 py-1 bg-white rounded-full w-fit">
                                    {item.svg}
                                </span>

                                <p className="font-['Inter'] text-sm whitespace-nowrap text-[#D5D5D5] leading-4">
                                    Reviewed on
                                </p>

                                <span className="px-3 py-1 rounded-full border border-[#B5B5B5] text-center">
                                    <ArrowUp />
                                </span>
                            </Link>
                        </div>
                    ))}

                    </div>
                </div>

            </section>
            <section className='sm:sticky  top-10'>
                <img src={Team} alt="Team thumbnail" width="1441" height="677" className='w-full object-cover h-auto' defer/>
            </section>
            <AboutSection/>
            <MissionSection/>
            <SliderSection/>
            <ValueSection/>
            <TeamSection/>
            <ReviewSection/>
        </>
    )
}
export default About
