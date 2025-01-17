import NavBar from '@/components/NavBar';
import SectionHeader from '@/components/SectionHeader';
import WorkHistory from '@/components/WorkHistory';
import Project from '@/components/Project';
import { useState, useRef, useEffect } from 'react';


export default function Home() {
  const [currentSection, setCurrentSection] = useState('about');
  const workRef = useRef(null);
  const projectRef = useRef(null);

  const handleScroll = (event) => {
    const container = event.target; // The scrollable container
    if (workRef.current && projectRef.current) {
      const workRect = workRef.current.getBoundingClientRect();
      const projectRect = projectRef.current.getBoundingClientRect();
      const containerTop = container.getBoundingClientRect().top; // Top of the scrollable container

      console.log('workRect.top:', workRect.top, 'projectRect.top:', projectRect.top);

      if (projectRect.top - containerTop <= 0) {
        console.log('Switching to: projects');
        setCurrentSection('projects');
      } else if (workRect.top - containerTop <= 0) {
        console.log('Switching to: work-history');
        setCurrentSection('work-history');
      } else {
        console.log('Switching to: about');
        setCurrentSection('about');
      }
    }
  };
  

  const changeSection = (section) => {


    setCurrentSection(section);

  }

  const work_experiences = [
    {
      name : "Locket Cybersecurity",
      position : "Co-Founder/Co-CTO",
      description : "Founded a startup working to decrease the burden of entry to cybersecurity from both directions by certifying students with the Google Cybersecurity Professional Certificate, and providing cybersecurity audits to local businesses—all completely for free.",
      start : "January 2024",
      end : "Present",
      skills : ["Fullstack Development", "Team Leadership", "Software Engineering", "AWS", "Cybersecurity", "Threat Modeling", "AWS", "Backend Engineering", "Frontend Engineering", "System Security", "Web Development"],
      url : "https://www.locketcyber.com"
      
    },
    {
      name : "Block Museum of Art, Northwestern University",
      position : "Research Aide",
      description : "Worked closely alongside curatorial management staff on priority projects. Managed and lead alt text development and object categorization for >1,000 individual pieces of fine art. Leveraged technological experties to improve museum efficiency and streamline museum operations",
      start : "March 2023",
      end : "June 2024",
      skills : ["Communication", "Educational Leadership", "Accessibility Engineering"]
    },
    {
      name : "Berkshire Food Co-Op",
      position : "Cashier, Wellness Team Member",
      description : "Provided customer service and professional communication for this busy independent co-op grocery. Handled invoice management and product maintenance. Frequently delegated to other departments due to adaptability and reliability.",
      start : "June 2021",
      end : "September 2023",
      skills : ["Customer Service", "Adaptability", "Team Management",],
      url : "https://berkshire.coop/"
    },
    {
      name : "Edgi Learning",
      position : "Discussion Leader, Senior Advisor",
      description : "Worked with startup founder to restructure course offerings and systems. Conducted online seminars educating high school students in technology and the future of work. Assisted in writing elements of Edgi's pitch deck to share with investors.",
      start : "July 2019",
      end : "August 2020",
      skills : ["Technology Education", "Cross-functional Teamwork", "Leadership", "Writing"]
    }
  ]

  const projects = [
    {
      name: "Locket Cybersecurity Website",
      description : "Built the website for my cybersecurity startup. Used React.JS, Next.JS, and TailwindCSS. Site communicates with a backend built on AWS and is hosted using Vercel.",
      date : "December, 2024",
      skills : ["React.JS", "Next.JS", "Node.JS", "TailwindCSS", "Frontend Development", "Fullstack Engineering", "AWS", "JavaScript", "HTML", "CSS", "Figma"],
      image_name : "locketcyber.png",
      url : "https://locketcyber.com"
    },
    {
      name : "GymBuddies",
      description : "Built a social media application based around logging and sharing workouts with friends. User can log excercises, connect with friends, and get notified when a friend is working out.",
      date : "January, 2025",
      skills : ["Typescript", "Full Stack Engineering", "Firebase", "Agile Software Development", "TailwindCSS", "Vite", "Backend Engineering", "Social Media", "App Development", "Cross-functional Teamwork"],
      image_name : "gymbuddies.png",
      url : "https://gymbuddies-20bbf.web.app/"
    }
  ]

  const coursework = [
    {
      title : "Google Cybersecurity Professional Certificate",
      skills : ["SIEM Tools", "Threat Modeling", "Network Security", "Security Hardening", "IDS/IPS Management", "Information Technology", "Information Security", "Data Privacy", "Compliance", "Attack Vectors"],
      url : ""

    },
    {
      title : "Meta Advanced React.JS Certification",
      skills : ["UI/UX Design", "React.JS", "Frontend Software Engineering", "User Interface Programming", "JavaScript", "JSX"],
      url : ""
    }
  ]


  return (
    <div className="flex flex-row flex-nowrap w-screen h-screen overflow-y-auto" >
      {/* NavBar container */}
      <div className="w-[35%] h-full sticky top-0">
        <NavBar selected={currentSection} setSelected={changeSection}/>
      </div>

      {/* Content container */}
      <div className="actual-index-page w-[65%]  overflow-y-auto   py-10 px-24" onScroll={handleScroll}>
        <div className='about-top-locator h-1' id="about" />

        <div className='about-section p-4 bg-shadow_color rounded-sm mt-10 mb-5' >
          <p>
            I'm a full-stack developer from Massachusetts. I love to code so so so so so so so so much. This site is obviously a work in progress!
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            <br/>
            <br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>


        <div className='about-top-locator h-1' id="work" ref={workRef} />
        <div className='work-history-section'  >
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
