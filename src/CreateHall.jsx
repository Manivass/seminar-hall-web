import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "./utils/Constant";
import { useNavigate } from "react-router-dom";

const CreateHall = () => {
  const [hallName, setHallName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [facilites, setFacilites] = useState("");
  const [status, setStatus] = useState("active");
  const [iserr, setErr] = useState("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const handleCreateHall = async () => {
    try {
      await axios.post(
        BASE_URL + "/admin/add-seminar-Hall",
        { hallName, capacity, photoURL, facilites, status },
        { withCredentials: true },
      );
      setTimeout(() => {
        navigate("/");
      }, 2000);
      setShowToast(!showToast);
    } catch (err) {
      setErr(err?.response?.data?.message);
    }
  };
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
                  src={
                    photoURL
                      ? photoURL
                      : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  }
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <ul className="flex justify-between">
                  <li className="card-title">{hallName}</li>
                  <li className="bg-green-400 p-2 rounded-lg">⭐4.5 (22)</li>
                </ul>
                <p>Capacity : {capacity}</p>
                <p className="text-md ">
                  {status == "active" ? "🟢active" : "🧧 maintanence"}
                </p>
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">hall Name</label>
                  <input
                    type="text"
                    value={hallName}
                    onChange={(e) => setHallName(e.target.value)}
                    className="input"
                    placeholder="hall Name"
                  />
                  <label className="label">Capacity</label>
                  <input
                    type="Capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="input"
                    placeholder="Capacity"
                  />
                  <label className="label">PhotoURL</label>
                  <input
                    type="Capacity"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="input"
                    placeholder="Enter the Photo URL"
                  />
                  <label className="label">Facilities</label>
                  <textarea
                    className="textarea"
                    value={facilites}
                    onChange={(e) => setFacilites(e.target.value)}
                    placeholder="Enter the facilities"
                  ></textarea>

                  <label className="label">status</label>
                  <select
                    defaultValue="Pick a Runtime"
                    className="select select-success"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option disabled={true}>Choose status</option>
                    <option>active</option>
                    <option>maintenance</option>
                  </select>
                  <p>{iserr}</p>
                  <button
                    onClick={handleCreateHall}
                    className="btn btn-success mt-4"
                  >
                    Create Hall
                  </button>
                </fieldset>
              </div>
            </div>
            {showToast && (
              <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                  <span>Hall successfully created.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHall;
