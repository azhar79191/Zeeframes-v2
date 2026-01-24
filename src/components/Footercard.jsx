import React from 'react'

const Footercard = ({ svg: Svg, title, link, link2 }) => {
  return (
    <div className='flex flex-col gap-3 p-5'>
          <span>{Svg && <Svg />}</span>
      <h3 className='text-white text-xl font-medium'>{title}</h3>
          <a href={link} className='text-sm text-[#8F8F8F] font-normal leading-5.5'>{link}</a>
      <a href={link2} className='text-base text-white font-medium leading-5.5'>{link2}</a>
    </div>
  )
}

export default Footercard
