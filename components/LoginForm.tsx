import Link from "next/link";
import React from "react";
import Logo from "./ui/Logo";

const LoginForm = () => {
  return (
    <form className="flex flex-col">
      {/* Logo */}
      <div className="mb-10 hidden md:lg:flex">
        <Logo />
      </div>

      {/* Email */}
      <div className="mb-6">
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
      <div className="mb-6">
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
      <div className="flex md:lg:items-start flex-col gap-4 md:lg:flex-row justify-between mb-6">
        <div>
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            required
          />
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-400"
          >
            Save Email & Password
          </label>
        </div>
        <Link className="text-gray-400 text-right" href="/forgot-password">
          Forgot Password?
        </Link>
      </div>
      <Link
        className="text-blue-600 text-center md:lg:text-right"
        href="/signup"
      >
        Dont have an account? Create Now
      </Link>

      {/* Button */}
      <Link href="/" className="flex items-center justify-center pt-10">
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-buttonPrimary to-buttonSecondary focus:ring-4 focus:outline-none
        focus:ring-blue-300 font-medium rounded-lg text-sm w-28 px-5 py-2.5 text-center"
        >
          Sign in
        </button>
      </Link>
    </form>
  );
};

export default LoginForm;
