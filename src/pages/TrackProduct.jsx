import React, { useState, useEffect } from "react";
import { QRCode, Steps, Button } from "antd";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context"; // Adjust the import path accordingly
import { Loader } from "../components";
import { useNavigate } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
export default function TrackProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState("large");
  //const [currentAddr, setCurrentAddr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("State Information: ", location.state);
  const add = location.state.add;
  //setCurrentAddr(add);
  const formDetails = location.state.formData;
  const { contract, getStepDetailsFn } = useStateContext();

  const [stepDetails, setStepDetails] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState(""); // Declare qrCodeValue state

  const downloadQRCode = () => {
    const canvas = document.getElementById("myqrcode")?.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  useEffect(() => {
    // Function to fetch step details
    const fetchStepDetails = async () => {
      try {
        // Call the contract function to get step details
        // const details = await getStepDetailsFn(add);

        // Extract the relevant information from details and create stepDetails JSON
        const stepDetailsData = {
          id: add,
          isLastStep: false,
          isFirstStep: true,
          isProcessedStep: false,
          next: "0x0000000000000000000000000000000000000000",
          prev: "0x0000000000000000000000000000000000000000",
          owner: "0xE014eeae530b11f4e58cA03eEdeD6839941E978f",
          /*product: "Mango",
          location: "Trivandrum",
          description: "Fresh",*/
          product: formDetails.product_name,
          location: formDetails.product_location,
          description: formDetails.product_description,
        };

        setStepDetails(stepDetailsData);

        // Convert stepDetails JSON to string and set it as the QR code value
        const qrValue = JSON.stringify(stepDetailsData);
        setQrCodeValue(qrValue);
        console.log("QR Code Value", qrValue);
      } catch (error) {
        console.error("Error fetching step details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch step details when the component mounts
    fetchStepDetails();
  }, [contract, add]); // Include currentAddr and formDetails in the dependency array

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
          <div id="myqrcode">
            <QRCode
              value={qrCodeValue}
              bgColor="#fff"
              style={{
                marginBottom: 16,
              }}
            />
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size={size}
              onClick={downloadQRCode}
            >
              Download
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <p>
            <span className="text-[#1677FF]">Id:</span>{" "}
            <span className="text-[#00714F] font-medium text-sm">{add}</span>
          </p>
        </div>
        <div className="mt-20">
          <Steps
            current={1}
            percent={60}
            items={[
              {
                title: "Finished",
                description: "Completed product registration",
              },
              {
                title: "Processing",
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
