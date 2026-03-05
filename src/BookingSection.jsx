import { useEffect } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addBookingHall } from "./store/bookingSlice";

const BookingSection = () => {
  const { hallId } = useParams();
  const dispatch = useDispatch();
  const hallDetails = useSelector((store) => store.booking);
  console.log(hallDetails);

  const getHall = async () => {
    try {
      const res = await axios.post(
        BASE_URL + `/hall/${hallId}`,
        { hallId },
        { withCredentials: true },
      );
      dispatch(addBookingHall(res?.data?.data));
    } catch (err) {
      console.log();
      err?.resposne?.data?.message;
    }
  };
  useEffect(() => {
    getHall();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="hero bg-base-200 min-h-screen flex flex-col">
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
                <input type="date" className="input" placeholder="date" />
                <label className="label">Start time</label>
                <input
                  type="time"
                  className="input"
                  placeholder="Enter Start time"
                />
                <label className="label">End time</label>
                <input
                  type="time"
                  className="input"
                  placeholder="Enter Start time"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-success mt-4">Book Now</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
