import Image from "next/image";
import React from "react";
import IntroSvg from '@/assets/IntroGuide.svg'

const Introduction = () => {
  return (
    <main className="flex flex-col md:lg:flex-row py-10 md:lg:py-20">
      <section className="flex-[1.20] px-5 md:lg:px-32">
        <h1 className="font-bold  text-4xl">Introduction to DBIT</h1>
        <p className="py-5 text-gray-500">
          Traditional cloud storage systems, like Amazon S3, Google Cloud
          Storage, and Microsoft Azure Blob Storage, operate on centralized
          architectures. These systems are managed by single entities, which can
          become single points of failure and potential targets for data
          breaches. Decentralised cloud storage offers an alternative,
          leveraging peer-to-peer networks to distribute data across multiple
          nodes. Which can be faster safer and more cost effective.
        </p>
      </section>
      <section className="flex flex-1 items-center justify-center">
        <Image src={IntroSvg} alt="Intro Img" width={300} height={300}/>
      </section>
    </main>
  );
};

export default Introduction;
