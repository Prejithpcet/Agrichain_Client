import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";

export default function Scan() {
  const [data, setData] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const navigate = useNavigate();

  const handleClick = async () => {
    setData("");
    setProductDetails(null);
  };

  useEffect(() => {
    try {
      if (data) {
        // Parse the JSON string from the QR code
        const parsedData = JSON.parse(data);

        // Assuming the QR code content is structured as a product details JSON
        setProductDetails(parsedData);
      }
    } catch (error) {
      console.error("Error parsing QR code data:", error);
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center min-h-[100vh] p-20 w-full bg-slate-300">
      <div className="flex flex-col justify-center items-center p-20 bg-white rounded-xl text-black">
        <span className="text-[32px] font-bold text-[#00714F]">AgriChain</span>
        <span className="text-[16px] text-gray-400">Track your Product</span>

        {!data && (
          <div className="border-2 p-2 m-3 border-[#00714F]">
            <QrReader
              videoContainerStyle={{ width: 200 }}
              onResult={(result, error) => {
                console.log(result);
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              style={{ width: "200%" }}
            />
          </div>
        )}

        {productDetails && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Product Details</h3>
            <p>ID: {productDetails.id}</p>
            <p>IsLastStep: {String(productDetails.isLastStep)}</p>
            <p>IsFirstStep: {String(productDetails.isFirstStep)}</p>

            <p>Next Address: {productDetails.next}</p>
            <p>Stage: Processing</p>
            <p>Location: {productDetails.location}</p>
            <p>Description: {productDetails.description}</p>
            {/* Add more details as needed */}
          </div>
        )}

        <div className="bg-[#00714F] text-white px-4 py-2 w-fit mt-4 rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
          <button onClick={handleClick}>Scan Again</button>
        </div>
      </div>
    </div>
  );
}
