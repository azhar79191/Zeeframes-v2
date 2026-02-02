import React from 'react'
import { Link } from 'react-router-dom'
import Footercard from '@/components/Footercard'
import { America, East, Europe, Pakistan } from '@/assets/images/index.jsx'
import Be from "@/assets/images/zaptab.webp"
import Internet from "@/assets/images/zaptait.webp"
import Linkden from "@/assets/images/zaptald.webp"
import Instagram from "@/assets/images/zaptai.webp"
import Facebook from "@/assets/images/zaptaf.webp"
import X from "@/assets/images/zaptax.webp"
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
        path: "/services/ui-ux-consulting"
    },
    {
        text: "UX Research",
        path: "/services/ui-ux-insights"
    },
    {
        text: "Design System",
        path: "/services/ui-ux-guideline"
    },
    {
        text: "Web App Design",
        path: "/services/ui-ux-webDesign"
    },
    {
        text: "Mobile App Design",
        path: "/services/ui-ux-mobileDesign"
    }
]
const Reviews = [
    {
        text: "Clutch",
        count: "(4.8)",
        path: "https://clutch.co/profile/zeeframes"
    },
    {
        text: "Good Firms",
        count: "(4.9)",
        path: "#"
    },
    {
        text: "Webflow",
        count:"(4.7)",
        path: "#"
    },
    {
        text: "Dribbble",
        count:"(4.8)",
        path: "https://dribbble.com/zeeframes"
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
    md:grid-cols-[minmax(200px,1fr)_minmax(110px,216px)_minmax(110px,216px)_minmax(110px,216px)]
    grid-cols-2
    md:gap-12
    gap-8
    mt-8
  "
                  >

                      <p className='text-[#D5D5D5] md:text-lg text-base leading-7 font-normal md:w-98 w-full md:col-span-1 col-span-2'>We transform ideas into user-centered digital experiences for businesses worldwide, from Fortune 500s to startups, using Figma, Webflow, and no-code solutions.</p>
                      <div>
                          <p className='text-white text-base font-semibold leading-5'>Company</p>
                          <ul className='flex flex-col gap-2 text-[#8F8F8F] mt-5 md:w-54 w-full'>
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
                          <ul className='flex flex-col gap-3.5 mt-5 text-[#8F8F8F] md:w-54 w-full'>
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
                          <ul className='flex flex-col gap-3.5 text-[#8F8F8F] md:w-54 w-full'>
                              {Reviews.map((item, index) => (
                                  <li>
                                      <Link to={item.path} className='text-sm hover:text-[#E7E7E7] leading-5'>
                                          {item.text}<span className='text-[#E7E7E7]'>{item.count}</span>
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      
            </div>
                  </div>
                  <div className='md:p-6 p-4 bg-[#171717] grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-6 rounded-2xl mt-8.5 mb-8'>
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
                  <div className='flex sm:flex-row flex-col sm:items-center items-start sm:justify-between justify-center sm:gap-6 gap-6'>
                      <p className='md:text-sm text-xs text-[#8F8F8F] leading-5'>© ZeeFrames (Private) Limited. All Rights Reserved.</p>
                      <ul className='flex gap-4 md:justify-end justify-start'>
                        {SocialLinks.map((item,index)=>(
                          <li key={index}>
                            <Link to={item.to} target="_blank" rel="noopener noreferrer">
                              <img src={item.img} alt="Social-link" className='w-10 h-10' />
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
