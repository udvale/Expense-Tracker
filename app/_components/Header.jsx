"use client";
import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useUser, UserButton} from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const {user, isSignedIn} = useUser();
  return (
    <div className=" bg-customBg p-5 flex justify-between items-center  shadow-lg">
      <Image src={"./logo1.svg"} alt={"logo"} width={45} height={50} />
      {isSignedIn ? (
        <>
          <div className="flex items-center space-x-10 ml-auto">
            <Link href="/dashboard">
              <span className="text-white hover:text-gray-300 mt-5">
                My Dashboard
              </span>
            </Link>
            <UserButton />
          </div>
        </>
      ) : (
        <Link href={"/sign-in"}>
          <Button>Sign Up</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
