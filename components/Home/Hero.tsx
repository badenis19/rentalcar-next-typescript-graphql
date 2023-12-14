import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
    <div className="grid grid-cols-1  md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold ">
          Premium Car Rental in Your Area
          {/* <span className="text-blue-600">Rental</span> */}
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </h2>
        <button className="p-2 mt-5 bg-purple-500 text-white px-4 rounded-full  hover:scale-105 transition-all">
          Explore Cars
        </button>
      </div>
      <div>
        <Image src='/logo.png' alt='hero' width={400} height={500} className='w-full object-cover' />
      </div>
    </div>
    );
    };
    
    export default Hero;

