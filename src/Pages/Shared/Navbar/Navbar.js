import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/" className="text-xl font-mono">
          Home
        </Link>
      </li>
      <li>
        <Link to="/reviews" className="text-xl font-mono">
          Reviews
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-xl font-mono">
          About
        </Link>
      </li>
      <li>
        <Link to="/appointment" className="text-xl font-mono">
          Appointment
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-xl font-mono">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/login" className="text-xl font-mono">
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <h1 className="btn btn-ghost normal-case text-2xl font-mono ml-10 md:ml-0 text-secondary">
          Doctor Portal
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex ml-60">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
