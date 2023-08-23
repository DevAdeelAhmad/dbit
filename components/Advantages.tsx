import React from "react";
import Image from "next/image";
import AdvantageImg from '@/assets/Advantages.svg'

const Advantages = () => {
  return (
    <main className="flex flex-col md:lg:flex-row py-10 md:lg:py-20">
      <section className="flex-[1.20] px-5 md:lg:px-32">
        <h1 className="font-bold  text-4xl">Advantages</h1>
        <ul className="py-5 text-gray-500">
          <li>
            Security: Data is encrypted, and since {`it's`} spread across multiple
            nodes, {`it's`} harder for malicious actors to access complete files.
          </li>
          <li>
            <strong>Resilience:</strong> The decentralized nature ensures that data remains
            accessible even if some nodes fail or leave the network.
          </li>
          <li>
            <strong>Cost-Effective:</strong> By leveraging unused storage space from
            participants, costs can be reduced compared to traditional cloud
            storage.
          </li>
        </ul>
      </section>
      <section className="flex-1 flex items-center justify-center md:lg:flex-[0.80]">
        <Image src={AdvantageImg} alt="Advantages Image" width={250} height={300}/>
      </section>
    </main>
  );
};

export default Advantages;
