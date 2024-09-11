import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-white/20 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="" className="w-10" />
              <span>IEEE SB of Jeppiaar University</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
              <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/team">Our Team</a>
                </li>
                <li>
                  <a href="/membership">Membership</a>
                </li>
                <li>
                  <a href="https://photos.app.goo.gl/HXfJkfpWKUSnF8vA6">Gallery</a>
                </li>
              </ul>
            </div>
            <div>
              <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
