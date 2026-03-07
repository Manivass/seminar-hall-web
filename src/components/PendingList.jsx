import { useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addPendingList } from "../store/pendingSlice";
import Login from "./Login";

const PendingList = () => {
  const dispatch = useDispatch();
  const pendingDetails = useSelector((store) => store?.pending);

  const handleButton = async (status, id) => {
    try {
      await axios.patch(BASE_URL + "/admin/booking/" + status + "/" + id);
      console.log(id);
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };

  const getPendingList = async () => {
    try {
      const res = await axios.get(BASE_URL + "/admin/pending-details", {
        withCredentials: true,
      });
      dispatch(addPendingList(res?.data?.data));
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    getPendingList();
  }, []);
  if (pendingDetails?.length == 0) return <h2>No Pending Details</h2>;
  return (
    <div>
      <NavBar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.dsc.du.ac.in/wp-content/uploads/2022/03/seminar-hall-98-scaled.jpg)",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="w-3/7 mx-auto border ">
          <ul className="list bg-gray-50  shadow-md rounded-box">
            <li className="p-4 pb-2 text-xl opacity-100 tracking-wide font-semibold">
              Pending List
            </li>
            {pendingDetails &&
              pendingDetails?.map((list) => (
                <li key={list._id} className="list-row">
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src={list?.userId?.photoURL}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">
                      {list?.userId?.firstName + " " + list?.userId?.lastName}
                    </div>
                    <div className="text-md uppercase font-semibold text-blue-600 opacity-80">
                      {list?.hallId?.hallName +
                        " (" +
                        list?.startTime?.slice(11, 16) +
                        " - " +
                        list?.endTime?.slice(11, 16) +
                        " )"}
                    </div>
                  </div>
                  <button
                    onClick={() => handleButton("accepted", list._id)}
                    className="border text-md px-3 py-2 btn btn-success pr-4"
                  >
                    accept
                  </button>
                  <button
                    onClick={() => handleButton("rejected", list._id)}
                    className="border text-md px-3 py-2 btn btn-error"
                  >
                    reject
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PendingList;
