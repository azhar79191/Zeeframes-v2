import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import nasir from "@/assets/images/nasir.webp"
import ali from "@/assets/images/ali.webp"
import babar from "@/assets/images/babar.webp"
import umer from "@/assets/images/umar.webp"
import nashra from "@/assets/images/nashra.webp"
import gohar from "@/assets/images/gohar.webp"
import abdullah from "@/assets/images/abdullah.webp"
import maryam from "@/assets/images/maryam.webp"
import mubashir from "@/assets/images/mubashir.webp"
import yousaf from "@/assets/images/yousaf.webp"
import mustafa from "@/assets/images/mustafa.webp"
import bilal from "@/assets/images/bilal.webp"
const teamData=[
    {
        img: nasir,
        name: "Nasir Ali",
        role: "CEO & Founder"
    },
    {
        img: ali,
        name: "Mohammad Ali",
        role: "Sales Director"
    }
]
const teamData2=[
    {
        img: babar,
        name: "Muhammad Babar",
        role: "Design Director"
    },
    {
        img: umer,
        name: "Umer Islam",
        role: "UX UI Design Lead"
    } 
]
const teamData3 = [
    {
        img: nashra,
        name: "Nashra Maqsood",
        role: "UX UI Designer"
    },
    {
        img: gohar,
        name: "Goher Ayub",
        role: "UX UI Designer"
    }
]
const teamData4 = [
    {
        img: abdullah,
        name: "Rao Abdullah",
        role: "UX UI Designer"
    },
    {
        img: maryam,
        name: "Mariam Hashmi",
        role: "UX UI Designer"
    },
    {
        img: mubashir,
        name: "Rana Mubashir",
        role: "UX UI Designer"
    }
]
const teamData5 = [
    {
        img: yousaf,
        name: "Muhammad Yousaf",
        role: "UX UI Designer"
    },
    {
        img: mustafa,
        name: "Mustafa Afridi",
        role: "UX UI Designer"
    },
    {
        img: bilal,
        name: "Bilal Younas",
        role: "UX UI Designer"
    }
]


const TeamSection = () => {
  return (
      <section className='relative z-50 '>
          <div className=' sticky  top-5 bg-[#090909] py-20'>
              <SectionHeader eyebrow="our team" title="Meet the people behind the magic" description="Rest assured. Your project is in good hands." align='center'/>
              </div>
              <div className='container'>
              <div className='flex justify-between ml-77 mt-17.5 relative z-30'>
              {teamData.map((item, index) => (
                  <div
                      key={index}
                      className={index === 1 ? "mt-25" : ""}
                  >
                      <img
                          src={item.img}
                          alt="thumbnail"
                          width="310"
                          height="360"
                          className="w-full grayscale-100 hover:grayscale-0 h-auto overflow-hidden rounded-xl"
                      />

                      <div className="flex justify-between mt-4 text-white">
                          <span className="text-[#FFF] text-base leading-5 font-['Inter'] ">{item.name}</span>
                          <p className="text-[#EFEFEF] text-base leading-5 font-['Inter'] ">{item.role}</p>
                      </div>
                  </div>
              ))}
              </div>
              <div className='flex justify-between  mr-102 mt-17.5 relative z-30'>
                  {teamData2.map((item, index) => (
                      <div
                          key={index}
                          className={index === 1 ? "mt-25" : ""}
                      >
                          <img
                              src={item.img}
                              alt="thumbnail"
                              width="310"
                              height="360"
                              className="w-full grayscale-100 hover:grayscale-0 h-auto overflow-hidden rounded-xl"
                          />

                          <div className="flex justify-between mt-4 text-white">
                              <span className="text-[#FFF] text-base leading-5 font-['Inter'] ">{item.name}</span>
                              <p className="text-[#EFEFEF] text-base leading-5 font-['Inter'] ">{item.role}</p>
                          </div>
                      </div>
                  ))}
              </div>
              <div className='flex justify-between  mr-26 ml-50.5 mt-17.5 relative z-30'>
                  {teamData3.map((item, index) => (
                      <div
                          key={index}
                          className={index === 1 ? "mt-25" : ""}
                      >
                          <img
                              src={item.img}
                              alt="thumbnail"
                              width="310"
                              height="360"
                              className="w-full grayscale-100 hover:grayscale-0 h-auto overflow-hidden rounded-xl"
                          />

                          <div className="flex justify-between mt-4 text-white">
                              <span className="text-[#FFF] text-base leading-5 font-['Inter'] ">{item.name}</span>
                              <p className="text-[#EFEFEF] text-base leading-5 font-['Inter'] ">{item.role}</p>
                          </div>
                      </div>
                  ))}
              </div>
              <div className='flex justify-between   mt-17.5 relative z-30'>
                  {teamData4.map((item, index) => (
                      <div
                          key={index}
                          className={index === 1 ? "mt-75" :index  === 2 ? "mt-25":""}
                      >
                          <img
                              src={item.img}
                              alt="thumbnail"
                              width="310"
                              height="360"
                              className="w-full grayscale-100 hover:grayscale-0 h-auto overflow-hidden rounded-xl"
                          />

                          <div className="flex justify-between mt-4 text-white">
                              <span className="text-[#FFF] text-base leading-5 font-['Inter'] ">{item.name}</span>
                              <p className="text-[#EFEFEF] text-base leading-5 font-['Inter'] ">{item.role}</p>
                          </div>
                      </div>
                  ))}
              </div>
              <div className='flex justify-between   mt-17.5 pb-20 relative z-30'>
                  {teamData5.map((item, index) => (
                      <div
                          key={index}
                          className={index === 0 ? "mt-50" : index === 1 ? "mt-25" : ""}
                      >
                          <img
                              src={item.img}
                              alt="thumbnail"
                              width="310"
                              height="360"
                              className="w-full grayscale-100 hover:grayscale-0 h-auto overflow-hidden rounded-xl"
                          />

                          <div className="flex justify-between mt-4 text-white">
                              <span className="text-[#FFF] text-base leading-5 font-['Inter'] ">{item.name}</span>
                              <p className="text-[#EFEFEF] text-base leading-5 font-['Inter'] ">{item.role}</p>
                          </div>
                      </div>
                  ))}
              </div>
              </div>
    </section>
  )
}

export default TeamSection