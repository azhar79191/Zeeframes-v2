import React from 'react'

const InsightCard = ({
    img,
    title,
    description,
    readingtime,
    datetime,
    titleclassName,
    descriptionclassName,
}) => {
    return (
        <div className='flex flex-col items-center border border-[#373737] rounded-2xl bg-[#0B0B0B]'>
            <img src={img} alt="insight image" className='w-98 h-57' />
            <div className='flex flex-col items-start gap-2 p-6'>
                <h2 className={`text-2xl font-medium text-white leading-[normal] line-clamp-3 ${titleclassName}`}>{title}</h2>
                <p className={`text-base leading-6 text-[#D5D5D5] line-clamp-2 ${descriptionclassName}`}>{description}</p>
                <div className='flex items-center gap-2 pt-3'>
                    <span className='text-xs leading-5 text-[#E7E7E7]'>{readingtime}</span>
                    <span className='w-1.5 h-1.5 bg-white rounded-full'>
                    </span>
                    <span className='text-xs leading-5 text-[#E7E7E7]'>{datetime}</span>
                </div>
            </div>
        </div>
    )
}

export default InsightCard