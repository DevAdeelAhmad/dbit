import React from "react";
import Logo from "./ui/Logo";

const SignupForm = () => {
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

      {/* Password */}
      <div className="mb-3">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="•••••••••"
          required
        />
      </div>

      {/* Confirm Pass */}
      <div className="mb-3">
        <label
          htmlFor="confirm_password"
          className="block mb-2 text-sm font-medium"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="•••••••••"
          required
        />
      </div>

      {/* Refferal */}
      <div className="mb-3">
        <label
          htmlFor="refferal"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Add a Referal Code
        </label>
        <input
          type="text"
          id="refferal"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Country */}
      <div className="mb-3">
        <label
          htmlFor="country"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="United States"
        />
      </div>

      <div className="py-3">
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-buttonPrimary to-buttonSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-28 px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
