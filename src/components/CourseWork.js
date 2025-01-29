import React from 'react'

const CourseWork = ({title, skills, url}) => {
    // everything is a string except skills which is a list

    const handleClick = () => {

        if(url) {
            window.open(url, "_blank");
        }
    }

  return (
    <div className={`work-history-item p-5 my-3 flex flex-col w-full rounded-2xl total-shadow-md transition-transform transform duration-200 ease-in-out cursor-pointer bord ${url && 'hover:scale-[1.02] hover:total-shadow-md'}`}
        onClick={handleClick}
    >

        <h2 className='mt-1'>{title}</h2>

        <div className='skills-list w-full flex overflow-x-scroll hide-scrollbar gap-2 mt-3'>
            {skills.map((skill, idx) => (
                <div
                    key={idx}
                    className="work-history-skill rounded-full mt-1 px-4 py-1 bg-text_color"
                >
                    <p className='text-white text-nowrap whitespace-nowrap'>{skill}</p>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default CourseWork
