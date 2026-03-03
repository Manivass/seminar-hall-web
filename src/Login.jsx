import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./utils/Constant";
import { useDispatch } from "react-redux";
import { addUser } from "./store/userSlice";

const Login = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [iserr, setErr] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signUp",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );

      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (err) {
      setErr(err?.response?.data?.message);
    }
  };
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (err) {
      setErr(err);
    }
  };
  return (
    <div className="w-screen mx-auto h-screen flex items-center rounded-2xl ">
      <div
        className="hero h-screen  relative"
        style={{
          backgroundImage:
            "url(https://ghar360.com/blogs/wp-content/uploads/sh1.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content flex-col lg:flex-row-reverse px-4  w-3/5">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">
              {isSignUp ? "SignUp now" : "Login now"}!
            </h1>
            <p className="py-6">
              Book seminar halls easily for meetings, workshops, and events.
              Manage your reservations and track booking status in one place.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body ">
              <fieldset className="fieldset">
                {isSignUp && (
                  <div>
                    <label className="label ">First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="input my-2"
                      placeholder="First Name"
                    />
                    <label className="label my-1">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="input"
                      placeholder="Last Name"
                    />{" "}
                  </div>
                )}

                <label className="label">Email</label>
                <input
                  type="email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="Password"
                />
                <p>{iserr}</p>
                <button
                  onClick={isSignUp ? handleSignUp : handleLogin}
                  className="btn btn-neutral mt-4"
                >
                  {isSignUp ? "SignUp" : "Login"}
                </button>

                <p
                  onClick={() => {
                    setSignUp(!isSignUp);
                  }}
                  className="text-md font-semibold underline cursor-pointer"
                >
                  {isSignUp
                    ? "Already have account ? Login"
                    : "didn't have account ?signUp"}
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
