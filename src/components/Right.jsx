import React, { useEffect, useState } from "react";
import { img1, v6, v7 } from "../assets";
import { useStateContext } from "../context";
import { useNavigate } from "react-router-dom";
import { log } from "console";

export default function Right() {
  const navigate = useNavigate();
  const { address, getUser, contract } = useStateContext();
  const [user, setUser] = useState(null);
  const ownerContract = "0x4c64BaB040a7bc5aaDeCD838a40dB4FCFde09fdD";

  useEffect(() => {
    const getUserDetails = async () => {
      if (address) {
        const userData = await getUser(address);
        setUser(userData);
        console.log(userData);
      }
    };
    getUserDetails();
  }, [contract, address]);

  // Check if user or address is not available yet
  if (!user || !address) {
    return <div>Loading...</div>;
  }

  // Now, you can safely use user and address
  const shortenedAddress = `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;

  const isOwner = address === ownerContract;

  const handleVerification = () => {
    navigate("/dashboard/verify-user");
  };

  return (
    <>
      <div className="bg-white h-[100%] flex flex-col">
        <div className="flex justify-between px-4 pt-3">
          <span className="text-[20px] font-semibold text-[#00714F]">
            My Profile
          </span>
        </div>
        <div className="w-[90%] mx-auto rounded-md shadow-2xl mt-4 bg-gray-400 opacity-70 relative ring-2 ring-[#00714F]">
          <img className="rounded-md z-0" src={img1} alt="Farm Image" />
          <div className="absolute w-[60px] h-[60px] z-20 bottom-[-30px] left-[80px] bg-slate-100 rounded-full flex justify-center items-center shadow-2xl ring-2 ring-[#00714F]">
            <img className="w-[45px] shadow-2xl" src={v7} alt="V7" />
          </div>
        </div>
        <div className="h-[50px]"></div>
        <div className="flex flex-col justify-center items-center gap-0">
          <span className="text-[#00714F] text-[20px] font-semibold">
            {user[0]}
          </span>
          <span className="text-sm font-medium text-gray-400">{user[2]}</span>
          <span className="text-[#00714F] text-xs font-bold">
            {shortenedAddress}
          </span>
          {isOwner ? (
            <div className="bg-[#00714F] mt-8 flex justify-center items-center text-white px-4 py-2 w-[200px] rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
              <button onClick={handleVerification}>Verify User</button>
            </div>
          ) : (
            <div className="bg-[#00714f7a] mt-8 flex justify-center items-center text-white px-4 py-2 w-[200px] rounded-md font-semibold">
              <button disabled>Verify User</button>
            </div>
          )}
          <div className="bg-[#00714F] mt-52 flex justify-center items-center text-white px-4 py-2 w-[200px] rounded-md font-semibold">
            <button>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}
