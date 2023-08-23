import SignupForm from "@/components/SignupForm";
import Image from "next/image";
import React from "react";
import BgSvg from '@/assets/LoginSignupForgotGradient.svg';
import SignupSvg from '@/assets/LoginSignUp.svg'

const SignUp = () => {
  return (
    <main className="flex">

      {/* Left Section */}
      <section className="flex-1 hidden md:lg:flex">
      <Image className="w-[400px] xl:w-[500px]"  src={SignupSvg} alt="Sign up Image" width={500} height={300}/>
      </section>

      {/* Right Section */}
      <section className="flex-1 w-screen md:lg:w-1/2 h-1/2 md:lg:h-2/3 px-8 md:lg:px-24 pt-2 md:lg:pt-5 pb-10 md:lg:pb-24">
        <SignupForm />
      </section>
    </main>
  );
};

export default SignUp;
