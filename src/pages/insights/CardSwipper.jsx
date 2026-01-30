import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "@/assets/images";
import practice from "@/assets/images/paractice.webp"
import prototyping from "@/assets/images/prototyping.webp"
import screen from "@/assets/images/screen.webp"
import improve from "@/assets/images/improve.webp"
import choose from "@/assets/images/choose.webp"
import articles from "@/assets/images/articles.webp"
import InsightCard from "@/components/InsightCard";
const cardsData = [
    {
        id: 1,
        title: "Improving Website Conversion Rates: A UX- Centric Approach",
        description: "Discover how to significantly boost your website's conversion rates by prioritiz...",
        img: practice,
        readtime: "7 min read",
        date: "Jan 23, 2025"
    },
    {
        id: 2,
        title: " How to Conduct Usability Testing That Gets Results?",
        description: " Uncover usability issues early & get real user feedback to design products that...",
        img: articles,
        readtime: "7 min read",
        date: "Jan 22, 2025"
    },
    {
        id: 3,
        title: "The Challenges and Solutions in Multi-Screen UI/UX Design 2024",
        description: "Multi-Screen UI/UX Design in 2024! Conquer the challenges of designing for deskt...",
        img: screen,
        readtime: "6 min read",
        date: "Jan 21, 2025"
    },
    {
        id: 1,
        title: "Improving Website Conversion Rates: A UX- Centric Approach",
        description: "Discover how to significantly boost your website's conversion rates by prioritiz...",
        img: choose,
        readtime: "7 min read",
        date: "Jan 23, 2025"
    },
    {
        id: 2,
        title: " How to Conduct Usability Testing That Gets Results?",
        description: " Uncover usability issues early & get real user feedback to design products that...",
        img: prototyping,
        readtime: "7 min read",
        date: "Jan 22, 2025"
    },
    {
        id: 3,
        title: "The Challenges and Solutions in Multi-Screen UI/UX Design 2024",
        description: "Multi-Screen UI/UX Design in 2024! Conquer the challenges of designing for deskt...",
        img: improve,
        readtime: "6 min read",
        date: "Jan 21, 2025"
    },
];


const CardSwipper = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="sm:py-20 py-8 bg-[#090909]">
            <div className="container">
                <p className="font-['Geologica'] text-[#F3FE00] text-sm uppercase">Latest insights</p>
                {/* Custom Buttons (OUTSIDE cards) */}
                <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between gap-4 sm:gap-auto sm:mb-12 mb-8 sm:mt-3 mt-4">
                    <h2 className="font-['Geologica'] text-white sm:text-[40px] text-[28px] font-bold sm:leading-11 leading-10">Our Recent Articles</h2>
                    <div className="flex gap-3">
                        {/* PREV */}
                        <button
                            ref={prevRef}
                            disabled={isBeginning}
                            className={`h-12 px-5 rounded-full border transition
      ${isBeginning
                                    ? "cursor-not-allowed bg-[#555555] border-none text-gray-600"
                                    : "bg-[#F3FE00] border-[#F3FE00] text-black hover:opacity-90"
                                }`}
                        >
                            <ArrowLeft />
                        </button>

                        {/* NEXT */}
                        <button
                            ref={nextRef}
                            disabled={isEnd}
                            className={`h-12 px-5 rounded-full border transition
      ${isEnd
                                    ? "cursor-not-allowed bg-[#555555] border-none text-gray-600"
                                    : "bg-[#F3FE00] border-[#F3FE00] text-black hover:opacity-90"
                                }`}
                        >
                            <ArrowRight />
                        </button>
                    </div>

                </div>


                {/* Swiper */}
                <Swiper
                    className="overflow-hidden"
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={false}
                    watchOverflow={true}
                    modules={[Navigation]}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();

                        // 👇 IMPORTANT: initial state
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                        // 👇 update state on every slide change
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3.2 },
                    }}
                >

                    {cardsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <InsightCard
                                key={index}
                                img={item.img}
                                title={item.title}
                                description={item.description}
                                readingtime={item.readtime}
                                datetime={item.date}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default CardSwipper;
