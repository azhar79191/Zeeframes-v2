import React from 'react'
import SectionHeader from '@/components/SectionHeader';
import { Button } from "@/components/ui/button";
import ShowCaseCards from './ShowCaseCards';
import { Arrowup1 } from '@/assets/images';
import { Link } from 'react-router-dom';

const ShowcaseSection = () => {
  return (
      <section className="sm:py-20 py-8">
        <div className="container">
          <SectionHeader
              eyebrow="how we helped others succeed"
              title="Our Creative Showcase"
              description="We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
          />
<ShowCaseCards/>


          <div className='border-1 border-dashed border-[#343434] mt-15 rounded-xl'>
            <div className='flex flex-col items-center justify-center gap-5 py-10 px-8'>
            <p className="text-white text-2xl font-semibold ff_geologica">Your Project here</p>
                  <p className="sm:max-w-[494px] max-w-full text-sm text-white text-center">The proof is in our work. Check out <span className='underline text-[#F3FE00]'>
                      <Link to="/work">our case studies</Link></span> to learn how our product development services can transform your business</p>
            <Button href="https://calendly.com/contact-zeeframes/30min?month=2026-01" target="_blank" variant="default" size="default" className="relative group">
                          <span className="flex items-center gap-3 justify-center transition-opacity group-hover:opacity-0">
                         Book a dicovery call
                          <Arrowup1/>
                      </span>
                          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                          Let talk
                      </span>
                  </Button>
            </div>

          </div>
          </div>
    </section>
  )
}

export default ShowcaseSection
