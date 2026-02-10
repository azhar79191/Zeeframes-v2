import { ClientStar, Expert, Google, Success } from '@/assets/images'
import { moveItem } from 'framer-motion'
import React from 'react'
const itemsData=[
    { count:"1200+", text:"Happy Clients", icon:<Success /> },
    { count: "200+", text:"Repeated Clients", icon:<ClientStar/> },
    { count: "30+", text:"UX Experts", icon:<Expert/> },
    { count: "4.8+", text:"Stars On Google",icon:<Google/>}
]

const MissionSection = () => {
  return (
      <section className='z-50 sm:py-20 py-8 relative bg-[#090909]'>
        <div className='container'>
            <div className='flex flex-col gap-6'>
                  <p className='main-heading ff_geologica'>Our Mission</p>
                  <p className='description'>ZeeFrames strives to be a leading UI/UX design agency known for innovative solutions that deliver exceptional user experiences and drive business growth. We blend creativity and user-centered design to craft intuitive, standout products and partner with clients to achieve lasting impact.</p>
            </div>
           <div className='flex sm:flex-row sm:ml-0  flex-col justify-between  sm:mt-20 mt-8'>
                  <p className="text-white text-sm ff_geologica uppercase">Since 2020, what we get...</p>
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-18 ">
                    {itemsData.map((item,index)=>(
                        <div key={index} className=' sm:mt-0 mt-10'>
                            <div className='relative flex flex-col sm:justify-end gap-1 sm:mt-17 mt-2  z-70  '>
                                <span className='absolute -z-10 sm:right-0 right-13 sm:bottom-10 bottom-2'>
                                    {item.icon}
                                </span>
                                <span className="text-[#F3FE00] text-6xl sm:ml-0 ml-16 font-bold font-['Inter']">{item.count}</span>
                                <p className="text-[#C2C2C2] text-[23px] sm:ml-0 ml-16 font-['Inter']">{item.text}</p>
                               
                            </div>
                        </div>
                      
             
                    ))}
              </div>
              </div>
        </div>
    </section>
  )
}

export default MissionSection
