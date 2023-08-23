import React from "react";
import MiningData from "./MiningData";
import Link from "next/link";
import StartMineButton from "./ui/StartMineButton";
import MineButton from "./ui/MineButton";
import StartMineTimer from "./StartMineTimer";

const MiningComp = () => {
  return (
    <main className="flex justify-center pt-10 pb-20">
      <div className="flex flex-col justify-center items-center py-10 rounded-xl w-11/12 md:w-3/4 lg:w-3/5 gap-10 bg-white shadow-[inset_7px_7px_18px_0px_#00000024] border border-gray-200">
        <div className="w-3/4 h-12 border border-gray-300 flex justify-center items-center text-center rounded-lg">
          <p className="text-gray-800 text-lg font-semibold">Mining</p>
        </div>
        <StartMineTimer/>
        <MineButton />
        <MiningData />
        <div className="status-link">
          <Link className="text-blue-600" href="#">
            View Your Status
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MiningComp;
