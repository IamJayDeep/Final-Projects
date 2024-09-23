import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-16">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-xl text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-center my-10">
        <a
          href="#"
          className="text-sm sm:text-base bg-gradient-to-r from-orange-500 to-orange-800 my-5 md:my-0 py-3 px-4 rounded-md flex items-center justify-center hover:scale-105 transition ease-linear"
        >
          Start for free
        </a>
        <a
          href="#"
          className="text-sm sm:text-base py-3 px-4 mx-3 rounded-md border flex items-center hover:scale-105 transition ease-linear"
        >
          Documentation
        </a>
      </div>
      <div className="flex-col flex items-center md:flex-row md:mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          src={video1}
          className="w-3/4 md:w-1/2 border-2 rounded-lg border-orange-700  mx-2 my-4"
          type="video/mp4"
        >
          Your Browser does not support video tag
        </video>
        <video
          autoPlay
          loop
          muted
          src={video2}
          className="w-3/4 md:w-1/2 border-2 rounded-lg border-orange-700 mx-2 my-4"
          type="video/mp4"
        >
          Your Browser does not support video tag
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
