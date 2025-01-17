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
    setSelected(section);



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


      </div>
    </div>
  );
}
