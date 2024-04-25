// Import necessary dependencies and functions
import React, { useState, useEffect } from "react";
import { QRCode, Steps } from "antd";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context"; // Adjust the import path accordingly
import { Loader } from "../components";
import { useNavigate } from "react-router-dom";
import { log } from "console";

export default function TrackProduct1() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("State Information1: ", location.state);
  const add = location.state.add;
  const formDetails = location.state.formData1;
  const { contract, getStepDetailsFn } = useStateContext();

  const [stepDetails, setStepDetails] = useState(null);
  const [qrCodeValue, setQrCodeValue] = useState(""); // Declare qrCodeValue state

  useEffect(() => {
    // Function to fetch step details
    setIsLoading(true);
    const fetchStepDetails = async () => {
      try {
        // Call the contract function to get step details
        // const details = await getStepDetailsFn(add);

        // Extract the relevant information from details and create stepDetails JSON
        const stepDetailsData = {
          id: add,
          isLastStep: false,
          isFirstStep: false,
          isProcessedStep: false,
          next: "0x0000000000000000000000000000000000000000",
          prev: formDetails.state_prev,
          owner: "0xE014eeae530b11f4e58cA03eEdeD6839941E978f",
          data: formDetails.stage_data,
          location: formDetails.stage_location,
          description: formDetails.stage_description,
          /*product: formDetails.product_name,
          location: formDetails.product_location,
          description: formDetails.product_description,*/
        };

        setStepDetails(stepDetailsData);

        // Convert stepDetails JSON to string and set it as the QR code value
        const qrCodeValue = JSON.stringify(stepDetailsData);
        setQrCodeValue(qrCodeValue);
        console.log("QR Code Value", qrCodeValue);
      } catch (error) {
        console.error("Error fetching step details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch step details when the component mounts
    fetchStepDetails();
  }, [contract, add]);

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {isLoading && <Loader msg="Fetching Step Data" />}
        <p className="text-[32px] font-bold text-[#00714F] mt-8">Agrichain</p>
        <p className="text-[20px] font-semibold text-gray-400">
          Product Tracking
        </p>
        <div className="mt-10">
          <QRCode value={qrCodeValue} bgColor="#fff" />
        </div>
        <div className="mt-5">
          <p>
            Id:{" "}
            <span className="text-[#00714F] font-medium text-sm">{add}</span>
          </p>
        </div>
        <div className="mt-20">
          <Steps
            current={2}
            percent={60}
            items={[
              {
                title: "Finished",
                description: "Completed product registration",
              },
              {
                title: "Processed",
                description: "Verified and processed by the processor",
              },
              {
                title: "Waiting",
                description: "Out for purchase",
              },
              {
                title: "Sold out",
                description: "Confirmed purchase, chain terminated",
              },
            ]}
          />
        </div>

        <div className="bg-[#00714F] mt-52 flex justify-center items-center text-white px-4 py-2 w-[200px] rounded-md font-semibold">
          <button onClick={goHome}>Go to Dashboard</button>
        </div>
      </div>
    </>
  );
}
