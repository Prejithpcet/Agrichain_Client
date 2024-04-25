import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { useNavigate } from "react-router-dom";
import { Loader, UserCard } from "../components";

export default function VerifyUser() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { contract, getUserArray, verifyUserFn } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserArrayDetails = async () => {
      const usersData = await getUserArray();
      const transformedUsers = usersData[0].map((address, index) => ({
        address,
        name: usersData[1][index],
        location: usersData[2][index],
        stage: usersData[3][index],
        isVerified: usersData[4][index],
      }));
      setUserList(transformedUsers);
    };

    getUserArrayDetails();
  }, []);

  const handleVerifyUser = async (userAddress) => {
    setIsLoading(true);
    // Call the smart contract function to verify the user
    await verifyUserFn(userAddress);

    // Update the userList state with the new verification status
    const updatedUserList = userList.map((user) => {
      if (user.address === userAddress) {
        return { ...user, isVerified: true };
      }
      return user;
    });

    setUserList(updatedUserList);
    setIsLoading(false);
  };
  const back = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col pt-8 justify-start items-center">
        {isLoading && <Loader msg="Verifying User" />}
        <p className="text-[32px] font-bold text-[#00714F]">Admin Dashboard</p>
        <div>
          {userList.map((user) => (
            <div key={user.address} className="flex flex-col gap-4">
              <UserCard
                key={user.address}
                user={user}
                onVerify={handleVerifyUser}
              />
            </div>
          ))}
        </div>
        <div className="bg-[#00714F] mt-8 flex justify-center items-center text-white px-4 py-2 w-[200px] rounded-md font-semibold">
          <button onClick={back}>Go to Dashboard</button>
        </div>
      </div>
    </>
  );
}
