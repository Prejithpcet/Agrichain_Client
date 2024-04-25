import React from "react";
import { TrackMap } from "../components";

export default function TrackLocation() {
  const data = [
    {
      gps: {
        latitude: "8.546031656633447",
        longitude: "76.9063621530497",
      },
      humidity: "42",
      temperature: "31.2",
      time: "12030",
    },
    {
      gps: {
        latitude: "8.529363602892413",
        longitude: "76.92878507790809",
      },
      humidity: "40",
      temperature: "31.4",
      time: "21173",
    },
    {
      gps: {
        latitude: "8.517961785393268",
        longitude: "76.94348183770599",
      },
      humidity: "44",
      temperature: "31.1",
      time: "28547",
    },
    {
      gps: {
        latitude: "8.515782469678076",
        longitude: "76.96063796369901",
      },
      humidity: "42",
      temperature: "31.3",
      time: "36246",
    },
    {
      gps: {
        latitude: "8.507002155712295",
        longitude: "76.9987936982755",
      },
      humidity: "44",
      temperature: "31.2",
      time: "44206",
    },
    {
      gps: {
        latitude: "8.514561461807341",
        longitude: "77.01956721437521",
      },
      humidity: "43",
      temperature: "31.5",
      time: "51552",
    },
    {
      gps: {
        latitude: "8.50980377376985",
        longitude: "77.02826299537759",
      },
      humidity: "42",
      temperature: "31.3",
      time: "59366",
    },
  ];
  return (
    <>
      <div className="w-full h-full flex flex-col items-center pt-4">
        <h1 className="text-[#00714F] font-extrabold text-[32px] px-auto">
          Historic Location Mapping
        </h1>
        <TrackMap data={data} />
      </div>
    </>
  );
}
