import logo from "@/assets/images/sheild.png";
import { Button } from "@/components/ui/button";
import cloud from "@/assets/images/cloud.svg";
import star from "@/assets/images/star.svg";
import walmart from "@/assets/images/wal-mart.png";
import cisco from "@/assets/images/cisco.png";
import yallamotor from "@/assets/images/yallaMotor.png";
import nisan from "@/assets/images/nissan-motor-corporation.png";
import trifla from "@/assets/images/trafilea.png";
import repurpose from "@/assets/images/repurpose.png";
import adiqat from "@/assets/images/adiqat.png";
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
        <section>

            {/* Glow background */}
            <div className="absolute left-1/9 top-40 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-[#F3FE00]/20 blur-[120px]" />
            <div className="absolute right-1 top-40  h-[320px] w-[320px] rounded-full bg-[#F3FE00]/20 blur-[120px]" />
            <div className="absolute left-1/4 top-20 -translate-x-1/2">
                <img src={cloud} alt="cloud" loading="lazy" />
            </div>
            <div className="absolute left-1/8 top-120 -translate-x-1/2">
                <img src={star} alt="star" loading="lazy" />
            </div>

            <div className="flex my-12 items-center gap-3  bg-black border border-[#1F1F1F] w-fit justify-center mx-auto p-2 rounded-md">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#F3FE00]">
                    <img src={logo} alt="logo" className="h-4" />
                </span>

                <p className="text-base leading-6 text-white whitespace-nowrap">
                    Trusted by startups to craft $100M+ designs with
                </p>

                <ul className="flex items-center -translate-x-2 mr-2 ml-2">
                    {Icons.map((item, index) => (
                        <li
                            key={index}
                            className="flex h-6 w-6 items-center justify-center -ms-1 rounded-full bg-[#1A1A1A] border border-black"
                        >
                            {item.icon}
                        </li>
                    ))}
                </ul>
            </div>


            <div className="relative text-center mt-12">
                <h1 className="text-center text-7xl w-243 mx-auto font-extrabold leading-24 text-white">
                    CREATIVE INTELLIGENCE IN EVERY PIXEL updated
                </h1>

                <span className="absolute right-45 top-4 rounded-md rotate-7 bg-[#F3FE00] px-2 py-1 text-[10px] font-bold text-black">
                    NO CODE
                </span>
            </div>

            <p className="mx-auto mt-3 mb-12  text-xl text-gray-400 text-center">
                We Craft <span className="text-[#F3FE00]">Stunning</span> Designs For Businesses Worldwide.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button className="relative group overflow-hidden" variant="destructive" size="destructive">
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


                <Button variant="default" size="default" className="relative group border py-2.5 px-4 border-gray-700 text-white bg-transparent">
                    <span className="transition-opacity group-hover:opacity-0">
                        © 2025 Work
                    </span>

                    <span className="absolute inset-0 flex items-center justify-center gap-4 
  opacity-0 translate-x-2
  transition-all duration-700 ease-out
  group-hover:opacity-100 group-hover:translate-x-0">
                        Open
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
                            <g clipPath="url(#clip0_4066_5248)">
                                <path d="M5.33313 8.00016C5.33313 6.52743 6.52679 5.3335 7.99926 5.3335C9.4717 5.3335 10.6654 6.52743 10.6654 8.00016C10.6654 9.47293 9.4717 10.6668 7.99926 10.6668C6.52679 10.6668 5.33313 9.47293 5.33313 8.00016Z" fill="#1ABCFE" />
                                <path d="M0.00109863 13.3332C0.00109863 11.8604 1.19476 10.6665 2.66723 10.6665H5.33337V13.3332C5.33337 14.8059 4.13971 15.9998 2.66723 15.9998C1.19476 15.9998 0.00109863 14.8059 0.00109863 13.3332Z" fill="#0ACF83" />
                                <path d="M5.33313 0V5.3333H7.99926C9.47174 5.3333 10.6654 4.1394 10.6654 2.66663C10.6654 1.19386 9.47174 0 7.99926 0H5.33313Z" fill="#FF7262" />
                                <path d="M0.00109863 2.66667C0.00109863 4.13944 1.19476 5.33333 2.66723 5.33333H5.33337V0H2.66723C1.19476 0 0.00109863 1.19393 0.00109863 2.66667Z" fill="#F24E1E" />
                                <path d="M0.00109863 8.00016C0.00109863 9.47293 1.19476 10.6668 2.66723 10.6668H5.33337V5.3335H2.66723C1.19476 5.3335 0.00109863 6.52743 0.00109863 8.00016Z" fill="#A259FF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4066_5248">
                                    <rect width="10.6667" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>

                </Button>
            </div>

            <p className="text-white text-sm text-center mt-22 font-medium">Trusted by Industry Leaders & Fast-Growing Startups</p>


            <div className="mt-6 mb-21 mx-30 overflow-hidden relative">
                <div className="flex logo-track gap-8 w-max animate-logo-scroll">
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
        </section>
    );
};

export default HeroSection;
