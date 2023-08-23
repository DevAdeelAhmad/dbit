import LoginForm from "@/components/LoginForm";
import LoginSvg from "@/assets/LoginSignUp.svg";
import BgSvg from '@/assets/LoginSignupForgotGradient.svg';
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <main className="loginpagebg flex">
      {/* Left Section */}
      <section className="flex-1 hidden md:lg:xl:flex">
        <Image className="w-[400px] xl:w-[500px]" src={LoginSvg} alt="Login in Image" width={400} height={300}/>
      </section>

      {/* Right Section */}
      <section className="flex-1 w-screen md:lg:w-1/2 h-1/2 md:lg:h-2/3 px-8 md:lg:px-24 pt-2 md:lg:pt-5 pb-10 md:lg:pb-24">
        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
