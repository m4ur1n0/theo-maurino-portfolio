import React from 'react'

const WorkHistory = ({name, description, start, end, skills}) => {
    // everything is a string except skills which is a list
  return (
    <div className='work-history-item p-5 my-5 flex flex-col w-full rounded-sm transition-transform transform duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg cursor-pointer'>
        <p>{start} — {end}</p>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className='skills-list w-full flex flex-wrap gap-2 mt-2'>
            {skills.map((skill, idx) => (
                <div
                    key={idx}
                    className="work-history-skill rounded-full px-4 py-1 bg-text_color "
                >
                    <p className='text-white'>{skill}</p>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default WorkHistory
