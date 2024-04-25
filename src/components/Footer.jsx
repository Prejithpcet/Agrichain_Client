//import React from "react";
import { Leaf } from "../assets";

export default function Footer() {
  return (
    <div className="w-full h-[10%] bg-slate-200 flex flex-col justify-center items-center">
      <div className="flex gap-2">
        <img src={Leaf} alt="Leaf" className="w-[28px]" />
        <span className="text-[#00714F] text-[28px] font-bold">Agrichain</span>
      </div>
      <span className="text-sm font-normal text-gray-700">
        &copy; 2023 All Rights Reserved
      </span>
    </div>
  );
}
