import Link from "next/link";
import React from "react";
import Logo from "./ui/Logo";

const ForgotForm = () => {
  return (
    <form className="flex flex-col">
      {/* Logo */}
      <div className="mb-10 hidden md:lg:flex">
        <Logo />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="john.doe@company.com"
          required
        />
      </div>

      {/* Back to Sign In */}
      <div className="flex md:lg:items-start gap-4 mb-3">
        <Link className="text-gray-400 text-sm text-right" href="/signup">
          Back to Sign In?
        </Link>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center">
        <Link href="/login">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-buttonPrimary to-buttonSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 px-5 py-2.5 text-center"
          >
            Submit Email
          </button>
        </Link>
      </div>
    </form>
  );
};

export default ForgotForm;
