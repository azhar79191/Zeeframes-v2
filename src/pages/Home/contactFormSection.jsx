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

const contactFormSection = () => {
    return (
        <section className='py-20'>
            <div className='container'>
                <div className='grid grid-cols-[minmax(100px,639px)_minmax(100px,540px)] gap-16'>
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
                                </div>
                                <p className='text-sm leading-5 text-[#D5D5D5]'>Director & Co-Founder</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={babar} alt="Muhammad Ali" className='w-12 h-12' />
                            <div className='flex flex-col gap-1.5'>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-base font-medium leading-6 text-[#FFF]'>Muhammad Babar</h3>
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
                <form action="submit" className='w-135 p-6 rounded-3xl border border-[#373737]'>
                    <div className='flex flex-col gap-7'>
                        <Input placeholder="Full Name*" />
                        <Input placeholder="Email*" />
                        <Input placeholder="Company" />
                        <Input placeholder="Contact" />
                        <Textarea Name="projects" Id="Project" placeholder="Tell us about your project*" />
                        <Button className="w-full text-black h-12" style={{ background: 'linear-gradient(90deg, #F3FE00 0%, #33DE1D 100%)' }}>
                            Submit Inquiry
                        </Button>
                        <div className='flex flex-col gap-3'>
                            <p className='text-sm leading-5 text-[#FFF]'>Hate contact forms? Direct Contact.</p>
                            <div className='flex items-center gap-4'>
                                <a href="https://wa.me/+14232493851" target='blank' aria-label='contact us on whatsapp via +14232493851' className='text-sm leading-5 text-[#D5D5D5] flex items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="#BDBDBD" stroke-width="1.5" />
                                    </svg>+14232493851</a>
                                <a href="mailto:businessmanager@zeeframes.com" target='blank' aria-label='Mail us on businessmanager@zeeframes.com' className='text-sm leading-5 text-[#D5D5D5] flex items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.944 3.25H14.056C15.894 3.25 17.35 3.25 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V12.056C22.75 13.894 22.75 15.35 22.597 16.489C22.439 17.661 22.107 18.61 21.359 19.359C20.61 20.107 19.661 20.439 18.489 20.597C17.349 20.75 15.894 20.75 14.056 20.75H9.944C8.106 20.75 6.65 20.75 5.511 20.597C4.339 20.439 3.39 20.107 2.641 19.359C1.893 18.61 1.561 17.661 1.403 16.489C1.25 15.349 1.25 13.894 1.25 12.056V11.944C1.25 10.106 1.25 8.65 1.403 7.511C1.561 6.339 1.893 5.39 2.641 4.641C3.39 3.893 4.339 3.561 5.511 3.403C6.651 3.25 8.106 3.25 9.944 3.25ZM5.71 4.89C4.704 5.025 4.124 5.279 3.7 5.702C3.278 6.125 3.024 6.705 2.889 7.711C2.751 8.739 2.749 10.093 2.749 12C2.749 13.907 2.751 15.262 2.889 16.29C3.024 17.295 3.278 17.875 3.701 18.298C4.124 18.721 4.704 18.975 5.71 19.11C6.738 19.248 8.092 19.25 9.999 19.25H13.999C15.906 19.25 17.261 19.248 18.289 19.11C19.294 18.975 19.874 18.721 20.297 18.298C20.72 17.875 20.974 17.295 21.109 16.289C21.247 15.261 21.249 13.907 21.249 12C21.249 10.093 21.247 8.739 21.109 7.71C20.974 6.705 20.72 6.125 20.297 5.702C19.874 5.279 19.294 5.025 18.288 4.89C17.261 4.752 15.906 4.75 13.999 4.75H9.999C8.092 4.75 6.739 4.752 5.71 4.89ZM5.422 7.52C5.54934 7.36729 5.7321 7.27139 5.93013 7.25338C6.12815 7.23538 6.32521 7.29675 6.478 7.424L8.64 9.223C9.573 10 10.22 10.538 10.768 10.89C11.297 11.23 11.656 11.345 12.001 11.345C12.346 11.345 12.705 11.231 13.234 10.89C13.781 10.538 14.429 10 15.362 9.223L17.521 7.423C17.5967 7.35997 17.6841 7.31246 17.7782 7.2832C17.8722 7.25393 17.9711 7.24348 18.0692 7.25244C18.1673 7.2614 18.2627 7.2896 18.3499 7.33542C18.4371 7.38124 18.5145 7.44379 18.5775 7.5195C18.6405 7.59521 18.688 7.68259 18.7173 7.77665C18.7466 7.87072 18.757 7.96963 18.7481 8.06774C18.7391 8.16584 18.7109 8.26122 18.6651 8.34843C18.6193 8.43564 18.5567 8.51297 18.481 8.576L16.285 10.406C15.398 11.146 14.68 11.744 14.045 12.152C13.385 12.577 12.742 12.845 12.001 12.845C11.26 12.845 10.617 12.576 9.956 12.152C9.322 11.744 8.604 11.145 7.717 10.407L5.52 8.577C5.44424 8.51394 5.38165 8.43656 5.33582 8.34929C5.28998 8.26202 5.2618 8.16657 5.25289 8.0684C5.24397 7.97023 5.25449 7.87127 5.28385 7.77717C5.31322 7.68307 5.36084 7.59568 5.424 7.52" fill="#BDBDBD" />
                                    </svg>
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

export default contactFormSection
