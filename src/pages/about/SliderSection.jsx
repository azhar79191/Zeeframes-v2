import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import swipper1 from"@/assets/images/swippper1.webp"
import swipper2 from "@/assets/images/swipper2.webp"
import swipper3 from "@/assets/images/swipper3.webp"
import swipper4 from "@/assets/images/swipper4.webp"
import swipper5 from "@/assets/images/swipper5.webp"
const logos = [swipper1, swipper2, swipper3, swipper4, swipper5,swipper1, swipper2,swipper3,swipper4,swipper5];

const SliderSection = () => {
  return (
      <section className='py-20 relative z-50 bg-[#0B0B0B]'>
          <SectionHeader eyebrow="our culture" title="Behind The Scenes" description="We believe in clear communication, proactive problem solving, and full transparency.." />

          <div className="overflow-hidden relative">
              <div className="flex gap-2 mt-16 team-slider animate-logo-scroll">
                  {[...logos, ...logos].map((logo, index) => (
                      <img
                          key={index}
                          src={logo}
                          alt="brand"
                          width="282"
                          height="360"
                          loading="lazy"
                          className="h-auto w-full object-cover grayscale-100 "
                      />
                  ))}
              </div>
          </div>
    </section>
  )
}

export default SliderSection
