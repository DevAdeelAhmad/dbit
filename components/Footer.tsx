import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="flex flex-col md:lg:flex-row w-full max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 p-4 sm:p-6 md:p-12 gap-8 md:lg:gap-0">
        <div className="footer-left flex-1 flex flex-col gap-4">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Tortor ut fermentum elit
            faucibus facilisis. Dolor risus quam odio.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Tortor ut fermentum elit
            faucibus facilisis. Dolor risus quam odio.
          </p>

          <input
            type="email"
            className="bg-black border border-gray-300 text-white text-md rounded-lg focus:ring-emerald-500 block w-72 h-12 p-2.5"
            placeholder="Email Address"
          />
          <p>© 2023 DPIT Mining, Decentralized Platform</p>
        </div>
        <div className="footer-center flex-1 flex flex-col items-center">
          <ul className="flex flex-row md:lg:flex-col flex-wrap items-center text-center md:lg:text-left text-sm text-gray-400 font-medium gap-4">
            <li>
              <Link href="/mining" className="hover:underline text-white">
                Start Mining Now
              </Link>
            </li>
            <li>
              <Link href="/mining">Mining</Link>
            </li>
            <li>
              <Link href="/guidelines">Guidelines</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/forgot-password">Forgot Password</Link>
            </li>
          </ul>
        </div>
        <div className="footer-right flex-1 flex flex-col items-center">
          <ul className="flex flex-col items-center text-left text-sm text-gray-400 font-medium gap-4">
            <li>
              <Link href="#" className="hover:underline text-white">
                Privacy Policy and Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#">DBIT Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">DBIT Biometrics Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">DBIT Financial Privacy Notice</Link>
            </li>
            <li>
              <Link href="#">DBIT Terms of Service</Link>
            </li>
            <li>
              <Link href="#">DBIT Trade Desk Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
