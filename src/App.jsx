import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Left, Loader, Profile, Right, UserCard } from "./components";
import {
  AddProduct,
  ErrorComponent,
  IntermediateStep,
  Login,
  Logout,
  Main,
  MainRouter,
  ProductHistory,
  Scan,
  TrackLocation,
  TrackProduct,
  TrackProduct1,
  TrackTemp,
  VerifyUser,
  Wallet,
} from "./pages";

export default function App() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <Routes>
          <Route path="/" element={<Wallet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
      </main>
    </>
  );
}

function DashboardRoutes() {
  return (
    <div className="flex flex-col h-screen">
      {/* Your existing dashboard structure */}
      <div className="flex bg-slate-100 h-[90%]">
        <div className="basis-1/6">
          <Left />
        </div>
        <div className="basis-4/6">
          <Routes>
            <Route index element={<Main />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="track-product" element={<TrackProduct />} />
            <Route path="track-product1" element={<TrackProduct1 />} />
            <Route path="intermediate" element={<IntermediateStep />} />
            <Route path="product-history" element={<ProductHistory />} />
            <Route path="profile" element={<Profile />} />
            <Route path="verify-user" element={<VerifyUser />} />
            <Route path="logout" element={<Logout />} />
            <Route path="error" element={<ErrorComponent />} />
            <Route path="scan" element={<Scan />} />
            <Route path="temp" element={<TrackTemp />} />
            <Route path="tracklocation" element={<TrackLocation />} />
          </Routes>
        </div>
        <div className="basis-1/6">
          <Right />
        </div>
      </div>
      <Footer />
    </div>
  );
}
