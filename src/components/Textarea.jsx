import React from 'react'

const Textarea = ({ placeholder,Name,Id }) => {
  return (
      <textarea name={Name} id={Id} className='p-4 h-21 text-[#D5D5D5] text-sm font-medium leading-5 resize-none border border-[#373737] rounded-lg'>{placeholder}</textarea>
  )
}

export default Textarea
