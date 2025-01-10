import NavBar from '@/components/NavBar';
import SectionHeader from '@/components/SectionHeader';
import WorkHistory from '@/components/WorkHistory';
import Project from '@/components/Project';
import { useState, useRef, useEffect } from 'react';


export default function Home() {
  const [currentSection, setCurrentSection] = useState('about');
  const workRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if(workRef.current && projectRef.current) {
        const workRect = workRef.current.getBoundingClientRect();
        const projectRect = projectRef.current.getBoundingClientRect();
        if(workRect.top <= 0 && !(projectRect.top <= 0)) {
          setCurrentSection("work-history");
          console.log("switch to work");
        } else if (workRect.top <= 0 && projectRect.top <= 0) {
          setCurrentSection("projects");
          console.log("switch to proj");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  

  const changeSection = (section) => {


    setCurrentSection(section);

  }

  const work_experiences = [
    {
      name : "Berkshire Food Co-Op",
      description : "Provided customer service and professional communication for this busy independent co-op grocery. Handled invoice management and product maintenance. Frequently delegated to other departments due to adaptability and reliability.",
      start : "June 2021",
      end : "September 2023",
      skills : ["Customer Service", "Adaptability", "Team Management",],
      url : "https://berkshire.coop/"
    }
  ]

  const projects = [
    {
      name: "Locket Cybersecurity Website",
      description : "Built the website for my cybersecurity startup. Used React.JS, Next.JS, and TailwindCSS. Site communicates with a backend built on AWS and is hosted using Vercel.",
      date : "December, 2024",
      skills : ["React.JS", "Next.JS", "TailwindCSS", "Frontend Development", "Fullstack Engineering", "AWS", "JavaScript", "HTML", "CSS", "Figma"],
      image_name : "locketcyber.png",
      url : "https://locketcyber.com"
    }
  ]


  return (
    <div className="flex flex-row flex-nowrap w-screen h-screen overflow-y-auto" >
      {/* NavBar container */}
      <div className="w-[35%] h-full sticky top-0">
        <NavBar selected={currentSection} setSelected={setCurrentSection}/>
      </div>

      {/* Content container */}
      <div className='about-top-locator h-0' id="about" />
      <div className="actual-index-page w-[65%]  min-h-[200vh]   py-10 px-24">

        <div className='about-section p-4 bg-shadow_color rounded-sm mt-10' >
          <p>
            I'm a full-stack developer from Massachusetts. I love to code so so so so so so so so much. gimme some lorem!
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            <br/>
            <br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='work-history-section' id="work" ref={workRef}>
          <SectionHeader curr={currentSection} text={"WORK HISTORY"} />
          <div className='flex flex-col gap-2 w-full ' >
            {
              work_experiences.map((entry, idx) => (
                <div key={idx}>
                  <WorkHistory {...entry}/>
                </div>
              ))
            }

          </div>
        </div>

        <div className='projects-section' id="projects" ref={projectRef}>
          <SectionHeader curr={currentSection} text={"PROJECTS"} />

          <div className='flex flex-col gap-2 w-full'>
            {
              projects.map((entry, idx) => (
                <div key={idx} className=''>
                  <Project {...entry} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
