import React from "react";

const SeminarHallCards = ({ hallDetails }) => {
  return (
    <div className="card bg-base-100 w-80 h-auto  shadow-lg shadow-gray-200">
      <figure>
        <img
          src={
            hallDetails?.photoURL
              ? hallDetails?.photoURL
              : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt="hall"
        />
      </figure>
      <div className="card-body">
        <ul className="flex justify-between">
          <li className="card-title">{hallDetails?.hallName}</li>
          <li className="bg-green-400 p-2 rounded-lg">⭐4.5(22)</li>
        </ul>
        <p>Capacity : {hallDetails?.capacity}</p>
        <p className="text-md ">
          {hallDetails?.status == "active" ? "🟢 active" : "🧧 maintanence"}
        </p>
      </div>
    </div>
  );
};

export default SeminarHallCards;
