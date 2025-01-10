import React from 'react'

const SectionHeader = ({text }) => {
  return (
    <div id={"work-history"} className='projects-section-header sticky top-0 bg-highlight w-full p-4 z-50 rounded-md mt-5 mb-2'>
        <h2 className='font-medium'>{text}</h2>
    </div>
  )
}

export default SectionHeader
