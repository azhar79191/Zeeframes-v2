import logo from "@/assets/images/sheild.webp";
import { Button } from "@/components/ui/button";
import cloud from "@/assets/images/cloud.svg";
import star from "@/assets/images/star.svg";
import walmart from "@/assets/images/wal-mart.webp";
import cisco from "@/assets/images/cisco.webp";
import yallamotor from "@/assets/images/yallaMotor.webp";
import nisan from "@/assets/images/nissan-motor-corporation.webp";
import trifla from "@/assets/images/trafilea.webp";
import repurpose from "@/assets/images/repurpose.webp";
import adiqat from "@/assets/images/adiqat.webp";
import Lets from "@/assets/images/letstalk.svg";
import { FigmaIcon, XD, FrameW, Vector, Frame2, Diamond } from "@/assets/images";
const logos = [walmart, cisco, trifla, yallamotor, nisan, repurpose, adiqat];

const Icons = [
    {
        icon: <FigmaIcon />
    },
    {
        icon: <Diamond />
    },
    {
        icon: <XD />
    },
    {
        icon: <FrameW />
    },
    {
        icon: <Vector />
    },
    {
        icon: <Frame2 />
    },
]

const HeroSection = () => {
    return (
        <section className="">
            <div className="container">
            {/* Glow background */}
            <div className="absolute left-1/9 top-40 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-[#F3FE00]/20 blur-[120px]" />
            <div className="absolute right-1 top-40  h-[320px] w-[320px] rounded-full bg-[#F3FE00]/20 blur-[120px]" />
            <div className="absolute left-1/4 top-20 -translate-x-1/2">
                <img src={cloud} alt="cloud" loading="lazy" width="435" height="429" />
            </div>
            <div className="absolute sm:left-1/8 left-1/9 sm:top-120 top-85 -translate-x-1/2">
                <img src={star} alt="star" loading="lazy" />
            </div>

            <div className="sm:flex flex-wrap sm:my-12 my-8 items-center gap-3 relative z-30  border border-[#1F1F1F] w-fit justify-center mx-auto p-2 rounded-md">
                <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#F3FE00]">
                    <img src={logo} alt="logo" className="h-4" />
                </span>

                <p className="text-base leading-6 text-white ">
                    Trusted by startups to craft $100M+ designs with
                </p>
                </div>

                <ul className="flex items-center sm:mt-0 mt-3  group -translate-x-2 mr-2 ml-2">
                    {Icons.map((item, index) => (
                        <li
                            key={index}
                            className={`flex items-center justify-center transition-transform duration-300  ease-in-out ${index > 0 ? 'group-hover:translate-x-1' : ''}`}
                        >
                            <span className="-ms-[7px] w-[32px] h-[32px] rounded-full bg-[#303030] border border-[#0D0D0C] flex items-center justify-center">
                                {item.icon}
                            </span>
                            
                        </li>
                    ))}
                </ul>
            </div>


            <div className="relative text-center sm:mt-12 mt-0">
                <h1 className="text-center sm:text-7xl text-4xl sm:w-243 w-[327px] uppercase ff_geologica mx-auto font-extrabold sm:leading-24 leading-12.5 text-[#FFF]">
                    Creative Intelligence in Every Pixel
                </h1>

                <span className="absolute right-23 ff_geologica top-4 sm:block hidden rounded-md rotate-7 bg-[#F3FE00] px-2 py-1 text-xs font-extrabold text-black">
                    NO CODE
                </span>
            </div>

            <p className="mx-auto mt-3 sm:mb-12 mb-0 ff_geologica sm:text-xl text-base text-gray-400 text-center">
                We Craft <span className="text-[#F3FE00]">Stunning</span> Designs For Businesses Worldwide.
            </p>
            <div className="sm:mt-8 mt-6 flex justify-center gap-4">
                    <Button href="https://calendly.com/contact-zeeframes/30min?month=2026-01" className="relative group overflow-hidden" variant="destructive" size="destructive" target="_blank">
                    {/* Default state */}
                    <span className="flex items-center justify-center gap-3 transition-opacity duration-300 group-hover:opacity-0">
                        Schedule Call
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <img
                            src={Lets}
                            alt="thumb"
                            className="w-11 h-11 transform -translate-x-4 opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                        />
                        <span className="transform translate-x-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                            Lets Talk 🤙
                        </span>

                    </span>
                </Button>


                    <Button href="https://www.figma.com/proto/Wvc5EAdw0leAMdlJ3tF6Be/ZeeFrames--Website-%7C-Portfolio-%7C-New-Branding?page-id=0%3A1&node-id=1653-10&viewport=-98%2C1247%2C0.16&t=I70aaK7I2yFjTlya-1&scaling=scale-down&content-scaling=fixed" variant="default" size="default" className="relative group border py-2.5 px-4 border-gray-700 text-white bg-transparent" target="_blank">
                    <span className="transition-opacity group-hover:opacity-0">
                        © 2025 Work
                    </span>

                    <span className="absolute inset-0 flex items-center justify-center gap-4 
  opacity-0 translate-x-2
  transition-all duration-700 ease-out
  group-hover:opacity-100 group-hover:translate-x-0">
                        Open
                     <FigmaIcon/>
                    </span>

                </Button>
            </div>

            <p className="text-white text-sm text-center sm:mt-22 mt-8 font-medium">Trusted by Industry Leaders & Fast-Growing Startups</p>


            <div className="sm:mt-6 mt-5 sm:mb-21 mb-8 sm:mx-5 mx-0 overflow-hidden relative">
                <div className="flex logo-track sm:gap-12 gap-10 w-max animate-logo-scroll">
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="brand"
                            loading="lazy"
                            className="h-8 w-38"
                        />
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
};

export default HeroSection;
