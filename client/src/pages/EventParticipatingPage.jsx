import Split from "react-split";
import { MdLeaderboard } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const EventParticipatingPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Event Participant Page Navbar */}
      <nav className="h-[10vmin] w-full bg-white shadow-sm flex justify-between px-6 items-center">
        <h1 className="text-[3vmin] font-bold text-[#4C1A76]">BugHunt Arena</h1>
        <div className="flex gap-4">
          <button className="bg-[#4C1A76] text-white py-2 px-5 border rounded-full hover:bg-[#F76C21] flex items-center gap-2">
            <FaRegClock /> Leader Board
          </button>
          <button className="bg-[#4C1A76] text-white py-2 px-5 border rounded-full hover:bg-[#F76C21] flex items-center gap-2">
            Leader Board <MdLeaderboard />
          </button>
        </div>
      </nav>

      {/* Event Participants Section with Split Panel */}
      <Split
        className="flex mt-4 h-[calc(100vh-10vmin)]"
        sizes={[40, 60]}
        minSize={200}
        gutterSize={8}
      >
        {/* Problem Description Section */}
        <div className="w-full bg-white p-6 overflow-auto">
          <h1 className="text-[3vmin] font-bold text-[#4C1A76]">Problem:</h1>
          <p className="text-[2.5vmin] mt-2">
            Unauthorized users can access admin pages by modifying the URL after logging in, bypassing role-based authentication. 🚨
          </p>

          <h1 className="text-[3vmin] font-bold text-[#4C1A76] mt-6">Description:</h1>
          <p className="text-[2.5vmin] mt-2">
            A critical security vulnerability has been identified in the login mechanism of the web application. By manipulating the
            URL after login, unauthorized users can gain access to restricted admin pages without proper authentication.
          </p>

          <h1 className="text-[3vmin] font-bold text-[#4C1A76] mt-6">Image:</h1>
          <div className="bg-slate-300 h-[30vmin] w-[70vmin] flex items-center justify-center mt-2">
            <img src="https://via.placeholder.com/150" alt="Bug example screenshot" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-[3vmin] font-bold text-[#4C1A76] mt-6 mb-[3vmin]">Video:</h1>
          <div className="bg-slate-300 h-[30vmin] w-[70vmin] flex items-center justify-center mt-2">
            <video width="100%" height="100%" controls>
              <source src="https://via.placeholder.com/150" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Compiler Section */}
        <Split direction="vertical" className="h-full w-full" sizes={[90, 10]} minSize={50} gutterSize={8}>
          {/* Code Editor */}
          <div className="h-full w-full bg-black"></div>

          {/* Console Output */}
          <div className="h-[20vmin] w-full bg-[#161B22] p-4">
            <h2 className="text-white text-[2.5vmin] font-bold uppercase">Console Output:</h2>
          </div>
        </Split>
      </Split>
    </div>
  );
};

export default EventParticipatingPage;