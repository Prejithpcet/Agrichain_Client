import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const TrackMap = ({ data }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (data.length === 0) return;

    // Initialize map
    const map = L.map("map").setView(
      [data[0].gps.latitude, data[0].gps.longitude],
      6
    );
    mapRef.current = map;

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Create marker icon
    const markerIcon = L.icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

    // Create polyline points
    const polylinePoints = [];

    // Add markers and bind popups
    data.forEach((item, index) => {
      const marker = L.marker(
        [parseFloat(item.gps.latitude), parseFloat(item.gps.longitude)],
        { icon: markerIcon }
      )
        .addTo(map)
        .bindPopup(
          `${item.location} - Temperature: ${item.temperature}°C, Humidity: ${item.humidity}%`
        );

      // Update time on popup open
      marker.on("click", () => {
        marker
          .getPopup()
          .setContent(
            `${item.location} - Temperature: ${item.temperature}°C, Humidity: ${item.humidity}%`
          )
          .update();
      });

      polylinePoints.push([
        parseFloat(item.gps.latitude),
        parseFloat(item.gps.longitude),
      ]);
    });

    // Create a polyline using the points and add it to the map
    const polyline = L.polyline(polylinePoints, { color: "red" }).addTo(map);

    // Fit map to bounds of polyline and markers with animation
    map.flyToBounds(polyline.getBounds(), { duration: 1 });

    // Cleanup function to remove map on component unmount
    return () => {
      map.remove();
    };
  }, [data]);

  return <div id="map" style={{ width: "100%", height: "600px" }}></div>;
};

export default TrackMap;
