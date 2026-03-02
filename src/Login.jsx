import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignUp, setSignUp] = useState(true);
  return (
    <div className="w-full mx-auto h-screen flex items-center rounded-2xl ">
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
                      type="email"
                      className="input my-2"
                      placeholder="First Name"
                    />
                    <label className="label my-1">Last Name</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Last Name"
                    />{" "}
                  </div>
                )}

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">
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
          <Link to="/">
            <img
              src="https://playo-website.gumlet.io/playo-website-v2/Hamburger.png"
              className="absolute top-3 right-3 w-8 cursor-pointer bg-white aspect-square rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
