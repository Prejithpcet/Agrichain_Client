import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const HumidityGraph = ({ data }) => {
  // Map temperature data
  const humidityData = data.map((item, index) => ({
    serial: index + 1,
    humidity: parseInt(item.humidity),
  }));

  return (
    <div>
      <h2 className="text-[#00714F] font-bold pb-4 pl-12">Humidity Graph</h2>
      <LineChart
        width={550}
        height={300}
        data={humidityData}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="serial"
          label={{
            value: "Serial Number ->",
            position: "insideRight",
            offset: 14,
          }}
        />
        <YAxis
          label={{
            value: "Humidity (%)->",
            angle: -90,
            position: "insideLeft",
            offset: 0,
          }}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="humidity"
          stroke="#00714F"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default HumidityGraph;
