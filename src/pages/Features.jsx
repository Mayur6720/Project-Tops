import React from "react";
import style1 from '../assets/style1.avif'
import style2 from '../assets/style2.jpg'
import style3 from '../assets/style3.jpg'
// import Navbar from "../Components/Navbar";


const Features = () => {
  return (
    <>
      <div className="text-center text-emerald-800 text-opacity-50 my-12 text-4xl">
        <p className="">Card with hover effect</p>
      </div>
      <div>
        <div className="text-center mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-green-900 transition-all duration-300 flex flex-col items-center justify-center h-full">
            <img className="inline-block" src={style3} alt="" />
            <h2 className="my-3">Green</h2>
            <p>Image with green shades</p>
          </div>
          <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-green-900 transition-all duration-300 flex flex-col items-center justify-center h-full">
            <img className="inline-block" src={style1} alt="" />
            <h2 className="my-3">Green</h2>
            <p>Image with green shades</p>
          </div>
          <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-green-900 transition-all duration-300 flex flex-col items-center justify-center h-full">
            <img className="inline-block" src={style3} alt="" />
            <h2 className="my-3">Green</h2>
            <p>Image with green shades</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Features;
