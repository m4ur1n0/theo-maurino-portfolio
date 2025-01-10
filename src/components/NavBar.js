export default function NavBar() {
  return (
    <div className="h-screen text-black shadow-lg flex flex-col ">
      <div className="navbar-content mt-16 ml-32  " >
        <div className="title-container mb-24 ">
          <h1>Theo Maurino</h1>
          <h3 className="w-full ">Fullstack developer, ethical hacker, generational talent, pathologically humble</h3>
        </div>
        <div className="section-links-headers flex flex-col gap-4">

          <h2>
            About
          </h2>

          <h2>
            Work History
          </h2>

          <h2>
            Projects
          </h2>
          
        </div>


      </div>
    </div>
  );
}
