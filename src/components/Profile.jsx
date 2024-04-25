//import React from 'react'
import { v7 } from "../assets";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[60%] h-[60%] mx-auto my-auto bg-white px-6 py-4 mt-20 rounded-lg">
        <p className="text-[#00714F] text-[32px] font-bold">Profile</p>
        <img className="w-[60px] h-[60px]" src={v7} alt="Profile Img" />
        <p className="text-sm font-semibold text-gray-400">Farmer</p>
        <div className="flex gap-3 mt-5">
          <span>Name</span>
          <span>John Doe</span>
        </div>
        <div className="flex gap-3">
          <span>User Id</span>
          <span>0xE014eeae530b11f4e58c</span>
        </div>
        <div className="bg-[#00714F] text-white px-4 py-2 w-fit mt-4 rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
