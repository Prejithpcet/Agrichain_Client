import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStateContext } from "../context";
import { Loader } from "../components";

export default function IntermediateStep() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData1, setFormData1] = useState({
    stage_prev: "",
    stage_data: "",
    stage_location: "",
    stage_description: "",
  });
  const { contract, intermediateStep } = useStateContext();
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log(formData1);
    setIsLoading(true);
    try {
      await intermediateStep({
        ...formData1,
      });
      const eventOut = await contract.events.getEvents("eventStepCreated");
      console.log("Step created: ", eventOut);
      if (eventOut.length > 0) {
        // Node created successfully
        let add = eventOut[eventOut.length - 1].data.addr;
        console.log("Address: ", add);
        const newState = {
          addr: add,
          formD: formData1,
        };

        navigate("/dashboard/track-product1", { state: { add, formData1 } });
      } else {
        // No node created, show an error
        console.error("Error: No step created");
        navigate("/dashboard/error");
      }
    } catch (error) {
      console.error("Error: ", error);
      navigate("/dashboard/error");
    }
  };

  return (
    <>
      <div className="flex flex-col px-8 py-8">
        {isLoading && <Loader msg="Transaction in Process" />}
        <div className="flex flex-col">
          <p className="text-[32px] font-bold text-[#00714F]">Hello</p>
          <span className="text-md font-semibold text-gray-400">
            Welcome to Agrichain
          </span>
        </div>

        <div className="mt-10 flex flex-col">
          <p className="text-[24px] text-slate-600 font-bold">
            Enter processing stage details
          </p>
          <form className="flex flex-col" onSubmit={handleSubmit1}>
            <p className="mt-4 text-slate-400 font-semibold">
              Address of Previous Node
            </p>
            <input
              className="w-[400px] mt-2 px-3 ring-2 ring-slate-300 rounded-md placeholder:text-slate-200 text-slate-400"
              type="text"
              name="stage_prev"
              placeholder="0x54...05539"
              onChange={handleInputChange1}
            />
            <p className="mt-4 text-slate-400 font-semibold">Stage Details</p>
            <input
              className="w-[400px] mt-2 px-3 ring-2 ring-slate-300 rounded-md placeholder:text-slate-200 text-slate-400"
              type="text"
              name="stage_data"
              placeholder="Details"
              onChange={handleInputChange1}
            />

            <p className="mt-4 text-slate-400 font-semibold">Stage Location</p>
            <input
              className="w-[400px] mt-2 px-3 ring-2 ring-slate-300 rounded-md placeholder:text-slate-200 text-slate-400"
              type="text"
              name="stage_location"
              placeholder="Trivandrum, Kerala"
              onChange={handleInputChange1}
            />

            <p className="mt-4 text-slate-400 font-semibold">
              Stage Description
            </p>
            <textarea
              name="stage_description"
              rows="4"
              cols="50"
              className="w-[400px] mt-2 px-3 ring-2 ring-slate-300 rounded-md placeholder:text-slate-200 text-slate-400"
              placeholder="Add product details"
              onChange={handleInputChange1}
            />
            <div className="bg-[#00714F] text-white px-4 py-2 w-fit mt-4 rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
              <button type="submit">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
