import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo.jpg";
import LoginForm from "@/components/forms/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6 justify-center items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" className="size-10 rounded-2xl" />
          <h1 className="text-3xl font-bold">
            Nana<span className="text-primary">Mohamadi</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
