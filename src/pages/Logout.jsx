import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FirebaseDataDisplay() {
  const [data, setData] = useState({});
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://college-market-70ed6-default-rtdb.firebaseio.com/sadasdasdda.json "
      );

      const data = [
        {
          gps: {
            latitude: "114",
            longitude: "13",
          },
          humidity: "30",
          temperature: "10",
          time: "",
        },
        {
          gps: {
            latitude: "134",
            longitude: "23",
          },
          humidity: "30",
          temperature: "10",
          time: "",
        },
        {
          gps: {
            latitude: "154",
            longitude: "23",
          },
          humidity: "30",
          temperature: "10",
          time: "",
        },
      ];
      console.log("Data: ", data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleTrackTemperature = () => {
    navigate("/dashboard/temp", { state: { data } }); // Pass data to "/dashboard/temp" route
  };

  const handleTrackLocation = () => {
    navigate("/dashboard/tracklocation", { state: { data } }); // Pass data to "/dashboard/tracklocation" route
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-[#00714F] text-[32px] font-bold mb-4">
        Firebase Realtime Database Demo
      </h1>
      <div className="flex gap-12 mt-20">
        <div
          className="bg-[#00714F] flex justify-center items-center text-white px-4 py-2 w-[200px] rounded-md font-semibold"
          onClick={handleTrackTemperature} // Call handleTrackTemperature on button click
        >
          <button>Track Temperature and Humidity</button>
        </div>
        <div
          className="bg-[#00714F]  flex justify-center items-center text-white px-4 py-2 w-[200px] rounded-md font-semibold"
          onClick={handleTrackLocation} // Call handleTrackLocation on button click
        >
          <button>Track Location</button>
        </div>
      </div>
    </div>
  );
}

export default FirebaseDataDisplay;
