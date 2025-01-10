import React from 'react'

const WorkHistory = ({name, description, date, skills, image_name, url=''}) => {
    // everything is a string except skills which is a list
  return (
    <div className='flex flex-row justify-between p-5 my-5 rounded-2xl total-shadow-md transition-transform transform duration-200 ease-in-out hover:scale-[1.02] hover:total-shadow-md cursor-pointer'>
        <img 
            className='w-[30%] object-contain' 
            src={`/images/${image_name}`} 
        />
        <div className='work-history-item  flex flex-col w-[68%] '>
            <p>{date}</p>
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
    </div>
  )
}

export default WorkHistory
