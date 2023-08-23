import React from "react";
import Image from 'next/image'
import HowSvg from '@/assets/HowGuideline.svg'

const HowItWorksGuideline = () => {
  return (
    <main className="flex flex-col-reverse md:lg:flex-row py-2 md:lg:py-20">
      <section className="flex justify-center items-center flex-1 md:lg:flex-[0.80]">
      <Image className="pb-10 md:lg:xl:py-0" src={HowSvg} width={300} height={300} alt="How It Works Img"/>
      </section>
      <section className="flex-1 md:lg:flex-[1.20] px-5 md:lg:px-32">
        <h1 className="font-bold  text-4xl">How It Works</h1>
        <ul className="py-5 text-gray-500">
          <li>
            You offer your device (node) to the system and show you have proof
            of storage, for which DBIT tokens are distributed to your account.
          </li>
          <li>
            Once the network is built we will use the following to make data
            secure on the cloud network.
          </li>
          <li>
            <strong>Data Sharding:</strong> Files are broken into smaller
            pieces, or shards. Each shard is encrypted for security.
          </li>
          <li>
            <strong>Redundancy:</strong> Multiple copies of each shard are
            stored across the network to ensure data availability and resilience
            against node failures.
          </li>
          <li>
            <strong>Peer-to-Peer Network:</strong> Nodes (participants) in the
            network store shards and serve them upon request. They can earn
            rewards for providing storage space and bandwidth.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default HowItWorksGuideline;
