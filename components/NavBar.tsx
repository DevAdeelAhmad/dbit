"use client";

import React from "react";
import "flowbite";
import Link from "next/link";
import Logo from "./ui/Logo";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentRoute = usePathname();
  const linkStyle =
    'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0';
  const activeStyle = linkStyle + ' text-purple-600 underline ';
  const nonActiveStyle = linkStyle + ' text-black ';
  

  return (
    <>
      <nav className="bg-transparent w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex flex-1 items-start justify-start">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="flex flex-1 justify-end md:order-2 gap-2">
            <Link className="hidden md:lg:flex" href="/login">
              <button
                className="p-0.5 rounded-md bg-gradient-to-r from-buttonPrimary to-buttonSecondary focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium text-md w-24 text-center"
              >
                <span className="block text-black py-1 font-semibold rounded-md bg-white">
                  Log In
                </span>
              </button>
            </Link>
            <Link className="hidden md:lg:flex" href="/signup">
              <button
                className="p-0.5 rounded-md bg-gradient-to-r from-buttonPrimary to-buttonSecondary focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium text-md w-24 text-center"
              >
                <span className="block text-white py-1 font-semibold rounded-md">
                  Sign Up
                </span>
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="flex-1 items-center justify-around hidden w-full md:flex md:w-auto md:order-1 md:lg:bg-transparent"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <Link
                  href='/mining'
                  className={
                    currentRoute === '/mining' ? activeStyle : nonActiveStyle
                  }
                >
                  Mining
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className={
                    currentRoute === '/guidelines'
                      ? activeStyle
                      : nonActiveStyle
                  }
                >
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
