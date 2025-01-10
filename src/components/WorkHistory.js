import React from 'react'

const WorkHistory = ({name, description, start, end, skills, url=''}) => {
    // everything is a string except skills which is a list
  return (
    <div className='work-history-item p-5 my-3 flex flex-col w-full rounded-2xl total-shadow-md transition-transform transform duration-200 ease-in-out hover:scale-[1.02] hover:total-shadow-md cursor-pointer'>
        <p>{start} — {end}</p>
        <h2 className='my-1'>{name}</h2>
        <p>{description}</p>
        <div className='skills-list w-full flex overflow-x-scroll hide-scrollbar gap-2 mt-2'>
            {skills.map((skill, idx) => (
                <div
                    key={idx}
                    className="work-history-skill rounded-full mt-1 px-4 py-1 bg-text_color "
                >
                    <p className='text-white text-nowrap'>{skill}</p>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default WorkHistory
