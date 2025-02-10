const EventDetailPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-white">
      {/* Event Cover Image */}
      <div className="w-full h-[40vmin] bg-gray-300 flex justify-center items-center text-2xl font-bold">
        Event Cover Image
      </div>

      {/* Event Title & Details */}
      <div className="w-[80%] mt-6 text-center">
        <h1 className="text-[5vmin] font-bold text-[#4C1A76]">Bug Hunt Arena</h1>
        <p className="text-[2.5vmin] text-gray-600 font-semibold mt-2">
          Hosted by Dev Hub Platform
        </p>
        <p className="text-[2.2vmin] text-gray-500 mt-1">Ends in: 1d 5h 10m</p>
      </div>

      {/* Category Tags */}
      <div className="flex gap-4 mt-4">
        {["MERN Stack", "Bug Hunting", "Coding Skill"].map((category, index) => (
          <div
            key={index}
            className="h-[7vmin] px-6 py-2 rounded-full border border-[#4C1A76] text-[2.3vmin] uppercase font-semibold flex items-center justify-center bg-[#F9F4FC] text-[#4C1A76]"
          >
            {category}
          </div>
        ))}
      </div>

      {/* Navigation Menu */}
      <div className="w-full flex justify-center border-b-2 mt-6 sticky top-0 bg-white py-3 z-10 shadow-sm">
        {["Details", "Process", "Rules", "Prizes"].map((item, index) => (
          <div
            key={index}
            className="mx-4 cursor-pointer py-2 px-4 text-gray-700 hover:text-[#4C1A76] font-medium transition duration-300"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Event Sections */}
      <div className="w-[80%] mt-8 space-y-8">
        {[
          {
            title: "Details",
            content:
              "Developers submit projects for testing. Each event features multiple projects where developers define the scope, rules, and reward structure (cash prizes, points, or reputation boosts)."
          },
          {
            title: "Process",
            content: (
              <ul className="list-disc pl-6 text-[2.5vmin] text-gray-600 mt-2 space-y-1">
                <li>Developers submit their projects.</li>
                <li>Testers participate and find bugs.</li>
                <li>Reported bugs are verified and ranked based on severity.</li>
                <li>Winners are determined based on their performance.</li>
              </ul>
            )
          },
          {
            title: "Prizes",
            content: (
              <div className="mt-4">
                {[
                  { position: "First", reward: 1000 },
                  { position: "Second", reward: 700 },
                  { position: "Third", reward: 400 }
                ].map((prize, index) => (
                  <div key={index} className="flex justify-between py-2 border-b">
                    <span className="text-[2.5vmin] font-medium text-gray-700">
                      {prize.position} Position
                    </span>
                    <span className="text-[2.5vmin] text-[#4C1A76] font-semibold">
                      ₹{prize.reward}
                    </span>
                  </div>
                ))}
              </div>
            )
          }
        ].map((section, index) => (
          <div key={index} className="text-left">
            <h2 className="text-[3.5vmin] font-semibold text-[#4C1A76] mb-2">
              {section.title}
            </h2>
            <p className="text-[2.5vmin] text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetailPage;
