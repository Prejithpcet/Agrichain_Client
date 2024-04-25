import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { Leaf } from "../assets";
export default function Wallet() {
  const { address, connect } = useStateContext();
  const navigate = useNavigate();
  const handleClick = async () => {
    if (address) {
      navigate("/login");
      console.log("Address: ", address);
    } else {
      await connect();
      navigate("/login");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-full bg-slate-300">
      <div className="flex flex-col justify-center items-center w-[50%] h-[50%]  bg-white rounded-xl text-black">
        <img src={Leaf} alt="Leaf" className="w-[40px]" />
        <span className="text-[32px] font-bold text-[#00714F]">AgriChain</span>
        <span className="text-[16px] text-gray-400">
          Connect to your wallet first to explore more
        </span>
        <div className="bg-[#00714F] text-white px-4 py-2 w-fit mt-4 rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
          <button onClick={handleClick}>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
