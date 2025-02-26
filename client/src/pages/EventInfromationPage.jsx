import {
  FaFire,
  FaFlag,
  FaTrophy,
  FaBullseye,
  FaCode,
  FaClock,
  FaChartLine,
  FaAward,
  FaBook,
  FaSearch,
  FaHourglass,
  FaMedal,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const EventDetailinformationPage = () => {
  return (
    <div className="w-full bg-white text-gray-800 font-sans text-[2vmin]">
      {/* Hero Section */}
      <section className="text-center py-12 bg-[#F5F5F5]">
        <h1 className="font-poppins font-bold text-[#4C1A76] mb-4 text-[3.5vmin]">
          Bug Hunt Arena
        </h1>
        <p className="text-gray-700">
          Compete in real-time, fix bugs, and climb the leaderboard!
        </p>
        <div className="mt-6 flex justify-center space-x-4">
            <Link to="/eventparticipate">
            <button className="bg-[#4C1A76] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3A125E] transition">
            Back to participantion Screen
          </button>
            </Link>
       
         
        </div>
      </section>

      {/* Event Details Grid */}
      <div className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Overview */}
          <section className="bg-[#F5F5F5] p-5 rounded-lg">
            <h2 className="font-poppins font-semibold text-[#4C1A76] mb-3 flex items-center gap-2 text-[2.5vmin]">
              <FaFire /> Event Overview
            </h2>
            <p className="text-gray-700 text-[2.5vmin] font-sans">
              Participants are given a real-world software bug along with a
              detailed bug description, a screenshot or video for reference, and
              access to an in-built compiler. Your task is to analyze the issue,
              debug the code, and implement an effective fix as quickly as
              possible. The event is designed to test your problem-solving
              skills, code optimization, and debugging efficiency in a
              competitive environment. Successful fixes are evaluated based on
              accuracy, speed, and code quality. Compete against other
              developers, climb the leaderboard, and showcase your expertise in
              real-world debugging challenges!
            </p>
          </section>

          {/* Event Flow */}
          <section className="bg-[#F5F5F5] p-5 rounded-lg">
            <h2 className="font-poppins font-semibold text-[#4C1A76] mb-3 flex items-center gap-2 text-[2.5vmin]">
              <FaFlag /> Event Flow
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1.5">
              <li>
                <FaCode /> <strong>Register</strong> for the event.
              </li>
              <li>
                <FaClock /> Receive a <strong>reminder 1 hour before</strong>{" "}
                the event starts.
              </li>
              <li>
                <FaFlag /> Click <strong>Join Event</strong> to access the
                participation screen.
              </li>
              <li>
                <FaCode /> Fix the bug using the{" "}
                <strong>in-built compiler</strong> and submit your solution.
              </li>
              <li>
                <FaChartLine /> <strong>Live leaderboard updates</strong> rank
                participants based on their score.
              </li>
              <li>
                <FaAward /> Receive a{" "}
                <strong>detailed performance report</strong> after the event.
              </li>
            </ul>
          </section>

          {/* Judging Criteria */}
          <section className="bg-[#F5F5F5] p-5 rounded-lg col-span-1 md:col-span-2">
            <h2 className="font-poppins font-semibold text-[#4C1A76] mb-3 flex items-center gap-2 text-[2.5vmin]">
              <FaTrophy /> Judging Criteria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <h3 className="font-poppins font-semibold text-[#4C1A76] flex items-center gap-2 text-[2.2vmin]">
                  <FaBullseye /> Accuracy
                </h3>
                <p className="text-gray-700">40% weightage</p>
                <p className="text-sm text-gray-600">
                  How well the bug is fixed.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <h3 className="font-poppins font-semibold text-[#4C1A76] flex items-center gap-2 text-[2.2vmin]">
                  <FaBook /> Readability
                </h3>
                <p className="text-gray-700">20% weightage</p>
                <p className="text-sm text-gray-600">
                  Is the code clean and well-structured?
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <h3 className="font-poppins font-semibold text-[#4C1A76] flex items-center gap-2 text-[2.2vmin]">
                  <FaSearch /> Complexity & Logic
                </h3>
                <p className="text-gray-700">20% weightage</p>
                <p className="text-sm text-gray-600">
                  How efficiently was the bug fixed?
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <h3 className="font-poppins font-semibold text-[#4C1A76] flex items-center gap-2 text-[2.2vmin]">
                  <FaHourglass /> Speed
                </h3>
                <p className="text-gray-700">20% weightage</p>
                <p className="text-sm text-gray-600">
                  How fast was the solution submitted?
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <h3 className="font-poppins font-semibold text-[#4C1A76] flex items-center gap-2 text-[2.2vmin]">
                  <FaClock /> Retries Penalty
                </h3>
                <p className="text-gray-700">-5% per retry</p>
                <p className="text-sm text-gray-600">
                  Each incorrect attempt reduces the score.
                </p>
              </div>
            </div>
          </section>

          {/* How Winner is Decided */}
          <section className="bg-[#F5F5F5] p-5 rounded-lg col-span-1 md:col-span-2">
            <h2 className="font-poppins font-semibold text-[#4C1A76] mb-3 flex items-center gap-2 text-[2.5vmin]">
              <FaMedal /> How Winner is Decided
            </h2>
            <p className="text-gray-700">
              The winner is determined based on the total score, which is
              calculated using the judging criteria. The highest-scoring
              participant wins the event.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1.5 mt-3">
              <li>
                <strong>Highest Accuracy</strong> in fixing the bug.
              </li>
              <li>
                <strong>Code Readability</strong> and clean structure.
              </li>
              <li>
                <strong>Optimal Complexity & Logic</strong> applied in the fix.
              </li>
              <li>
                <strong>Fastest Submission</strong> time.
              </li>
              <li>
                <strong>Minimal Retries</strong> to reduce penalties.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventDetailinformationPage;
