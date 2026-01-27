import React from 'react'
import { Link } from 'react-router-dom'
import Footercard from '@/components/Footercard'
import { America, East, Europe, Pakistan } from '@/assets/images/index.jsx'
import Be from "@/assets/images/zaptab.png"
import Internet from "@/assets/images/zaptait.png"
import Linkden from "@/assets/images/zaptald.png"
import Instagram from "@/assets/images/zaptai.png"
import Facebook from "@/assets/images/zaptaf.png"
import X from "@/assets/images/zaptax.png"
import footerimg from "@/assets/images/footer-large-logo.webp"
const company =[
    {
        text:"Home",
        path:"/"
    },
    {
        text:"About",
        path:"/about"
    },
    {
        text:"Services",
        path:"/services"
    },
    {
        text:"Work",
        path:"/work"
    },
    {
        text:"Insights",
        path:"/insights"
    }
]
const Services = [
    {
        text: "UX UI Design",
        path: "/uxuidesign"
    },
    {
        text: "UX Research",
        path: "/uxresearch"
    },
    {
        text: "Design System",
        path: "/designsystem"
    },
    {
        text: "Web App Design",
        path: "/webappdesign"
    },
    {
        text: "Mobile App Design",
        path: "/mobileappdesign"
    }
]
const Reviews = [
    {
        text: "Clutch (4.8)",
        path: "/clutch"
    },
    {
        text: "Good Firms (4.9)",
        path: "/goodfirms"
    },
    {
        text: "Webflow (4.7)",
        path: "/webflow"
    },
    {
        text: "Dribbble (4.8)",
        path: "/dribbble"
    }
]
const SocialLinks = [
    { img: Be, to: "https://dribbble.com/zeeframes" },
    { img: Linkden, to: "https://www.linkedin.com/company/zeeframes/" },
    { img: Instagram, to: "https://www.instagram.com/zeeframes.design/" },
    { img: X, to: "https://x.com" },
    { img: Facebook, to: "https://www.facebook.com/zeeframes" },
]
const Footer = () => {
  return (
      <footer className='py-8 border-t border-[#2A2A2A]'>
    <div className="container">
        <div className="footer-content">
            <div>
                     <img src={footerimg} alt="Zeeframes" width="1240" height="180" className='max-w-full object-contain h-auto' loading='lazy' />
            </div>
                  <div
                      className="
    grid
    grid-cols-[minmax(200px,1fr)_minmax(110px,216px)_minmax(110px,216px)_minmax(110px,216px)]
    gap-12
    mt-8
  "
                  >

                      <p className='text-[#D5D5D5] text-lg leading-7 font-normal w-98'>We transform ideas into user-centered digital experiences for businesses worldwide, from Fortune 500s to startups, using Figma, Webflow, and no-code solutions.</p>
                      <div>
                          <p className='text-white text-base font-semibold leading-5'>Company</p>
                          <ul className='flex flex-col gap-2 text-[#8F8F8F]  mt-5 w-54'>
                              {company.map((item, index) => (
                                  <li>
                                      <Link to={item.path} className='text-sm hover:text-[#E7E7E7] leading-5'>
                                          {item.text}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </div>
                      <div>
                              <p className='text-white text-base font-semibold leading-5'>Services</p>
                          <ul className='flex flex-col gap-3.5 mt-5 text-[#8F8F8F]  w-54'>
                              {Services.map((item, index) => (
                                  <li>
                                      <Link to={item.path} className='text-sm hover:text-[#E7E7E7] leading-5'>
                                          {item.text}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </div>
                      <div>
                              <p className='text-white text-base font-semibold leading-5 pb-5'>Reviews</p>
                          <ul className='flex flex-col gap-3.5 text-[#8F8F8F]  w-54'>
                              {Reviews.map((item, index) => (
                                  <li>
                                      <Link to={item.path} className='text-sm hover:text-[#E7E7E7] leading-5'>
                                          {item.text}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      
            </div>
                  </div>
                  <div className='p-6 bg-[#171717] grid grid-cols-4 gap-4 rounded-2xl mt-8.5 mb-8'>
                    <Footercard
                    svg={America}
                          title={"North America"}
                          link={"832 Norfolk st Houston Texas 77098"}
                          link2={"+1 (480) 920-1123"}
                    />
                      <Footercard
                          svg={Europe}
                          title={"Europe"}
                          link={"West Tower, 371 Deansgate, Manchester M15 4UP, United Kingdom"}
                          link2={"+44 (746) 0766-922"}
                      />
                      <Footercard
                          svg={East}
                          title={"Middle East"}
                          link={"8640 Umat Al Karim, 4006, Al Majd District, Yanbu Al Bahr 46431"}
                          link2={"+966 (56) 592-3840"}
                      />
                      <Footercard
                          svg={Pakistan}
                          title={"Asia"}
                          link={"144/2, Block B, Bankers Society Near DHA Phase 4, Lahore, 54792"}
                          link2={"042-37888403"}
                      />

                  </div>
                  <div className='flex items-center justify-between'>
                      <p className='text-sm text-[#8F8F8F] leading-5'>© ZeeFrames (Private) Limited. All Rights Reserved.</p>
                      <ul className='flex gap-4'>
                        {SocialLinks.map((item,index)=>(
                          <li key={index}>
                            <Link to={item.to} target="_blank" rel="noopener noreferrer">
                              <img src={item.img} alt={item.name} className='w-10 h-10' />
                            </Link>
                          </li>
                        ))}
                      </ul>
                  </div>
        </div>
        </div>
   </footer>
  )
}

export default Footer
