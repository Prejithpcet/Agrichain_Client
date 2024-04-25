import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Loader } from "../components";

function App() {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dht-11-5ce00-default-rtdb.firebaseio.com/sdda27686312.json"
        );
        const data = await response.json();
        setSensorData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch data only once when the component mounts

    // Cleanup function
    return () => {
      // Cleanup code (if needed)
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  if (!sensorData) {
    return (
      <div>
        <Loader msg="Loading Chart" />
      </div>
    );
  }

  // Prepare data for the chart
  const chartData = {
    labels: Object.values(sensorData).map((data) => data.time),
    datasets: [
      {
        label: "Temperature (°C)",
        data: Object.values(sensorData).map((data) => data.temperature),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(0,113,79,15)",
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            parser: "HH:mm//DD/MM/YYYY",
            tooltipFormat: "ll HH:mm",
          },
          scaleLabel: {
            display: true,
            labelString: "Time",
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Temperature (°C)",
          },
        },
      ],
    },
  };

  return (
    <div className="w-full h-full flex flex-col items-center pt-4">
      <h1 className="text-[#00714F] font-extrabold text-[32px] px-auto">
        Temperature Realtime Monitoring (sdda27686312)
      </h1>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default App;
