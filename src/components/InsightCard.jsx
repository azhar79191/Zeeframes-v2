import React from 'react'
import { Link } from 'react-router-dom'

const InsightCard = ({
    img,
    title,
    description,
    readingtime,
    datetime,
}) => {
    return (
        <Link aria-label="Insight link" className="group  block border overflow-hidden hover:border-[#F3FE00] rounded-2xl border-transparent " to="#">
            <div className="flex flex-col items-center max-w-[381] group backdrop-blur border border-white/20 hover:border-[#F3FE00] rounded-2xl bg-white/8">
                <div className="overflow-hidden rounded-[16px_16px_0_0] w-full">
                    {/* Image */}
                    <img
                        src={img}
                        alt={title}
                        height="246"
                        width="382"
                        className="w-full sm:h-full h-[227px] object-cover group-hover:scale-105 duration-300 "
                    />
                </div>
                {/* Content */}
                <div className="p-6 bg-[rgba(255,255,255,0.08)] rounded-b-2xl border border-[rgba(255,255,255,0.20)] flex flex-col gap-3">
                    <h3 className="text-[#FFF] font-['Geologica'] text-[22px]  font-semibold group-hover:text-[#F3FE00]">
                        {title}
                    </h3>
                    <p className="text-[#FFF] text-base leading-6 line-clamp-2">
                        {description}
                    </p>
                    <div className="flex pt-3 gap-2 text-[#FFF] text-sm font-[' Inter'] items-center">
                        {readingtime} <span className="w-1.5 h-1.5 bg-white rounded-full "></span>
                        {datetime}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default InsightCard