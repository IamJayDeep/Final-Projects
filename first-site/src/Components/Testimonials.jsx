import React from "react";
import { testimonials } from "../Constants";

function Testimonials() {
  return (
    <div id="Testimonials" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4 hover:scale-105 transition ease-linear"
          >
            <div className="bg-neutral-900 rounded-md border p-6 border-neutral-800 font-thin">
              <p className="overflow-hidden text-ellipsis line-clamp-4">
                {testimonial.text}
              </p>
              <div className="flex mt-8 items-start">
                <img
                  src={testimonial.image}
                  alt="userImage"
                  className="w-12 h-12 rounded-full mr-6 border border-neutral-300"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
