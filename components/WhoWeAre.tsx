import Link from "next/link";
import React from "react";
import Image from "next/image";
import WhoImg from "@/assets/WhoHome.svg";

const WhoWeAre = () => {
  return (
    <main className="flex flex-col-reverse md:lg:flex-row py-10 md:lg:py-20">
      <section className="flex-1 px-5 md:lg:px-32">
        <h1 className="font-bold text-4xl">Who we are</h1>
        <p className="py-5 text-gray-500">
          Traditional cloud storage systems, like Amazon S3, Google Cloud
          Storage, and Microsoft Azure Blob Storage, operate on centralized
          architectures. These systems are managed by single entities, which can
          become single points of failure and potential targets for data
          breaches. Decentralised cloud storage offers an alternative,
          leveraging peer-to-peer networks to distribute data across multiple
          nodes. Which can be faster safer and more cost effective.
        </p>
        <Link href="/guidelines">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-buttonPrimary to-buttonSecondary focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium rounded-lg text-sm w-36 px-5 py-2.5 text-center"
          >
            Read More
          </button>
        </Link>
      </section>
      <section className="flex-1 flex items-center justify-center">
        <Image src={WhoImg} alt="Who we are Image" width={300} height={300} />
      </section>
    </main>
  );
};

export default WhoWeAre;
