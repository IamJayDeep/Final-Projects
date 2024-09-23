import React from "react";
import { features } from "../Constants";

function Features() {
  return (
    <div id="features">
      <div className="mt-28 text-center">
        <span className="uppercase text-orange-500 font-medium">Features</span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl mt-10">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex justify-center items-center mx-6 h-10 w-10  text-orange-700">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-10 md:mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
