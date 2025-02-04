// import {resume} from '../files/resume.pdf'
export default function NavBar({selected, setSelected}) {

  const options = [
    {
      title : "About",
      id : "about"
    },
    {
      title : "Projects",
      id : "projects"
    },
    {
      title : "Work History",
      id : "work"
    },
    {
      title : "Courses",
      id : "coursework"
    }
    

  ]

  const navigateToSection = (section) => {

    console.log(`scrolling to ${section}`)
    const element = document.getElementById(section);
    element.scrollIntoView({behavior : "smooth"});

    // const index_page = document.getElementById('index-page-window');
    // index_page.scrollBy(0, 4);
    


    // setSelected(section);



  }

  

  return (
    <div className="h-screen text-black shadow-lg flex flex-col pr-10">

      <div className="absolute h-full w-[20px] bg-highlight2 left-[10%]" />
      <div className="absolute h-full w-[6px] bg-text_color_clear left-[5%]" />
      <div className="absolute w-full h-[10px] bg-text_color_clear bottom-[4%]" />

      <div className="navbar-content mt-16 ml-32  " >
        <div className="title-container mb-10 ">
          <h1>Theo Maurino</h1>
          <h3 className="w-full ">Fullstack developer, ethical hacker, generational talent, pathologically humble.</h3>
        </div>
        <div className="section-links-headers flex flex-col gap-8">

          {
            options.map((link, idx) => (
              <h2
                key={idx}
                className={`cursor-pointer         ${selected===link.id ? 'font-bold' : ''}`}
  
                onClick={() => navigateToSection(link.id)}
              >
                {link.title}
              </h2>
            ))
          }

        </div>

        <div className="links-section flex flex-col items-center w-4/5 mt-[80px]">
          <div className="socials-links flex justify-between w-2/3 ">
            <a className="" href='https://www.linkedin.com/in/theo-maurino-829929239/' target='_blank'>
              <img className="max-w-[40px] color-text_color" src='/vectors/linkedin.svg' />
            </a>

            <a className="" href='https://www.github.com/m4ur1n0/' target='_blank'>
              <img className="max-w-[40px]" src='/vectors/github.svg' />
            </a>

            {/* <a className="" href={resume} download={'theo_maurino_resume'} target='_blank'>
              <img className="max-w-[40px]" src='/download/gmail.svg' />
            </a> */}


            <a href={"/files/resume.pdf"} download="theo_maurino">
              <img className="max-w-[40px]  " src='/vectors/download.svg' />
            </a>
          </div>
          <p className="email-address mt-2">thjmaurino (@) gmail (dot) com</p>
        </div>
        
      </div>
    </div>
  );
}
