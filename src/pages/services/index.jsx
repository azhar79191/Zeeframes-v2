import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '@/data/servicesData';
import { Frame, Framebalck, Star } from '@/assets/images';
import { Button } from '@/components/ui/button';
import impact from "@/assets/images/impact.png"
import ContactFormSection from '../Home/contactFormSection';
import services from "@/assets/images/services.png"
import comapnyrating from "@/assets/images/company-rating.webp"
export default function ServicePage() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className='sm:py-20 py-8 bg-[#0D0D0D]'>
                   <div className='container'>
                       <div className='flex relative items-center max-w-[797px] mx-auto flex-col gap-3 justify-between'>
                           <h1 className=" text-white sm:text-7xl text-4xl text-center font-extrabold sm:leading-24 leading-12.5 items-center font-['Geologica'] uppercase">{service.title}</h1>
            <p className="text-white text-lg leading-[27px]  text-center font-['Inter'] capitalize">{service.subtitle}</p>
     
                       </div>
                       <div className='absolute sm:top-[51%] top-[25%] sm:right-[1070px] right-[330px] '><Star /></div>
     
     
                       <div className="sm:mt-8 mt-6 flex justify-center mx-auto">
                                           <Button
                                           href="https://calendly.com/contact-zeeframes/30min?month=2026-01"
                                               variant="link"
                                               size="default"
                                               className="relative group border py-2.5 px-4 border-gray-700 text-white hover:text-[#F3FE00] bg-transparent overflow-hidden"
                                           >
                                               <span className="transition-opacity duration-700 group-hover:opacity-0">
                                                 Book a Free Call
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
                   </div>
     
               </section>

      {/* Impact Section */}
      <section className="sm:py-20 py-8 bg-[#0B0B0B]">
        <div className="container">
          <div className="grid sm:grid-cols-[minmax(0,502px)_minmax(0,660px)] grid-cols-1 sm:gap-20 gap-8">
            <div>
              <img src={impact} alt="Impactthumbnail" height="361" width="502" className='max-w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col items-start sm:gap-8 gap-4'>
              <p className="text-[#F3FE00] text-sm ff_geologica font-[normal]">Impact</p>
              <div className='flex flex-col gap-4'>
                <h2 className="text-[#FFF] sm:text-[40px] text-[28px] sm:leading-12 leading-8 font-bold ff_geologica sm:w-[494px] w-full">{service.impact.title}</h2>
                <p className="text-[#BDBDBD] text-sm sm:w-[570px] leading-[21px]">
                {service.impact.description}
              </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:gap-8 gap-3">
                {service.impact.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span><Frame/></span>
                    <span className="text-[#FFF] text-sm font-medium leading-[21px]">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Process Section */}
      <section className="sm:py-20 py-8 bg-[#090909]">
        <div className="container">
          <div className='flex flex-col sm:gap-8 gap-4'>
            <h2 className="text-[#F3FE00] text-sm text-center uppercase ff_geologica">our process</h2>
            <p className="text-[#FFF] sm:w-[677px] w-full sm:mx-auto sm:text-[40px] text-[28px] font-bold flex justify-center  text-center leading-12 ff_geologica">{service.process.title}</p>
            <div className="grid md:grid-cols-2 sm:mt-12 mt-4 lg:grid-cols-4 gap-5">
              {service.process.steps.map((step, index) => {
                const Icon = step.icon;
                const Numbers = step.numbering;
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-8 p-6 rounded-2xl bg-[#121212]
                 hover:bg-[#F3FE00] hover:shadow-[0_16px_23px_0_rgba(243,253,0,0.06)]"
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        <Icon className="text-white group-hover:text-black transition-colors duration-300" />
                      </span>

                      <span>
                        <Numbers />
                      </span>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h3 className="text-lg text-[#FFF] group-hover:text-[#000] leading-[21px]">
                        {step.title}
                      </h3>
                      <p className="text-[#BDBDBD] text-sm group-hover:text-[#000] leading-[21px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="sm:py-20 py-8 bg-[#0B0B0B]">
        <div className="container">
          <div className='flex sm:flex-row flex-col items-center justify-between sm:gap-auto gap-4'>
          <div className='flex flex-col gap-6 w-full sm:max-w-[659px]'>
            <h2 className="text-[#FFF] sm:text-[40px] text-[28px] font-bold leading-12 ff_geologica w-full">{service.benefits.title}</h2>
            <div className="space-y-3">
              {service.benefits.points.map((point, index) => (
                <div key={index} className="flex group items-start gap-3 p-3 bg-[#121212] rounded-lg ">
                  <span className='p-2 rounded-full bg-[#F3FE00] items-center'><Framebalck/></span>
                  <div className='flex flex-col gap-2'>
                  <p className="text-base text-[#FFF] font-semibold leadding-[21px]">{point.title}</p>
                  <h3 className='sm:opacity-0 sm:max-h-0 overflow-hidden
group-hover:opacity-100 group-hover:max-h-40
transition-all duration-300 text-[#DCDCDC] text-sm leading-5
'>{point.description}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <img src={comapnyrating} alt="Company Rating" width="502" height="405" className='h-fit max-w-full object-contain' />
          </div>
        </div>

      </section>

      {/* Services Section */}
      {service.services && (
        <section className="sm:py-20 py-8 bg-[#090909]">
          <div className="container">
            <div className='flex flex-col gap-8'>
              <h2 className="text-[#FFF] sm:w-[677px] w-full sm:mx-auto sm:text-[40px] text-[28px] font-bold flex justify-center text-center leading-12 ff_geologica">{service.services.title}</h2>
              <p className="text-[#BDBDBD] text-sm w-[570px] mx-auto text-center leading-[21px]">
                {service.services.description}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mt-12 mt-6">
                {service.services.items.map((item, index) => (
                  <div key={index} className="p-4 bg-[#121212] rounded-2xl hover:bg-[#1a1a1a] transition-colors">
                    <div>
                      <img src={services} alt={item.title} height="210" width="365" className='h-full w-full object-contain' />
                    </div>
                    <h3 className="text-[#FFF] text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-[#BDBDBD] text-sm leading-[21px]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
     <ContactFormSection/>
    </div>
  );
}