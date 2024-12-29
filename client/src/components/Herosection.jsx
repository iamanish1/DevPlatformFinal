import CardSlider from "./CardSliders";

const HeroSection = () => {
  return (
    <>
      <div
        className="h-[72vmin] w-full flex justify-center items-center mt-[5.5vmin] bg-gradient-to-r from-[#522B5B] 
     via-[#a7869a] to-[#522B5B] border  shadow-lg rounded-[0.5vmin]"
      >
        <CardSlider />
      </div>
    </>
  );
};

export default HeroSection;
