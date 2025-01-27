// Navbar.tsx
'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);

  // Navigation items
  const navigation = [
    { title: "Team", path: "/mentors" },
    { title: "About", path: "/about" },
    { title: "Resources", path: "/" },
    { title: "Mentors", path: "/mentors" },
    { title: "Events", path: "/" },
    { title: "Community", path: "" },
    { title: "Contact", path: "/" },
  ];

  return (
    <nav className="relative items-center pt-5  px-4 mx-auto w-full sm:px-8 lg:flex md:space-x-6">
      <div className="flex justify-between">
        <a href="/">
          <img
            src="/hivedark.svg"
            width={150}
            height={70}
            alt="Hive Resource Hub"
          />
        </a>
        <button
          className="text-gray-500 outline-none md:hidden"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
          state
            ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
            : "hidden"
        }`}
      >
        <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
          {navigation.map((item, idx) => (
            <li className="text-gray-500 hover:text-yellow-400" key={idx}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </div>
        <li className="order-2 py-5 md:py-0">
          <button className="inline-flex h-12 items-center justify-center font-geist rounded-3xl border border-gray-800 bg-white px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 ">
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
