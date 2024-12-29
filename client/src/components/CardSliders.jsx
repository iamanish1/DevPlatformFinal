/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const CardSlider = () => {
  // Quotes array for typing effect
  const quotes = [
    "Your Hub for Coding, Collaboration, and Growth",
    "Empowering Developers to Build, Share, and Grow",
    "Join the DevHub, Code with Passion, Grow with Community",
    "Collaborative Coding for the Modern Developer",
    "Code, Collaborate, and Thrive in the Developer Community",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Handle typing effect logic
  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    let typingTimer;

    if (isTyping) {
      // Typing effect logic
      typingTimer = setInterval(() => {
        setTypedText((prev) => currentQuote.slice(0, prev.length + 1));
      }, 100);
    } else {
      typingTimer = setTimeout(() => {
        setIsTyping(true);
      }, 2000); // Wait after full quote to transition to the next
    }

    if (typedText === currentQuote) {
      setIsTyping(false); // Stop typing once the current quote is typed
    }

    return () => clearInterval(typingTimer); // Clean up interval on unmount or change
  }, [typedText, quoteIndex, isTyping]);

  // Handle quote transition logic
  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length); // Cycle through quotes
        setTypedText(""); // Clear typed text for the next quote
      }, 1000); // Delay before the next quote starts typing
    }
  }, [isTyping]);

  return (
    <div className="w-full">
      {/* Swiper Component for cards */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={3} // Show 3 cards at a time
        spaceBetween={30} // Space between cards
        loop={true}
        className="w-full"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[40vmin] w-full mb-[2vmin] bg-[#F5F5F5] flex items-center justify-center rounded-xl shadow-lg"
              style={{
                animationName: "slideInOut",
                animationDuration: "9s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
            >
              Card {index + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Typing Effect */}
      <div className="flex justify-center mt-[3vmin] mb-[9vmin]">
        <h1 className="text-[6.5vmin] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f5a9b8] to-[#fff] text-center">
          {typedText}
        </h1>
      </div>
    </div>
  );
};

export default CardSlider;
