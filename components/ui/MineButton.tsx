"use client";
import React, { useState } from "react";

const StartMineButton = () => {
  const [miningStarted, setMiningStarted] = useState(false);

  const toggleMining = () => {
    setMiningStarted(!miningStarted);
  }

  return (
    <>
      <button
        className="m-4 p-0.5 flex items-center justify-center rounded-full border-[3px]
      border-buttonPrimary font-medium text-md w-28 h-28 text-center"
        onClick={toggleMining}
      >
        {miningStarted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 22v-20l18 10-18 10z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default StartMineButton;
