import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo.jpg";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ToggleTheme } from "./ToggleTheme";
import { auth, signOut } from "@/app/utils/auth";

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
      <div className="flex gap-4 items-center justify-center">
        <ToggleTheme />
        {session ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button>Logout</Button>
          </form>
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
