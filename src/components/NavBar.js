export default function NavBar({selected, setSelected}) {

  const options = [
    {
      title : "About",
      id : "about"
    },
    {
      title : "Work History",
      id : "work-history"
    },
    {
      title : "Projects",
      id : "projects"
    },

  ]

  const navigateToSection = (section) => {

    const element = document.getElementById(section);
    element.scrollIntoView({behavior : "smooth"});
    // setSelected(section);



  }

  

  return (
    <div className="h-screen text-black shadow-lg flex flex-col pr-10">
      <div className="navbar-content mt-16 ml-32  " >
        <div className="title-container mb-16 ">
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

        <div className="socials-links flex justify-between items-center mt-36 w-2/3">
          <a className="" href='https://www.linkedin.com/in/theo-maurino-829929239/' target='_blank'>
            <img className="w-1/3 color-text_color" src='/vectors/linkedin.svg' />
          </a>

          <a className="" href='https://www.github.com/m4ur1n0/' target='_blank'>
            <img className="w-1/3" src='/vectors/github.svg' />
          </a>

          <a className="" href='https://mailto:thjmaurino@gmail.com' target='_blank'>
            <img className="scale-[3.2]" src='/vectors/gmail.svg' />
          </a>
        </div>
        
      </div>
    </div>
  );
}
