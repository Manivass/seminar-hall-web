import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addBookingHall } from "../store/bookingSlice";

const BookingSection = () => {
  const { hallId } = useParams();
  const dispatch = useDispatch();
  const hallDetails = useSelector((store) => store.booking);
  const [iserr, setErr] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showErr, setShowErr] = useState(false);

  const handleBooking = async () => {
    try {
      await axios.post(
        BASE_URL + `/user/Hall-booking/${hallId}`,
        { date, startTime, endTime },
        { withCredentials: true },
      );
      setShowErr(true);
      setTimeout(() => {
        setShowErr(false);
      }, 3000);
    } catch (err) {
      setErr(err?.response?.data?.message);

      setDate("");
      setStartTime("");
      setEndTime("");
    }
  };

  const getHall = async () => {
    try {
      const res = await axios.post(
        BASE_URL + `/hall/${hallId}`,
        { hallId },
        { withCredentials: true },
      );
      dispatch(addBookingHall(res?.data?.data));
    } catch (err) {
      console.log(err?.resposne?.data?.message);
    }
  };
  useEffect(() => {
    getHall();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="hero bg-base-200 min-h-screen flex flex-col">
        {showErr && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Slot created successfully .It is on spliting state!</span>
          </div>
        )}
        <div className="hero-content flex-col lg:flex-row  h-screen ">
          <div className="card bg-base-100 w-full max-w-2xl h-4/5 shrink-0 shadow-2xl">
            <img
              src={hallDetails?.photoURL}
              className="w-full h-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className="text-xl font-semibold">
                {hallDetails?.hallName} - Booking Section
              </h2>
              <fieldset className="fieldset">
                <label className="label">Date</label>
                <input
                  type="date"
                  className="input"
                  placeholder="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <label className="label">Start time</label>
                <input
                  type="time"
                  className="input"
                  placeholder="Enter Start time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
                <label className="label">End time</label>
                <input
                  type="time"
                  className="input"
                  placeholder="Enter Start time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
                <div>
                  <a className="text-red-600 text-md">{iserr}</a>
                </div>
                <button
                  onClick={handleBooking}
                  className="btn btn-success mt-4"
                >
                  Book Now
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
