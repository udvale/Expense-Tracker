"use client";
import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useUser, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import styled from "styled-components";

const HoverMoveImage = styled(Image)`
  transition: transform 0.3s ease-in-out;
  margin-left: -7px;

  &:hover {
    transform: translateX(3px) translateY(-5px);
  }
`;

function Header() {
  const {user, isSignedIn} = useUser();
  return (
    <div className="bg-customBg p-5 flex justify-between items-center shadow-lg">
      <HoverMoveImage
        src={"./budget2.svg"}
        alt={"logo"}
        width={60}
        height={50}
      />
      {isSignedIn ? (
        <div className="flex items-center space-x-10 ml-auto">
          <Link href="/dashboard">
            <span className="text-white hover:text-gray-300 mt-5">
              My Dashboard
            </span>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link href={"/sign-in"}>
          <Button>Sign Up</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
