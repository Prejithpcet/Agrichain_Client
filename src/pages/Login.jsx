import { error, log } from "console";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useStateContext } from "../context";
import { Loader } from "../components";

export default function Login() {
  const { address, addUser } = useStateContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    role: "Select Job Role",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent default reloading
    //console.log(formData);
    setIsLoading(true);
    try {
      await addUser({
        ...formData,
      });
    } catch (error) {
      console.log("Error: ", error);
    }
    setIsLoading(false);
    if (formData.role == "Farmer") {
      navigate("/dashboard", { state: { formData } });
    } else if (formData.role == "Admin") {
      navigate("/dashboard/verify-user", { state: { formData } });
    } else {
      navigate("/dashboard/intermediate", { state: { formData } });
    }
  };

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      {isLoading && <Loader msg="Transaction in Process" />}
      <div className="flex flex-col justify-center items-center w-[50%] h-[50%] bg-white rounded-xl">
        <span className="text-[32px] font-bold text-[#00714F]">Login</span>
        <form
          className="w-full mt-[15px] flex flex-col gap-[30px]"
          onSubmit={handleSubmit}
        >
          <div className="flex-1 w-full flex gap-6 justify-center items-center">
            <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
              Name *
            </span>
            <input
              required
              name="name"
              value={formData.name}
              type="text"
              placeholder="Please enter your name"
              onChange={handleInputChange}
              className="py-[8px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[#808191]text-[14px] placeholder:[#4b5262] rounded-[10px] w-[50%]"
            />
          </div>
          <div className="flex-1 w-full flex gap-2 justify-center items-center">
            <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
              Location *
            </span>
            <input
              required
              name="location"
              value={formData.location}
              type="text"
              placeholder="Please enter your location"
              onChange={handleInputChange}
              className="py-[8px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[#808191]text-[14px] placeholder:[#4b5262] rounded-[10px] w-[50%]"
            />
          </div>
          <div className="flex-1 w-full flex gap-8 justify-center items-center">
            <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
              Role *
            </span>
            <select
              required
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="py-[8px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[#808191] text-[14px] placeholder:[#4b5262] rounded-[10px] w-[50%]"
            >
              <option value="Select Job Role" disabled>
                Select Job Role
              </option>
              <option value="Farmer">Farmer</option>
              <option value="Processor">Processor</option>
              <option value="Seller">Seller</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="bg-[#00714F] flex justify-center items-center text-white px-4 py-2 w-[100px] rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
