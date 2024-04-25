import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorComponent() {
  const navigate = useNavigate();
  const handleVerification = () => {
    navigate("/dashboard");
  };
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <p className="text-[40px] text-red-600 font-bold">Oh! An Error Occured</p>
      <p className="text-md text-slate-600">User Not Authenticated</p>
      <div className="bg-[#00714F] mt-8 flex justify-center items-center text-white px-4 py-2 w-[200px] rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
        <button onClick={handleVerification}>Go to Dashboard</button>
      </div>
    </div>
  );
}
