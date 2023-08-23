"use client"
import React, { useState } from "react";
import StartMiningComp from "@/components/StartMiningComp";
import MiningComp from "@/components/MiningComp";

const Mining = () => {
  const [activeComponent, setActiveComponent] = useState<"start" | "mining">(
    "start"
  );

  const handleStartMining = () => {
    setActiveComponent("mining");
  };

  return (
    <main>
      {activeComponent === "start" && <StartMiningComp onStartMining={handleStartMining} />}
      {activeComponent === "mining" && <MiningComp />}
    </main>
  );
};

export default Mining;
