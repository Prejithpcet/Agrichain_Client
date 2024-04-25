// Your main application router (e.g., index.js or a top-level router file)
//import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";

import Main from "./Main.jsx"; // Import the Main component
import App from "../App.jsx";

function MainRouter() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default MainRouter;
