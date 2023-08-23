import Image from "next/image";
import Link from "next/link";
import React from "react";
import Feature1 from "@/assets/Feature1Svg.svg";
import Feature2 from "@/assets/Feature2Svg.svg";
import Feature3 from "@/assets/Feature3Svg.svg";

const Features = () => {
  return (
    <main className="flex flex-col md:lg:flex-row justify-center items-center gap-6 md:lg:gap-10 py-10 md:lg:py-20">
      <section className="flex w-80 h-72 rounded-xl flex-col items-center justify-center ml-4 md:lg:ml-0 shadow-[inset_1px_1px_13px_3px_#e0e0e0]">
        <Image className="py-5" src={Feature1} alt="decentralized icon" width={40} height={40} />
        <h1 className="text-xl font-bold">Decentralized</h1>
        <p className="text-center py-2.5 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor
        </p>
        <Link className="text-purple-500 mt-5" href="/mining">
          Start Mining ➔
        </Link>
      </section>
      <section className="flex w-80 h-72 rounded-xl flex-col items-center justify-center ml-4 md:lg:ml-0 shadow-[inset_1px_1px_13px_3px_#e0e0e0]">
        <Image className="py-5" src={Feature2} alt="mobile icon" width={40} height={40} />
        <h1 className="text-xl font-bold">Mobile First</h1>
        <p className="text-center py-2.5 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor
        </p>
        <Link className="text-purple-500 mt-5" href="/mining">
          Start Mining ➔
        </Link>
      </section>
      <section className="flex w-80 h-72 rounded-xl flex-col items-center justify-center ml-4 md:lg:ml-0 shadow-[inset_1px_1px_13px_3px_#e0e0e0]">
        <Image className="py-5" src={Feature3} alt="planet icon" width={40} height={40} />
        <h1 className="text-xl font-bold">User & Planet-Friendly</h1>
        <p className="text-center py-2.5 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor
        </p>
        <Link className="text-purple-500 mt-5" href="/mining">
          Start Mining ➔
        </Link>
      </section>
    </main>
  );
};

export default Features;
