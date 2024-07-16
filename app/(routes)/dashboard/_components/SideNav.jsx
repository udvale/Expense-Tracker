"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {LayoutGrid, Wallet, Coins, Home} from "lucide-react";
import {UserButton} from "@clerk/nextjs";
import {usePathname} from "next/navigation";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: Wallet,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: Coins,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Home",
      icon: Home,
      path: "/",
    },
  ];
  const path = usePathname();
  return (
    <div className="h-screen p-3 shadow-md bg-customBg text-silverCrest">
      <div className="fixed  p-5 flex gap-2 items-center">
        <UserButton />
        <span className="text-lg">Profile</span>
      </div>
      <div className="mt-20">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center
                    font-medium
                    mb-1
                    p-5 cursor-pointer rounded-md
                    hover:text-primary hover:bg-blue-100
                    ${path == menu.path && "text-primary bg-blue-100"}
                    `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
