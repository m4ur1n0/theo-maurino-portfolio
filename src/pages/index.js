import NavBar from '@/components/NavBar';
import SectionHeader from '@/components/SectionHeader';
import WorkHistory from '@/components/WorkHistory';

export default function Home() {
  const work_experiences = [
    {
      name : "Berkshire Food Co-Op",
      description : "Provided customer service and professional communication for this busy independent co-op grocery. Handled invoice management and product maintenance. Frequently delegated to other departments due to adaptability and reliability.",
      start : "June 2021",
      end : "September 2023",
      skills : ["Customer Service", "Adaptability", "Team Management"]
    }
  ]


  return (
    <div className="flex flex-row flex-nowrap w-screen h-screen overflow-y-auto">
      {/* NavBar container */}
      <div className="w-[35%] h-full sticky top-0">
        <NavBar />
      </div>

      {/* Content container */}
      <div className="actual-index-page w-[65%]  min-h-[200vh] mt-10  py-10 px-24">

        <div className='about-section'>
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

        <div className='work-history-section'>
          <SectionHeader text={"WORK HISTORY"} />
          <div className='flex flex-col gap-2 w-full'>
            {
              work_experiences.map((entry, idx) => (
                <div key={idx}>
                  <WorkHistory name={entry.name} description={entry.description} start={entry.start} end={entry.end} skills={entry.skills} />
                </div>
              ))
            }

          </div>
        </div>

        <div className='projects-section'>
          <SectionHeader text={"PROJECTS"} />

          PROJECTS HERE
        </div>
      </div>
    </div>
  );
}
