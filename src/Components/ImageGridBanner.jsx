import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const ImageGridBanner = () => {
    return (
        <div>
            <div className="grid grid-cols-5 gap-4 h-screen max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="col-span-3 relative border">
  <h1 className="absolute left-4 text-[#FF0B55] text-3xl font-bold bg-black/60 backdrop-blur-3xl px-4  rounded-lg">
    Recommendation Blog
  </h1>
  <FaArrowRightLong className="absolute left-9  top-[4.5rem] text-[#FF0B55] text-2xl" />
</div>

<div className="col-span-2 bg-amber-200 relative border transition-transform duration-500 ease-in-out hover:scale-110 h-[400px] rounded-xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
    alt="Right Image"
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-95"
  />

  <h2 className="absolute bottom-4 left-4 text-[#FF0B55] text-3xl font-bold">
    Tech World
  </h2>
  
</div>


            </div>
        </div>
    )
}

export default ImageGridBanner
