import React from 'react'

const SectionHeader = ({text }) => {
  return (
    <div id={"work-history"} className='projects-section-header sticky top-3 bg-highlight w-[108%] p-4 z-50 rounded-sm mt-5 mb-2 -ml-5'>
        <h2 className='font-medium'>{text}</h2>
    </div>
  )
}

export default SectionHeader
