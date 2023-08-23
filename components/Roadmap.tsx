import React from "react";

const Roadmap = () => {
  return (
    <main className="flex flex-col py-10 md:lg:py-20 px-5 md:lg:px-32">
      <h1 className="font-bold text-4xl">Roadmap</h1>
      <strong className="pt-5 text-gray-500">
        Roadmap for Decentralized Cloud Storage Solution (3-year Plan)
      </strong>

      <h1 className="text-indigo-600 pt-7 font-bold">Year 1: 2023</h1>
      <ul className="list-disc list-inside py-5 text-gray-500">
        <li className="pb-5">
          <strong>Development and Testing:</strong>
          <p className="text-sm pt-2">
            The first year focuses on further development and rigorous testing
            of the decentralized cloud storage solution. This involves refining
            the core technology, implementing encryption mechanisms, and
            ensuring seamless integration with blockchain and peer-to-peer
            networks.
          </p>
        </li>
        <li className="pb-5">
          <strong>Pilot Deployment:</strong>
          <p className="text-sm pt-2">
            A pilot deployment of the solution is conducted with a select group
            of beta users. This allows for real-world testing and feedback
            gathering, helping to identify any potential issues and areas for
            improvement.
          </p>
        </li>
        <li className="pb-5">
          <strong>Security Audits and Compliance:</strong>
          <p className="text-sm pt-2">
            External security audits are conducted to ensure the solution meets
            industry best practices and complies with relevant data protection
            regulations. Any identified vulnerabilities or compliance gaps are
            addressed promptly to enhance the overall security and
            trustworthiness of the system.
          </p>
        </li>
        <li>
          <strong>Partnership Development:</strong>
          <p className="text-sm pt-2">
            External security audits are conducted to ensure the solution meets
            industry best practices and complies with relevant data protection
            regulations. Any identified vulnerabilities or compliance gaps are
            addressed promptly to enhance the overall security and
            trustworthiness of the system.
          </p>
        </li>
      </ul>

      <h1 className="text-indigo-600 pt-7 font-bold">Year 2: 2024</h1>
      <ul className="list-disc list-inside py-5 text-gray-500">
        <li className="pb-5">
          <strong>Scalability and Performance Enhancements:</strong>
          <p className="text-sm pt-2">
            The second year focuses on scaling the solution to handle larger
            volumes of data and increasing user demand. Optimization efforts are
            made to improve storage and retrieval speeds, reduce latency, and
            enhance the overall performance of the decentralized cloud storage
            system.
          </p>
        </li>
        <li className="pb-5">
          <strong>Interoperability and Integration:</strong>
          <p className="text-sm pt-2">
            Efforts are made to enhance interoperability between different
            decentralized cloud storage platforms, enabling seamless data
            sharing and collaboration across networks. Integration with existing
            centralized cloud solutions is also prioritized, facilitating hybrid
            storage options and ensuring compatibility for users transitioning
            from traditional storage models.
          </p>
        </li>
        <li className="pb-5">
          <strong>User Experience Improvements:</strong>
          <p className="text-sm pt-2">
            User feedback from the pilot deployment and ongoing user research is
            used to enhance the user experience. User-friendly interfaces,
            intuitive applications, and streamlined data management capabilities
            are developed to make the solution accessible to users of varying
            technical backgrounds.
          </p>
        </li>
        <li>
          <strong>Market Expansion:</strong>
          <p className="text-sm pt-2">
            Strategic marketing initiatives are launched to raise awareness
            about the benefits of decentralized cloud storage. Targeted
            campaigns are conducted to reach specific industries and user
            segments, showcasing use cases and highlighting the competitive
            advantages of the solution.
          </p>
        </li>
      </ul>

      <h1 className="text-indigo-600 pt-7 font-bold">Year 3: 2025</h1>
      <ul className="list-disc list-inside py-5 text-gray-500">
        <li className="pb-5">
          <strong>Community-Driven Development:</strong>
          <p className="text-sm pt-2">
            The third year emphasizes community participation and open-source
            development. The {`solution's`} codebase is made available for public
            contributions, fostering innovation and collaboration. Community
            feedback is actively sought and incorporated into the development
            process to refine features, address emerging challenges, and ensure
            the solution remains aligned with user needs.
          </p>
        </li>
        <li className="pb-5">
          <strong>Regulatory Compliance:</strong>
          <p className="text-sm pt-2">
            Continuous efforts are made to stay up-to-date with evolving data
            protection regulations and compliance requirements. The solution is
            adjusted as needed to ensure ongoing adherence to privacy and
            security standards, giving users confidence in the {`solution's`}
            compliance capabilities.
          </p>
        </li>
        <li className="pb-5">
          <strong>Partnerships and Integration Expansion:</strong>
          <p className="text-sm pt-2">
            Building on the partnerships established in previous years, efforts
            are made to expand collaborations with industry players and
            integrate the decentralized cloud storage solution into existing
            ecosystems. This enables seamless data exchange and strengthens the
            {`solution's`} market position.
          </p>
        </li>
        <li>
          <strong>Continuous Improvement and Innovation:</strong>
          <p className="text-sm pt-2">
            Ongoing research and development efforts are undertaken to explore
            new technologies, improve performance, and introduce innovative
            features. This includes exploring advancements in encryption, data
            deduplication, and data recovery mechanisms to further enhance the
            {`solution's`} capabilities.
          </p>
        </li>
      </ul>

      <section className="pt-5">
        <span className="text-primary">
          By following this roadmap, the decentralized cloud storage solution
          can achieve significant growth, adoption, and maturity over the course
          of three years. Continuous collaboration, user-centric enhancements,
          and market expansion efforts will position the solution as a trusted
          and competitive alternative to traditional centralized cloud storage
          models.
        </span>
      </section>
    </main>
  );
};

export default Roadmap;
