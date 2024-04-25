import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStateContext } from "../context";
import { Loader } from "../components";
//import { log } from "console";

export default function Main() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    product_name: "",
    product_location: "",
    product_description: "",
  });

  //const [event, setEvent] = useState("");
  const { firstStep, contract } = useStateContext();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);

    try {
      await firstStep({
        ...formData,
      });

      const eventOut = await contract.events.getEvents("eventStepCreated");
      console.log("Step created: ", eventOut);

      if (eventOut.length > 0) {
        // Node created successfully
        let add = eventOut[eventOut.length - 1].data.addr;
        console.log("Address: ", add);

        navigate("/dashboard/track-product", { state: { add, formData } });
      } else {
        // No node created, show an error
        console.error("Error: No step created");
        navigate("/dashboard/error");
      }
    } catch (error) {
      console.error("Error: ", error);
      navigate("/dashboard/error");
    } finally {
      setIsLoading(false);
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
            Register a Product
          </p>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <p className="mt-4 text-slate-400 font-semibold">Product Name</p>
            <input
              className="w-[400px] mt-2 px-3 ring-2 ring-slate-300 rounded-md placeholder:text-slate-200 text-slate-400"
              type="text"
              name="product_name"
              placeholder="Mangoes"
              onChange={handleInputChange}
            />

            <p className="mt-4 text-slate-400 font-semibold">
              Location Details
            </p>
            <input
              className="w-[400px] mt-2 px-3 ring-2 ring-slate-300 rounded-md placeholder:text-slate-200 text-slate-400"
              type="text"
              name="product_location"
              placeholder="Trivandrum, Kerala"
              onChange={handleInputChange}
            />

            <p className="mt-4 text-slate-400 font-semibold">
              Product Description
            </p>
            <textarea
              name="product_description"
              rows="4"
              cols="50"
              className="w-[400px] mt-2 px-3 ring-2 ring-slate-300 rounded-md placeholder:text-slate-200 text-slate-400"
              placeholder="Add product details"
              onChange={handleInputChange}
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
