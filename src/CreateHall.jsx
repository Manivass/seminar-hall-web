import React from "react";
import NavBar from "./NavBar";
import SeminarHallCards from "./SeminarHallCards";

const CreateHall = () => {
  return (
    <div>
      <NavBar />
      <div
        className="hero h-175"
        style={{
          backgroundImage:
            "url(https://ghar360.com/blogs/wp-content/uploads/sh4.jpg)",
        }}
      >
        <div className="hero rounded-lg w-2/3 p-4 bg-gray-200/40">
          <div className="hero-content flex-col lg:flex-row-reverse gap-4">
            <div className="card bg-base-100 w-130 h-auto  shadow-lg shadow-gray-200">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <ul className="flex justify-between">
                  <li className="card-title">Hall Name</li>
                  <li className="bg-green-400 p-2 rounded-lg">⭐4.5(22)</li>
                </ul>
                <p>Capacity : 100</p>
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">hall Name</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="hall Name"
                  />
                  <label className="label">Capacity</label>
                  <input
                    type="Capacity"
                    className="input"
                    placeholder="Capacity"
                  />
                  <label className="label">PhotoURL</label>
                  <input
                    type="Capacity"
                    className="input"
                    placeholder="Enter the Photo URL"
                  />
                  <label className="label">Facilities</label>
                  <textarea
                    className="textarea"
                    placeholder="Enter the facilities"
                  ></textarea>

                  <label className="label">status</label>
                  <select
                    defaultValue="Pick a Runtime"
                    className="select select-success"
                  >
                    <option disabled={true}>Choose status</option>
                    <option>active</option>
                    <option>maintenance</option>
                  </select>
                  <button className="btn btn-success mt-4">Create Hall</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHall;
