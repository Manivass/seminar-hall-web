import React from "react";
import NavBar from "./NavBar";

const Body = () => {
  return (
    <div>
      <NavBar />
      <div className="flex w-full flex-col lg:flex-row my-5 bg-gray-100 ">
        <div className="card   grid h-138 grow place-items-center">
          <div className=" ">
            <ul className="flex flex-col">
              <li className="rounded-lg">
                <select defaultValue="Pick a color" className="select">
                  <option disabled={false}>Choose a location</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </li>
              <li className="text-3xl font-bold mt-8">
                <h2>BOOK SEMINAR HALLS.</h2>
                <h2>HOST EVENTS.</h2>
                <h2> MANAGE BOOKINGS EASILY.</h2>
              </li>
              <li className="text-lg text-green-700 mt-2">
                <p>
                  Find and reserve seminar halls for meetings,<br></br>{" "}
                  workshops, conferences, and events near you.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="card  grid h-138 grow place-items-center">
          <figure className="hover-gallery w-120 h-120 ">
            <img src="https://cdn.pixabay.com/photo/2016/07/20/22/16/market-hall-1531434_1280.jpg" />
            <img src="https://www.itctech.com.cn/Public/upload/2021-09-10/1631256716.9371_wm_1232.jpg" />
            <img src="https://www.designmania.gr/wp-content/uploads/2022/09/Seminar-Hall-04.jpg" />
            <img src="https://img.freepik.com/premium-photo/3d-rendering-luxury-seminar-meeting-banquet-hall-room_974729-2313.jpg" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Body;
