import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";
import { FaCalendar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const BugHuntArena = () => {
  return (
    <>
      {/* Nav Bar */}
      <NavBar2 />

      {/* Banner - Event Registration Page */}
      <div className="h-[60vmin] w-full bg-white mt-[5vmin]">hii</div>

      {/* Main Content Section (Fixed Page Height) */}
      <div className="h-screen w-full bg-[#F5F5F5] flex justify-between gap-[3vmin] px-[6vmin] overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-[3vmin]">
          <div className="bg-white h-[90vmin] mt-[4vmin] rounded-[3vmin]">
            {/* FOr Event title and For the Banner Image ; */}
            <div className="flex gap-[5vmin]">
              <div className="bg-orange-200 h-[25vmin] w-[25vmin] ml-[4vmin] mt-[4vmin] mb-[4vmin] rounded-[2vmin]">
                cover Image of the event
              </div>
              <div className="flex flex-col mt-[3.5vmin]">
                <div className="text-[6vmin] uppercase font-poppins font-bold">
                  Code King Bug Hunt Arena
                </div>
                <div className="text-[2.5vmin] font-sans">
                  <p>Hosted-by-Devhubs Platfrom </p>
                </div>
                <div className="flex mt-[3vmin] gap-[3vmin]">
                  <div
                    className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                    border border-[#4C1A76] font-sans text-[2.3vmin] uppercase font-semibold"
                  >
                    MERN Stack
                  </div>
                  <div
                    className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                    border border-[#4C1A76] font-sans text-[2.3vmin] uppercase font-semibold"
                  >
                    Bug Hunting
                  </div>
                  <div
                    className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                    border border-[#4C1A76] font-sans text-[2.3vmin] uppercase font-semibold"
                  >
                    Coding Skill
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Submenu (Does not move while scrolling) */}
          <div
            className="bg-white h-[25vmin] sticky top-0 z-10 flex 
          gap-[4vmin] justify-evenly items-center rounded-[3vmin]"
          >
            <div
              className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                    font-sans text-[2.3vmin] uppercase font-semibold"
            >
              Details
            </div>
            <div
              className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                   font-sans text-[2.3vmin] uppercase font-semibold"
            >
              Proccess
            </div>
            <div
              className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                   font-sans text-[2.3vmin] uppercase font-semibold"
            >
              Rules
            </div>
            <div
              className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                   font-sans text-[2.3vmin] uppercase font-semibold"
            >
              Prize
            </div>
            <div
              className="h-[7vmin] w-[20vmin] flex justify-center items-center
              font-sans text-[2.3vmin] uppercase font-semibold"
            >
              Criteria
            </div>
            <div
              className="h-[7vmin] w-[20vmin] flex justify-center items-center
              font-sans text-[2.3vmin] uppercase font-semibold"
            >
              Reviews
            </div>
          </div>

          {/* Scrollable Detail Section (Auto-scrolls when user scrolls the page) */}
          <div
            className="bg-white h-[130vmin] overflow-y-auto p-[2vmin] no-scrollbar rounded-[2vmin]"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* This part is scrollable */}
            <div>
              <div>
                <h1>
                  What is{" "}
                  <span className="font-bold uppercase">
                    {" "}
                    Code King Bug Hunt Arena{" "}
                  </span>
                  ?
                </h1>
              </div>
              <div className=" font-poppins text-[2.5vmin] mt-[2vmin]">
                <p>
                  Bug Hunt Arena is an event-driven bug bounty competition,
                  where developers submit projects for testing, and testers
                  compete to find and report bugs in a time-bound event.
                </p>
                <br /> Key Highlights of the Event :
                <br />
                <div className="flex flex-col gap-[0.5vmin] mt-[2vmin]">
                  <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                    Time-Limited Bug Testing Events <br />
                  </div>
                  <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                    Specific start and end times
                    <br />
                  </div>
                  <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                    Gamified Testing & Rewards Points badges
                    <br />
                  </div>
                  <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                    AI-Driven Bug Validation
                    <br />
                  </div>
                  <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                    Faster review & ranking <br />
                  </div>
                  <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                    Live Leaderboard Real-time rankings
                    <br />
                  </div>
                  <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                    testers In-Built Compiler <br />
                  </div>
                  <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                    Testing Tools For live debugging
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-[2.5vmin] font-bold font-poppins uppercase mt-[2vmin] mb-[2vmin]">
                  how it works ?
                </h1>
              </div>
              <div className="font-sans text-[2.5vin]">
                Developers Submit Projects for Testing Each event features
                multiple projects submitted by developers. Developers define the
                scope, rules, and reward structure (cash prizes, points, or
                reputation boosts). Testers Start Hunting Bugs Once the event
                starts, testers analyze code, run test cases, and report bugs. A
                bug submission tool allows testers to submit: Screenshots &
                videos of bugs Technical explanations & reproduction steps
                Suggested fixes and developer also fixed the bug within the
                limited time periord
              </div>
              <div className="mt-[2vmin] font-semibold">
                Note : Project Owner Provides you the All reports related to the
                bug . You have to participate in the event by submitting your
                bug reports and code solution.
              </div>
              <div className="mt-[2vmin]">
                <p className="font-bold">Rules :</p>  
                <div className="flex flex-col gap-[0.5vmin] mt-[2vmin]">
                  <div className="flex flex-row">
                  <GoDotFill className="mt-[0.5vmin]" />
                    No Automated Testing Tools Manual testing only.</div>
                  <div className="flex flex-row">
                  <GoDotFill className="mt-[0.5vmin]" />
                    No Fake Bug Reports Submitting false reports will lead to a
                    penalty.
                  </div>
                  <div className="flex flex-row">
                  <GoDotFill className="mt-[0.5vmin]" />
                    No Code Manipulation Testers cannot intentionally modify
                    code to create artificial bugs.
                  </div>
                  <div className="flex flex-row">
                  <GoDotFill className="mt-[0.5vmin]" />
                    No Collusion Testers and developers cannot secretly
                    collaborate to generate false bug-fix
                  </div>
                  {/* Prize box */}
                  <div className="flex flex-col gap-[2vmin]">
                    <div className="font-bold font-poppins text-[4vmin] mt-[2vmin]">
                      Prize : 
                    </div>
                    <div className="font-sans text-[2.5vmin] uppercase font-semibold">
                       First Poistion : 300
                    </div>
                    <div  className="font-sans text-[2.5vmin] uppercase font-semibold">
                       Second poistion : 200
                    </div>
                    <div  className="font-sans text-[2.5vmin] uppercase font-semibold">
                       Third Poision : 400
                    </div>
                  </div>
                  {/* Crieria Judging criteria  */}
                  <div className="mt-[2vmin]">
                    Result will Be decleared on these Criteria : 
                    <div className="flex flex-row gap-[1vmin] mt-[2vmin]">
                    <GoDotFill className="mt-[0.5vmin]" />
                      Based on your Code Redability .
                    </div>
                    <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                      Based on the number of bugs you solved .
                    </div>
                    <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                      Based on the complexity of your Code .
                    </div>
                    <div className="flex flex-row">
                    <GoDotFill className="mt-[0.5vmin]" />
                      Based on the time you took to report and fix the bugs .
                    </div>
                  </div>
                  <div>
                    <div className="mt-[2vmin]">
                      <h1 className="text-[4vmin] font-poppins uppercase font-bold">
                        Sumbit Your Review About The Event : 
                      </h1>
                    </div>
                    <div  className="flex flex-row mt-[3vmin] mb-[5vmin]">
                    <div className="flex items-center mr-[2vmin]">
                        <button className="bg-[#4C1A76] h-[7vmin] w-[20vmin] rounded-[4vmin]
                        text-white font-poppins" 
                        >Sumbit</button>
                      </div>
                      <div>
                      <form action="">
                        <input type="text" name="" id="" 
                        placeholder="Enter your review"
                        className="h-[6.5vmin] w-[90vmin] rounded-[1vmin]  bg-[#F5F5F5]
                        focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans border border-gray-100"/>
                      </form>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-[4vmin]">
          <div className="h-[40vmin] w-[50vmin] bg-white mt-[4vmin] ml-[0.5vmin]">
            Event Register Section
          </div>
          <div className="h-[30vmin] w-[50vmin] bg-white mrl-[0.5vmin]">
            hii
          </div>
        </div>
      </div>

      {/* Footer (Always Visible) */}
      <Footer />

      {/* Hide Scrollbar CSS */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </>
  );
};

export default BugHuntArena;
