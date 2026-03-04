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
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
