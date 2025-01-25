import NavBar from '@/components/NavBar';
import SectionHeader from '@/components/SectionHeader';
import WorkHistory from '@/components/WorkHistory';
import Project from '@/components/Project';
import { useState, useRef, useEffect } from 'react';
import CourseWork from '@/components/CourseWork';


export default function Home() {
  const [currentSection, setCurrentSection] = useState('about');
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const courseRef = useRef(null);

  const handleScroll = () => {
    if (workRef.current && projectRef.current) {
      const workRect = workRef.current.getBoundingClientRect();
      const projectRect = projectRef.current.getBoundingClientRect();
      const courseRect = courseRef.current.getBoundingClientRect();


      // console.log('workRect.top:', workRect.top, 'projectRect.top:', projectRect.top);

      if (courseRect.top <= 0) {
        setCurrentSection('coursework');
      } else if (workRect.top <= 0 ) {
        console.log('Switching to: work');
        setCurrentSection('work');

      } else if (projectRect.top <= 0) {
        // console.log('Switching to: projects');
        setCurrentSection('projects');

      } else {
        // console.log('Switching to: about');
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
    },
    {
      name : "Algorithm Visualizer",
      description : "Built an algorithm visualizer to demonstrate my knowledge of data structures and algorithms, as well as to make a fun playground for seeing how different algorithms actually work. I regularly update with new algorithms.",
      date : "January, 2025",
      skills : ["Algorithms", "Data Structures", "Pathfinding Algorithms", "Sorting Algorithms", "JavaScript", "React.JS", "Frontend Engineering", "Optimization"],
      image_name : "algorithm-visualizer.png",
      url : "https://algorithm-visualizers-three.vercel.app/"
    },
  ]

  const coursework = [
    {
      title : "Google Cybersecurity Professional Certificate",
      skills : ["SIEM Tools", "Threat Modeling", "Network Security", "Security Hardening", "IDS/IPS Management", "Information Technology", "Information Security", "Data Privacy", "Compliance", "Attack Vectors"],
      url : "https://coursera.org/verify/professional-cert/L3EP6FBNMJG9"

    },
    {
      title : "Meta Advanced React.JS Certification",
      skills : ["UI/UX Design", "React.JS", "Frontend Software Engineering", "User Interface Programming", "JavaScript", "JSX"],
      url : "https://www.coursera.org/account/accomplishments/records/Z6O1DEPANKOS"
    },
    {
      title : "Agile Software Development",
      skills : ["Agile Methodology", "Sprint Planning", "Git", "Unit Testing", "Collaboration tools", "Backend Design", "Team Collaboration", "Continuous Deployment"],
      url : ""
    },
    {
      title : "Operating Systems",
      skills : ["System Engineering", "Concurrency", "Low-level Programming", "Optimization", "Scheduling Algorithms", "Memory Paging", "Thread Synchronization", "File Systems", "System Calls", "Operating System Architecture", "Multithreading"],
      url : ""
    },
    {
      title : "Scalable Software Architecture",
      skills : ["Scalability", "AWS", "Backend Engineering", "Software Architecture", "API Gateways", "Serverless Computing", "Distributed Systems", "RESTful APIs", "Cloud Computing"],
      url : ""
    },
    {
      title : "Database System Design",
      skills : ["SQL", "Schema Design", "Data Modeling", "Data Storage Optimization", "Query Optimization", "Database Normalization", "Backend Engineering", "Transaction Management"],
      url : ""
    },
    {
      title : "Introduction to Networking",
      skills : ["Network Protocols","HTTP/HTTPS", "DNS", "Network Security", "Firewalls", "Network Architecture", "Client-server Communication", "Packet Routing"],
      url : ""
    },
    {
      title : "Design and Analysis of Algorithms",
      skills : ["Algorithm Design", "Time/Space Complexity", "Optimization", "Dynamic Programming", "Divide and Conquer", "Greedy Algorithms", "Graph Algorithms", "Sorting Algorithms"],
      url : ""
    },
    {
      title : "Computer System Security",
      skills : ["Cryptography", "Vulnerability Assessment", "Pentesting", "Secure Coding", "Authentication Protocols", "Cybersecurity Principles", "Malware Analysis", "Network Defense", "Security Architecture"],
      url : ""
    },
    
 
    {
      title : "Mathematic Foundations of Computer Science",
      skills : ["Set Theory", "Discrete Mathematics", "Proofs", "Logic", "Rational Problem Solving", "Mathematical Reasoning", "Recursion", "Propositional Logic"],
      url : ""
    },
    {
      title : "Data Structures and Algorithms",
      skills : ["Trees", "Linked Lists", "Hash Tables", "Sorting Algorithms", "Algorithms", "Stacks & Queues", "Data Manipulation"],
      url : ""
    },



    {
      title : "Introduction to Artificial Intelligence",
      skills : ["Search Algorithms", "A*/Dijkstra/DFS/BFS", "Macine Learning", "Neural Networks", "Natural Language Processing", "AI Principles", "Supervised & Unsupervised Learning"],
      url : ""
    },


    {
      title : "Introduction to Computer Systems",
      skills : ["Assembly Language Programming", "Binary", "Cache Optimization", "Computer Architecture", "Memory Hierarchy"],
      url : ""
    },

    {
      title : "Fundamentals of Computer Programming (1, 1.5, 2)",
      skills : ["Object Oriented Programming", "Python", "Software Design", "Syntax and Semantics", "Algorithmic Thinking"],
      url : ""
    },
    {
      title : "Linear Algebra",
      skills : ["Matrix Operations", "Vector Spaces", "Linear Transformations", "Eigenvalues/Eigenvectors", "Orthogonality", "Applications in Computer Graphics", "Linear Equations"],
      url : ""
    },
    {
      title : "Multivariable Differential Calculus",
      skills : ["Optimization Techniques", "Partial Derivatives", "Vector Calculus", "Applications in Machine Learning", "Multivariable Functions", "Surface Integrals", "Differential Equations"],
      url : ""
    },
    
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
        <div className='about-section px-4 py-5 bg-shadow_color rounded-sm mt-10 mb-5 flex justify-between gap-5 max-h-[400px] items-center object-contain overflow-hidden' >
          <img src='/images/theo-headshot.jpg' className='h-full w-1/3' />
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


        {/* PROJECTS SECTION */}
        <div className='projects-section-delineator w-full h-1' id="projects" ref={projectRef}/>
        <div className='projects-section'>
          <SectionHeader>
            <h2 className='font-bold text-white'>PROJECTS</h2>
          </SectionHeader>

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


        {/* WORK HISTORY SECTION */}
        <div className='projects-section-delineator w-full h-1' id="work" ref={workRef}/>
        <div className='work-history-section ' >
          <SectionHeader>
            <h2 className='font-bold text-white'>WORK HISTORY</h2>
          </SectionHeader>
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

        {/* RELEVANT COURSEWORK SECTION */}
        <div className='relevant-coursework-section-delineator w-full h-1' id='coursework' ref={courseRef} />
        <div className='relevant-coursework-section' >
            <SectionHeader>
              <h2 className='font-bold text-white'>RELEVANT COURSEWORK</h2>
            </SectionHeader>

            <div className='flex flex-col gap-2 w-full'>
              {
                coursework.map((entry, idx) => (
                  <div key={idx}>
                    <CourseWork {...entry} />
                  </div>
                ))
              }
            </div>

        </div>

      </div>
    </div>
  );
}
