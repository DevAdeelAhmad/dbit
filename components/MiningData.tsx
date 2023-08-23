import React from "react";

const MiningData = () => {
  return (
    <section className="mining-page-data flex flex-col lg:flex-row md:flex-row items-center justify-between rounded-lg border border-gray-300 h-96 md:h-36 w-11/12">

      <div className="flex-1 device-data ml-4 text-center font-semibold">
        <span className="text-2xl">5 TB</span>
        <p className="text-blue-500">Hard Drive</p>
      </div>

      <div className="profitability flex-1">
        <h2>Current Profitability</h2>
        <p className="text-gray-500 font-light">
          <span className="font-semibold text-black text-md">0.31265</span>{" "}
          mDBIT/Day
        </p>
      </div>

      <div className="vl hidden lg:block"></div>
      <div className="balance flex-1">
        <h2>Unpaid Balance</h2>
        <p className="text-gray-500 font-light">
          <span className="font-semibold text-black text-md">0,1265</span>{" "}
          mDBIT/Day
        </p>
      </div>

      <div className="vl hidden lg:block"></div>

      <div className="tokens-earned flex-1 mr-4">
        <h2>Total Earned Tokens</h2>
        <p className="text-gray-500 font-light">
          <span className="font-semibold text-black text-md">0,1265</span> mDBIT
        </p>
      </div>

    </section>
  );
};

export default MiningData;
