import NavBar2 from "../components/NavBar2";

const BugHuntArena = () => {
  return (
    <>
      {/* Nav Bar 2  */}
      <NavBar2 />
      {/* Banner - For - The Event Registeration page   */}
      <div className="h-[60vmin] w-full bg-white mt-[5vmin]">hii</div>
      {/* Detail - section for Event description and Registration */}
      <div className="h-screen w-full bg-[#F5F5F5] mt-[3vmin] flex justify-between gap-[3vmin]">
        <div className="min-h-screen w-full bg-white ml-[6vmin]">
            this is detail section 
        </div>
        <div>
          <div>
          <div className="h-[70vmin] w-[80vmin] bg-white mr-[5vmin]">
             Event register section 
           </div>
            <div className="h-[30vmin] w-[80vmin] bg-white mt-[2vmin]">
                hii
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BugHuntArena;
