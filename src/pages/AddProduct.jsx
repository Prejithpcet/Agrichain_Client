//import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/track-product");
  };
  return (
    <>
      <div className="flex flex-col px-8 py-8">
        <div className="flex flex-col">
          <p className="text-[32px] font-bold text-[#00714F]">Hello, John</p>
          <span className="text-md font-semibold text-gray-400">
            Welcome to Agrichain
          </span>
        </div>
        <div className="mt-10 flex flex-col">
          <p className="text-[24px] font-bold">Add Product Details</p>
          <form className="flex flex-col">
            <p className="mt-4 font-semibold">Product Id</p>
            <input
              className="w-[400px] mt-2 px-3 ring-2 ring-slate-300 rounded-md"
              type="text"
              name="product_id"
              placeholder="0xE014eeae530b11f4e58cA03eEdeD6839941E978f"
            />
            <p className="mt-4 font-semibold">Product Details</p>
            <textarea
              name="description"
              rows="4"
              cols="50"
              className="w-[400px] mt-2 px-3 ring-2 ring-slate-300 rounded-md"
              placeholder="Add product details"
            />
            <div className="bg-[#00714F] text-white px-4 py-2 w-fit mt-4 rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
              <button type="submit" onClick={handleClick}>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
