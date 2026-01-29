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
import { Linkden, Mail, Whatsapp } from '@/assets/images';

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
                                    <Linkden/>
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
                                   <Linkden/>
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
