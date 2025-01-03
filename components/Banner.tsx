"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] md:mt-[160px] z-[20] mb-[80px] md:mb-[300px]">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/james.jpg"
            height={200}
            width={200}
            className="rounded-full"
            alt="Isabella James"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Isabella James
        </div>
        {/* <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          I do Show &{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Chill
          </span>{" "}
          🏡
        </p> */}
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
        As a seasoned realtor with five years of invaluable experience, I am here to assist you in finding your dream home. Allow me to curate a selection of homes that perfectly match your unique preferences and requirements. Your ideal home is just a step away, and I am committed to making the process smooth and tailored to your needs
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:isabeljames004@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent mt-auto md:mt-[70px]"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
