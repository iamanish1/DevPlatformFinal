import Split from "react-split";
import { MdLeaderboard } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";



const EventParticipatingPage = () => {
  return (
    <>
           <div className="min-h-screen w-full">
        {/* EVENT Participant Page NAV BAR */}
        <div>
          <div className="h-[10vmin] w-full bg-white shadow-sm flex justify-between">
            {/* EVent Title  */}
            <div className="flex justify-center items-center">
                <h1 className="text-[3vmin] font-bold text-[#4C1A76] ml-[5vmin]">
                 BugHunt Arena 
                </h1>
  
            </div>
            
            <div className="flex justify-center items-center gap-[5vmin]">
            <div >
                    <button className="bg-[#4C1A76] text-white py-2 px-5 border rounded-full hover:bg-[#F76C21] flex items-center gap-2">
                    <FaRegClock />
                       Leader Board 
                    </button>
                </div>
                <div >
                    <button className="bg-[#4C1A76] text-white py-2 px-5 border rounded-full hover:bg-[#F76C21] flex items-center gap-2 mr-[3vmin]">
                       Leader Board
                       <MdLeaderboard />
                    </button>
                </div>
            </div>
          </div>
        </div>

        {/* EVENT Participants section with Split Panel */}
        <Split
          className="flex justify-between mt-[2vmin] h-[calc(100vh-8vmin)]"
          sizes={[40, 60]}  // Initial widths (40% Participants, 60% Compiler)
          minSize={200}      // Minimum size for each section
          gutterSize={8}     // Thickness of the draggable divider
        >
          {/* Participants Section */}
          <div className=" w-full bg-white"></div>

          {/* Compiler Section */}
          <Split
            direction="vertical"
            className="h-full w-full flex flex-col"
            sizes={[90, 10]}  // Initial heights (90% Code Editor, 10% Console)
            minSize={50}
            gutterSize={8}
          >
            {/* Code Editor */}
            <div className="h-[90vmin] w-full bg-black">
                
            </div>

            {/* Console Output */}
            <div className="h-[20vmin] w-full bg-[#161B22]">
                <div className="text-white text-[3vmin] font-bold ml-[2vmin] mt-[2vmin] uppercase">Console Output : </div>
            </div>
          </Split>
        </Split>
      </div>

    </>
  );
};

export default EventParticipatingPage;
