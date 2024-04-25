import React from "react";

export default function UserCard({ user, onVerify }) {
  return (
    <div className="flex justify-between items-center w-[800px]">
      <div>
        <p className="text-[16px] font-bold text-[#00714F]">{user.name}</p>
        <p
          className={`text-[16px] font-medium ${
            user.isVerified ? "text-green-500" : "text-red-500"
          }`}
        >
          {user.isVerified ? "Verified" : "Not Verified"}
        </p>
        <p className="text-[16px] font-medium text-slate-400">{user.address}</p>
      </div>
      {!user.isVerified && (
        <button
          className="bg-[#00714F] text-white px-4 py-2"
          onClick={() => onVerify(user.address)}
        >
          Verify
        </button>
      )}
    </div>
  );
}
