import React from 'react'
import ShowcaseCard from "@/components/ShowcaseCard";
import SectionHeader from '@/components/SectionHeader';
import img1 from "@/assets/images/showcase1.png";
import img2 from "@/assets/images/showcase2.png";
import img3 from "@/assets/images/showcase3.png";
import img4 from "@/assets/images/showcase4.png";
import img5 from "@/assets/images/showcase5.png";
import img6 from "@/assets/images/showcase6.png";
import { Button } from "@/components/ui/button";

const ShowcaseSection = () => {
  return (
      <section className="py-20">
        <div className="container">
          <SectionHeader
              eyebrow="how we helped others succeed"
              title="Our Creative Showcase"
              description="We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16">

              <ShowcaseCard
                  image={img1}
                  title="Bloom Money"
                  description="Empowering communities with financial solutions."
              />

              <ShowcaseCard
              className="mt-30"
                  image={img2}
                  title="Alfan"
                  description="The Platform for Content Creators"
              />
              <ShowcaseCard
                  image={img3}
                  title="Earpoin"
                  description="The Best Place ToFind Productivity Tools"
              />

              <ShowcaseCard
                  className="mt-30"
                  image={img4}
                  title="Finnecta"
                  description="Wallet application to streamline digital transactions"
              />
              <ShowcaseCard
                  image={img5}
                  title="Trivo"
                  description="Clearbit, a business intelligence platform"
              />
              <ShowcaseCard
                  className="mt-30"
                  image={img6}
                  title="Fastgo"
                  description="Fastgo’s scooter rental app to drive adoption"
              />
          </div>


          <div className='border-1 border-dashed border-[#343434] mt-15 rounded-xl'>
            <div className='flex flex-col items-center justify-center gap-5 py-10 px-8'>
                <p className="text-white text-2xl font-semibold">Your Project here</p>
                  <p className="max-w-[494px] text-sm text-white text-center">The proof is in our work. Check out <span className='underline text-[#F3FE00]'>
                      <a href="">our case studies</a></span> to learn how our product development services can transform your business</p>
                  <Button className="w-50">
                      <span className="group-hover:hidden flex items-center gap-3 justify-center">
                         Book a dicovery call
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M14.5833 5.4165L5 14.9998" stroke="#0B0B0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M6.66669 5H15V13.3333" stroke="#0B0B0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </span>
                      <span className="hidden group-hover:block">
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
