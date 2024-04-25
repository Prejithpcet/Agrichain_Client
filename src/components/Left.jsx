import { useNavigate } from "react-router-dom";
import { v1, v2, v3, v4, v5, Leaf } from "../assets";
export default function Left() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="bg-white h-[100%] px-5 py-4 flex flex-col items-center">
        <div className="flex gap-2">
          <img src={Leaf} alt="Leaf" className="w-[32px]" />
          <span className="text-[#00714F] text-[32px] font-bold">
            Agrichain
          </span>
        </div>
        <div className="mt-12 flex flex-col gap-6">
          <div
            className="flex gap-2 text-slate-600 bg-slate-100 px-8 py-2 rounded-md hover:bg-slate-300 cursor-pointer"
            onClick={() => handleNavigation("/dashboard")}
          >
            <img src={v2} alt="V2" />
            <span>Add Product</span>
          </div>
          <div
            className="flex gap-3 text-slate-600 bg-slate-100 px-8 py-2 rounded-md hover:bg-slate-300 cursor-pointer"
            onClick={() => handleNavigation("/dashboard/intermediate")}
          >
            <img src={v3} alt="V3" />
            <span>Add Stage</span>
          </div>
          <div
            className="flex gap-3 text-slate-600 bg-slate-100 px-8 py-2 rounded-md  hover:bg-slate-300 cursor-pointer"
            onClick={() => handleNavigation("/dashboard/product-history")}
          >
            <img src={v1} alt="V1" />
            <span>Product History</span>
          </div>
          <div
            className="flex gap-3 text-slate-600 bg-slate-100 px-8 py-2 rounded-md  hover:bg-slate-300 cursor-pointer"
            onClick={() => handleNavigation("/dashboard/scan")}
          >
            <img src={v4} alt="V4" />
            <span>Scan</span>
          </div>
          <div
            className="flex gap-3 text-slate-600 bg-slate-100 px-8 py-2 rounded-md  hover:bg-slate-300 cursor-pointer"
            onClick={() => handleNavigation("/dashboard/logout")}
          >
            <img src={v5} alt="V5" />
            <span>Track</span>
          </div>
        </div>
      </div>
    </>
  );
}
