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

const TemperatureGraph = ({ data }) => {
  // Map temperature data
  const temperatureData = data.map((item, index) => ({
    serial: index + 1,
    temperature: parseInt(item.temperature),
  }));

  return (
    <div>
      <h2 className="text-[#00714F] font-bold pb-4 pl-12">Temperature Graph</h2>
      <LineChart
        width={550}
        height={300}
        data={temperatureData}
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
            value: "Temp (°C)->",
            angle: -90,
            position: "insideLeft",
            offset: 0,
          }}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#00714F"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default TemperatureGraph;
