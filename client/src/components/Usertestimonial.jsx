import { useState } from "react";

const UserTestinomial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { title: "Card 1", content: "This is the first card." },
    { title: "Card 2", content: "This is the second card." },
    { title: "Card 3", content: "This is the third card." },
    { title: "Card 4", content: "This is the fourth card." },
    // Add more cards as needed
  ];

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };
  return (
    <>
      <div
        className="w-full h-[100vmin] bg-[#4C1A76] mt-[14vmin] mb-[10vmin] border rounded-[5vmin]
      flex gap-2"
      >
        <div className="w-full bg-white h-full flex justify-center items-center">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex justify-center">
              <h1 className="text-[4vmin] font-bold uppercase"> Our User Experince</h1>
              </div>
            
              <div
                className="flex transition-all duration-300"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }} 
              >
                
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center  flex-col
                    flex-shrink-0 p-6 bg-white rounded-lg shadow-lg h-[80vmin]" // Increased card height
                  > 
                  <div className="bg-[#F5F5F5] h-[50vmin] w-full rounded-md 
                  flex justify-center items-center flex-col mb-[10vmin]">
                     <h2 className="text-xl font-semibold">{card.title}</h2>
                     <p>{card.content}</p>
                  </div>
                   
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full h-[10vmin] w-[10vmin]
            text-[2vmin] font-bold"
            >
              &lt;
            </button>
            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full h-[10vmin] w-[10vmin]
             text-[2vmin] font-bold"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="w-full h-full flex  justify-center items-center">
          <form action="">
            <div className="mb-[2vmin]">
              <h1 className="text-[5vmin] uppercase text-white font-poppins font-bold">
                Share Your Journey With Dev Hubs
              </h1>
            </div>
            <div>
              <div>
                <label
                  htmlFor="Name"
                  className="text-[3vmin] text-white font-poppins gap-y-2"
                >
                  Name :
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 text-[#171521] rounded-md border border-[#4C1A76] focus:outline-none focus:ring-2 focus:ring-[#F76C21]
                mb-[6vmin]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Email"
                  className="text-[3vmin] text-white font-poppins gap-y-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 text-[#171521] rounded-md border border-[#4C1A76] focus:outline-none focus:ring-2 focus:ring-[#F76C21]
                mb-[6vmin]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Experince"
                  className="text-[3vmin] text-white font-poppins gap-y-2"
                >
                  Your Experince :
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Share your experience with us..."
                  className="w-full p-3 text-[#171521] rounded-md border border-[#4C1A76] focus:outline-none focus:ring-2 focus:ring-[#F76C21]
                mb-[5vmin]"
                  required
                ></textarea>
              </div>
            </div>
            <button
              className="h-[10vmin] w-[80vmin] text-black bg-white
                         border rounded-[3vmin] text-[2.5vmin] text-center ml-[15.2vmin] mb-[5vmin] shadow-md
                        font-bold uppercase flex fkex-row justify-center items-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default UserTestinomial;
