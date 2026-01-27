import React from 'react'
import SectionHeader from '@/components/SectionHeader'
import Input from '@/components/input';
import ali from "@/assets/images/ali.png";
import babar from "@/assets/images/babar.png";
import techlogo from "@/assets/images/techlogo.png";
import trustpilot from "@/assets/images/trustpilot.svg";
import uilogo from "@/assets/images/ui-ux.png";
import awardbanner from "@/assets/images/awardbanner.svg";
import Textarea from '@/components/Textarea';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Whatsapp } from '@/assets/images';

const ContactFormSection = () => {
    return (
        <section className='py-20'>
            <div className='container'>
                <div className='grid grid-cols-[minmax(100px,636px)_minmax(100px,491px)] gap-16'>
                <div className='flex flex-col gap-8'>
                    <SectionHeader
                        align='start'
                        eyebrow="Contact us"
                        title="Lets work on what you care about!"
                        description="Got a project in mind? From a full UI/UX refresh to a brand-new digital experience, we’re ready to help. Let’s turn your vision into reality"
                        titleclassName='w-127 pt-4'
                        descriptionclassName='w-133'
                    />
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center gap-4'>
                            <img src={ali} alt="Muhammad Ali" className='w-12 h-12' />
                            <div className='flex flex-col gap-1.5'>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-base font-medium leading-6 text-[#FFF]'>Muhammad Ali</h3>
                                    <Link aria-label='linkden' to="#" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_173_16509)">
                                            <path d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="white" />
                                            <path d="M11.8971 0.666504H4.10547C2.20699 0.666504 0.667969 2.20553 0.667969 4.104V11.8957C0.667969 13.7941 2.20699 15.3332 4.10547 15.3332H11.8971C13.7956 15.3332 15.3346 13.7941 15.3346 11.8957V4.104C15.3346 2.20553 13.7956 0.666504 11.8971 0.666504Z" fill="white" />
                                            <path d="M11.545 13.6053H13.3743C13.5124 13.6053 13.6243 13.4934 13.6243 13.3554L13.6253 9.49024C13.6253 7.47006 13.19 5.91721 10.8292 5.91721C9.93172 5.88389 9.08541 6.3465 8.62872 7.119C8.62509 7.12512 8.61859 7.12887 8.61147 7.12887C8.60047 7.12887 8.59153 7.11993 8.59153 7.10893V6.35375C8.59153 6.21569 8.47966 6.10376 8.34153 6.10376H6.60547C6.46741 6.10376 6.35547 6.21569 6.35547 6.35375V13.355C6.35547 13.4931 6.46741 13.605 6.60547 13.605H8.43472C8.57278 13.605 8.68472 13.4931 8.68472 13.355V9.89418C8.68472 8.91562 8.87034 7.96793 10.0835 7.96793C11.2795 7.96793 11.295 9.08768 11.295 9.95756V13.3553C11.295 13.4934 11.4069 13.6053 11.545 13.6053Z" fill="#0B0B0B" />
                                            <path d="M2.375 3.72672C2.375 4.46826 2.98547 5.07837 3.72701 5.07837C4.4684 5.0783 5.07844 4.46783 5.07844 3.72644C5.0783 2.98504 4.46819 2.375 3.72672 2.375C2.98519 2.375 2.375 2.98519 2.375 3.72672Z" fill="#0B0B0B" />
                                            <path d="M2.80859 13.6056H4.64029C4.77836 13.6056 4.89029 13.4936 4.89029 13.3556V6.35399C4.89029 6.21594 4.77836 6.104 4.64029 6.104H2.80859C2.67052 6.104 2.55859 6.21594 2.55859 6.35399V13.3556C2.55859 13.4936 2.67052 13.6056 2.80859 13.6056Z" fill="#0B0B0B" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_173_16509">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                        </Link>
                                </div>
                                <p className='text-sm leading-5 text-[#D5D5D5]'>Director & Co-Founder</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={babar} alt="Muhammad Ali" className='w-12 h-12' />
                            <div className='flex flex-col gap-1.5'>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-base font-medium leading-6 text-[#FFF]'>Muhammad Babar</h3>
                                    <Link aria-label='linkden' to="#" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_173_16509)">
                                            <path d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="white" />
                                            <path d="M11.8971 0.666504H4.10547C2.20699 0.666504 0.667969 2.20553 0.667969 4.104V11.8957C0.667969 13.7941 2.20699 15.3332 4.10547 15.3332H11.8971C13.7956 15.3332 15.3346 13.7941 15.3346 11.8957V4.104C15.3346 2.20553 13.7956 0.666504 11.8971 0.666504Z" fill="white" />
                                            <path d="M11.545 13.6053H13.3743C13.5124 13.6053 13.6243 13.4934 13.6243 13.3554L13.6253 9.49024C13.6253 7.47006 13.19 5.91721 10.8292 5.91721C9.93172 5.88389 9.08541 6.3465 8.62872 7.119C8.62509 7.12512 8.61859 7.12887 8.61147 7.12887C8.60047 7.12887 8.59153 7.11993 8.59153 7.10893V6.35375C8.59153 6.21569 8.47966 6.10376 8.34153 6.10376H6.60547C6.46741 6.10376 6.35547 6.21569 6.35547 6.35375V13.355C6.35547 13.4931 6.46741 13.605 6.60547 13.605H8.43472C8.57278 13.605 8.68472 13.4931 8.68472 13.355V9.89418C8.68472 8.91562 8.87034 7.96793 10.0835 7.96793C11.2795 7.96793 11.295 9.08768 11.295 9.95756V13.3553C11.295 13.4934 11.4069 13.6053 11.545 13.6053Z" fill="#0B0B0B" />
                                            <path d="M2.375 3.72672C2.375 4.46826 2.98547 5.07837 3.72701 5.07837C4.4684 5.0783 5.07844 4.46783 5.07844 3.72644C5.0783 2.98504 4.46819 2.375 3.72672 2.375C2.98519 2.375 2.375 2.98519 2.375 3.72672Z" fill="#0B0B0B" />
                                            <path d="M2.80859 13.6056H4.64029C4.77836 13.6056 4.89029 13.4936 4.89029 13.3556V6.35399C4.89029 6.21594 4.77836 6.104 4.64029 6.104H2.80859C2.67052 6.104 2.55859 6.21594 2.55859 6.35399V13.3556C2.55859 13.4936 2.67052 13.6056 2.80859 13.6056Z" fill="#0B0B0B" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_173_16509">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                        </Link>
                                </div>
                                <p className='text-sm leading-5 text-[#D5D5D5]'>Director & Co-Founder</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm leading-5 text-[#D5D5D5] flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 1.0415C5.0538 1.0415 1.04297 5.05234 1.04297 9.99984C1.04297 14.9473 5.0538 18.9582 10.0013 18.9582C14.9488 18.9582 18.9596 14.9473 18.9596 9.99984C18.9596 5.05234 14.9488 1.0415 10.0013 1.0415ZM6.2763 9.97484C6.15782 9.86444 6.00112 9.80433 5.8392 9.80719C5.67728 9.81005 5.52279 9.87564 5.40828 9.99015C5.29377 10.1047 5.22818 10.2592 5.22532 10.4211C5.22247 10.583 5.28257 10.7397 5.39297 10.8582L7.89297 13.3582C8.01016 13.4752 8.16901 13.541 8.33464 13.541C8.50026 13.541 8.65911 13.4752 8.7763 13.3582L14.6096 7.52484C14.72 7.40636 14.7801 7.24965 14.7773 7.08774C14.7744 6.92582 14.7088 6.77133 14.5943 6.65682C14.4798 6.54231 14.3253 6.47671 14.1634 6.47386C14.0015 6.471 13.8448 6.5311 13.7263 6.6415L8.33464 12.0332L6.2763 9.97484Z" fill="#BDBDBD" />
                        </svg> You’ll hear from us within one business day.</p>
                        <p className='text-sm leading-5 text-[#D5D5D5] flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 1.0415C5.0538 1.0415 1.04297 5.05234 1.04297 9.99984C1.04297 14.9473 5.0538 18.9582 10.0013 18.9582C14.9488 18.9582 18.9596 14.9473 18.9596 9.99984C18.9596 5.05234 14.9488 1.0415 10.0013 1.0415ZM6.2763 9.97484C6.15782 9.86444 6.00112 9.80433 5.8392 9.80719C5.67728 9.81005 5.52279 9.87564 5.40828 9.99015C5.29377 10.1047 5.22818 10.2592 5.22532 10.4211C5.22247 10.583 5.28257 10.7397 5.39297 10.8582L7.89297 13.3582C8.01016 13.4752 8.16901 13.541 8.33464 13.541C8.50026 13.541 8.65911 13.4752 8.7763 13.3582L14.6096 7.52484C14.72 7.40636 14.7801 7.24965 14.7773 7.08774C14.7744 6.92582 14.7088 6.77133 14.5943 6.65682C14.4798 6.54231 14.3253 6.47671 14.1634 6.47386C14.0015 6.471 13.8448 6.5311 13.7263 6.6415L8.33464 12.0332L6.2763 9.97484Z" fill="#BDBDBD" />
                        </svg> Our team will gather your project details and put together a clear brief.</p>

                        <p className='text-sm leading-5 text-[#D5D5D5] flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 1.0415C5.0538 1.0415 1.04297 5.05234 1.04297 9.99984C1.04297 14.9473 5.0538 18.9582 10.0013 18.9582C14.9488 18.9582 18.9596 14.9473 18.9596 9.99984C18.9596 5.05234 14.9488 1.0415 10.0013 1.0415ZM6.2763 9.97484C6.15782 9.86444 6.00112 9.80433 5.8392 9.80719C5.67728 9.81005 5.52279 9.87564 5.40828 9.99015C5.29377 10.1047 5.22818 10.2592 5.22532 10.4211C5.22247 10.583 5.28257 10.7397 5.39297 10.8582L7.89297 13.3582C8.01016 13.4752 8.16901 13.541 8.33464 13.541C8.50026 13.541 8.65911 13.4752 8.7763 13.3582L14.6096 7.52484C14.72 7.40636 14.7801 7.24965 14.7773 7.08774C14.7744 6.92582 14.7088 6.77133 14.5943 6.65682C14.4798 6.54231 14.3253 6.47671 14.1634 6.47386C14.0015 6.471 13.8448 6.5311 13.7263 6.6415L8.33464 12.0332L6.2763 9.97484Z" fill="#BDBDBD" />
                        </svg>We’ll provide a tailored estimate and share a proposal for your review.</p>

                    </div>
                    <div className='flex items-center gap-6'>
                        <a href="https://techbehemoths.com/company/zeeframes" target='_blank'>
                            <img src={techlogo} alt="techlogo" className='w-27 h-9' />
                        </a>
                        <a href="https://www.trustpilot.com/review/zeeframes.com" target='_blank'>
                            <img src={trustpilot} alt="trustpilot" className='w-39 h-9' />
                        </a>
                        <a href="https://selectedfirms.co/agency/zeeframes" target='_blank'>
                            <img src={uilogo} alt="uilogo" className='w-13 h-9' />
                        </a>
                        <a href="https://techbehemoths.com/awards-2024/ux-ui-design/pakistan#view=64495" target='_blank'>
                            <img src={awardbanner} alt="awardbanner" className='w-12 h-9' />
                        </a>
                    </div>
                </div>
                    <form action="submit" className='p-6 rounded-3xl border bg-[rgba(255,255,255,0.05)] border-[#373737]'>
                    <div className='flex flex-col gap-7'>
                            <Input placeholder="Full Name*" />
                        <Input placeholder="Email*" />
                        <Input placeholder="Company" />
                        <Input placeholder="Contact" />
                        <Textarea Name="projects" Id="Project" placeholder="Tell us about your project*" />
                            <Button
                                className="w-full h-12 text-[#FFF] bg-[#242323] border border-[#F3FE00] hover:bg-[linear-gradient(90deg,#F3FE00_0%,#33DE1D_100%)]"
                            >

                            Submit Inquiry
                        </Button>
                        <div className='flex flex-col gap-3'>
                                <p className='text-sm leading-5 text-[#F2F2F2]'>Hate contact forms? Direct Contact.</p>
                            <div className='flex items-center gap-4'>
                                    <a href="https://wa.me/+14232493851" target='blank' aria-label='contact us on whatsapp via +14232493851' className='text-sm leading-5 text-[#BDBDBD] flex items-center gap-1.5'>
                                    <Whatsapp/>
                                    +14232493851</a>
                                    <a href="mailto:businessmanager@zeeframes.com" target='blank' aria-label='Mail us on businessmanager@zeeframes.com' className='text-sm leading-5 text-[#BDBDBD] flex items-center gap-1.5'>
                                        <Mail/>
                                    businessmanager@zeeframes.com
                                </a>
                            </div>
                        </div>

                    </div>

                </form>
                </div>
            </div>
        </section>
    )
}

export default ContactFormSection
