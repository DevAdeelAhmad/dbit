import React from "react";
import Link from "next/link";
import StartMineButton from "./ui/StartMineButton";

interface StartMiningCompProps {
  onStartMining: () => void;
}

const StartMiningComp: React.FC<StartMiningCompProps> = ({ onStartMining }) => {
  return (
    <main className="flex justify-center pt-8 pb-20">
      <div className="flex flex-col justify-center items-center py-10 rounded-xl w-11/12 md:w-3/4 lg:w-3/5 gap-10 border-[1.5px] bg-white shadow-[inset_7px_-8px_7px_0px_#dbdbdb]">
        <div className="w-3/4 h-12 border flex justify-center items-center border-gray-400 text-center rounded-lg">
          <p className="text-gray-800 text-lg font-semibold">
            {`LET'S START MINING`}
          </p>
        </div>
        <p className="px-4 md:lg:px-32 lg:md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temposLorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempo
        </p>
        <StartMineButton />
        <Link href="/mining">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-buttonPrimary to-buttonSecondary focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium rounded-lg text-sm w-40 px-5 py-2.5 text-center md:lg:mt-0"
            onClick={onStartMining}
          >
            Start Mining
          </button>
        </Link>
      </div>
    </main>
  );
};

export default StartMiningComp;
