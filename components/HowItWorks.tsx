"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import HowSvg from "@/assets/HowHome.svg"

const HowItWorks = () => {
  return (
    <main className="flex flex-col md:lg:flex-row py-10 md:lg:py-20">
      <section className="flex-1 flex items-center justify-center">
        <Image src={HowSvg} alt="Image for How it Works" width={300} height={300}/>
      </section>
      <section className="flex-1 px-5 md:lg:px-32">
        <h1 className="font-bold text-4xl">How It Works</h1>
        <p className="py-5 bg-white text-gray-500">
          You offer your device (node) to the system and show you have proof of
          storage, for which DBIT tokens are distributed to your account. Once
          the network is built we will use the following to make data secure on
          the cloud network. Data Sharding: Files are broken into smaller
          pieces, or shards. Each shard is encrypted for security Redundancy:
          Multiple copies of each shard are stored across the network to ensure
          data availability and resilience against node failures. Peer-to-Peer
          Network: Nodes (participants) in the network store shards and serve
          them upon request. They can earn rewards for providing storage space
          and bandwidth.
        </p>
        <Link href="/mining">
          <button
            className="m-4 p-0.5 rounded-md bg-gradient-to-r from-buttonPrimary to-buttonSecondary focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium text-md w-36 text-center"
          >
            <span className="block text-black px-4 py-2 font-semibold rounded-md bg-white">
              Get Started
            </span>
          </button>
        </Link>
      </section>
    </main>
  );
};

export default HowItWorks;
