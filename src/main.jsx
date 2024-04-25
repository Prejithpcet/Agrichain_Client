import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";
import "./styles/globals.css";
import "./index.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "sepolia";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <ThirdwebProvider
      clientId={"111853021d673c3cb0ed7925f7cced66"}
      activeChain={activeChain}
    >
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </ThirdwebProvider>
  </Router>
);
