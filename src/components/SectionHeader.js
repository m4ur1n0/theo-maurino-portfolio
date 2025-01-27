import React from 'react'

const SectionHeader = ({children}) => {


  return (
    <div id={"work-history"} className='projects-section-header sticky -top-10 bg-highlight2 w-full md:w-[108%] p-5 z-50 rounded-lg mb-2 md:-ml-5 border-t-8 border-background'>
        {/* <h2 className='font-medium text-text_color'>{text}</h2>
        <h2 className='text-black'>Hello</h2> */}
        {children}
    </div>
  )
}

export default SectionHeader
