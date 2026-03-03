import { PiUserCircleDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import CreateHall from "./CreateHall";
import { useSelector } from "react-redux";
const NavBar = () => {
  const isUserLogin = useSelector((store) => store.user);
  console.log(isUserLogin);

  return (
    <div className="">
      <div className="navbar  bg-base-100 shadow-sm h-20 px-5 py-2 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns=""
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="hover:-translate-y-0.5 hover:shadow-sm text-xl cursor-pointer"
          >
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.DPb2s6XedEACYmw58wFhwgHaEK?pid=Api&P=0&h=180"
              className="w-35 my-2 "
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                to="/createhall"
                className="p-2 border bg-pink-500 text-white"
              >
                Create Hall
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          {isUserLogin ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    className="w-full"
                    src={isUserLogin?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <button className="cursor-pointer">
              <Link to="/login" className="w-auto rounded-full flex gap-2">
                <img
                  alt="Tailwind CSS Navbar component"
                  className="w-9 h-9"
                  src="https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile-thumbnail.png"
                />
                <span className="text-xl  text-gray-400 my-1">
                  Login/SignUp
                </span>
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
