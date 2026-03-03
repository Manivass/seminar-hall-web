import React from "react";
import NavBar from "./NavBar";
import SeminarHallCards from "./SeminarHallCards";

const BookHall = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-base-200 w-screen min-h-screen px-8 py-8 ">
        <div className="bg-base-100 p-7 rounded-lg">
          <h2 className="font-bold text-2xl text-black font-serif">
            Book Venues
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <SeminarHallCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHall;
