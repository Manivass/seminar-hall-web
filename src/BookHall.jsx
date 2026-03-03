import React, { useEffect } from "react";
import NavBar from "./NavBar";
import SeminarHallCards from "./SeminarHallCards";
import axios from "axios";
import { BASE_URL } from "./utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addHall } from "./store/hallSlice";

const BookHall = () => {
  const dispatch = useDispatch();
  const hallAvailable = useSelector((store) => store?.hall);

  const getHalls = async () => {
    try {
      const res = await axios.get(BASE_URL + "/hallAvailable", {
        withCredentials: true,
      });
      dispatch(addHall(res?.data?.data));
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    getHalls();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="bg-base-200 w-screen min-h-screen px-8 py-8 ">
        <div className="bg-base-100 p-7 rounded-lg">
          <h2 className="font-bold text-2xl text-black font-serif">
            Book Venues
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {hallAvailable &&
              hallAvailable?.map((hall) => {
                return <SeminarHallCards hallDetails={hall} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHall;
