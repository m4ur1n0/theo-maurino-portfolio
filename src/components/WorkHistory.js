import React from 'react'

const WorkHistory = ({name, description, position, start, end, skills, url=''}) => {
    // everything is a string except skills which is a list

    const handleClick = () => {

        if(url) {
            window.open(url, "_blank");
        }
    }

  return (
    <div className='work-history-item p-5 my-3 flex flex-col w-full rounded-2xl total-shadow-md transition-transform transform duration-200 ease-in-out hover:scale-[1.02] hover:total-shadow-md cursor-pointer'
        onClick={handleClick}
    >
        <p className='text-secondary_text'>{start} — {end}</p>
        <h2 className='mt-1'>{name}</h2>
        <p className='text-secondary_text mb-2'>{position}</p>
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
