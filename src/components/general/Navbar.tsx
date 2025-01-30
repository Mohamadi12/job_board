import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo.jpg";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ToggleTheme } from "./ToggleTheme";
import { auth, signOut } from "@/app/utils/auth";
import UserDropdown from "./UserDropdown";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={Logo}
          width={40}
          height={40}
          alt="Logo"
          className="rounded-2xl"
        />
        <h1 className="text-3xl font-bold">
          Nana<span className="text-primary">Mohamadi</span>
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <ToggleTheme />
        <Link href="/post-job" className={buttonVariants({ size: "lg" })}>
          Post Job
        </Link>
        {session?.user ? (
          <UserDropdown
            email={session.user.email as string}
            image={session.user.image as string}
            name={session.user.name as string}
          />
        ) : (
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
