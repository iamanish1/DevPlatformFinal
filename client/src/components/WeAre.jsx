import video from "../assets/devintro2.mp4";

const WeAre = () => {
  return (
    <>
      <div className="w-full bg-white mt-[14vmin] mb-[10vmin] border">
        <div className="mt-[5vmin] ml-[5vmin] flex items-center justify-center">
          <h1 className="text-[6vmin] font-poppins font-bold">
            Why Do We Need <span className="text-[#F76C21]">Dev</span>
            <span className="text-[#4C1A76]">Hubs</span> ?
          </h1>
        </div>
        <div className="flex gap-16 flex-wrap">
          <div className="mt-[5vmin] ml-[5vmin] mb-[7vmin]">
            <p className="mb-3 font-sans leading-[4.9vmin] text-justify">
              Dev Hub is an innovative social media platform designed
              specifically for developers,
              <br />
              bringing together the best elements of collaboration, community,
              and technology.
              <br />
              Our mission is to empower developers of all skill levels to
              connect, share,
              <br />
              and grow in a highly interactive and supportive environment. With
              features like
              <br />
              real-time collaborative coding, AI-assisted pair programming,
              customizable
              <br />
              coding environments, and live coding events, Dev Hub provides an
              unparalleled
              <br />
              platform for dynamic learning and professional development.
              <br />
            </p>
            <p className="mb-3 font-sans leading-[4.9vmin] text-justify">
              Developers can showcase their projects with integrated version
              control, <br />
              receive valuable feedback through code review rooms, and
              participate in <br />
              hackathons or coding competitions to challenge their skills.
              Beyond coding <br />
              Dev Hub fosters meaningful connections with its mentorship
              programs <br /> interactive knowledge-sharing feeds, and gamified
              rewards system <br />
              that recognizes contributions and expertise. Whether you are
              building <br />
              your portfolio, exploring new technologies, or simply looking for
              a place to <br /> collaborate and innovate, Dev Hub is your go-to
              platform for unlocking <br />
              your full potential in the coding world with us let began your
              journey now.
            </p>
          </div>
          <div className="mt-[5vmin] ml-[5vmin] mb-[15vmin] w-[103vmin] flex items-center justify-center rounded-[2vmin]">
            <video
              className="w-full h-[70vmin] sm:h-[400px] mb-[0vmin] mr-[4vmin] ml-[4vmin]"
              controls
              autoPlay
              preload="auto"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeAre;
