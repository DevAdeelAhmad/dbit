import Advantages from "@/components/Advantages";
import HowItWorksGuideline from "@/components/HowItWorksGuideline";
import Introduction from "@/components/Introduction";
import Roadmap from "@/components/Roadmap";
import React from "react";

const Guidelines = () => {
  return (
    <>
      <main className="spiralbg">
        <Introduction />
        <HowItWorksGuideline />
        <Advantages />
        <Roadmap />
      </main>
    </>
  );
};

export default Guidelines;
