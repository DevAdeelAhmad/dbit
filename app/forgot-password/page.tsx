import ForgotForm from "@/components/ForgotForm";
import Image from "next/image";
import React from "react";
import ForgotImg from '@/assets/ForgotPassword.svg'
import BgSvg from '@/assets/LoginSignupForgotGradient.svg';


const ForgotPassword = () => {
  return (
    <main className="flex">
      {/* Left Section */}
      <section className="flex-1 w-1/2 hidden md:lg:flex">
        <Image src={ForgotImg} alt="Forgot Password Image" width={300} height={300}/>
      </section>

      {/* Right Section */}
      <section className="flex-1 w-screen md:lg:w-1/2 h-3/4 md:lg:h-3/4 px-8 md:lg:px-24 pt-10 md:lg:pt-10 pb-16 md:lg:pb-20">
        <ForgotForm/>
      </section>
    </main>
  );
};

export default ForgotPassword;
