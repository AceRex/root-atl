"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  ShoppingCartSimpleIcon,
} from "@phosphor-icons/react";
import Logo from "@/assets/logo.png";
import Container from "../../components/container";
import { AlignJustify, ChevronDown } from "lucide-react";
import { Input } from "../../components/ui/input";
import Link from "next/link";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <Container className="bg-[#B69B64] hidden md:block">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-1">
            <PhoneIcon size={15} weight="fill" color="#251F0E" />
            <p className="text-xs font-medium text-[#251F0E]">+1 2345 56768</p>
          </div>
          <div className="flex flex-row items-center font-medium text-xs gap-8  text-[#251F0E]">
            <p className="font-semibold">Get 50% Off on Selected Items</p> |
            <p> Shop Now</p>
          </div>
          <div className="">
            <p className="font-medium text-xs flex flex-row items-center gap-2">
              EN <ChevronDown size={20} />
            </p>
          </div>
        </div>
      </Container>
      <Container className="py-3 min-h-[84px] flex flex-row items-center justify-between">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex justify-between items-center gap-2 w-full md:w-[60%]"
        >
          <Image src={Logo} alt="Roots ATL Logo" width={150} height={150} />
          <div className="px-2 hidden md:flex items-center  flex-row gap-2 border border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm w-full">
            <MagnifyingGlassIcon size={25} color="#667185" />
            <Input
              type="text"
              className="border-none outline-none ring-0 focus:outline-none focus:border-none focus:ring-0"
              placeholder="Search here 60+products..."
            />
          </div>
          <AlignJustify className="md:hidden block" />
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex flex-end justify-end items-center gap-6">
          <p className="font-semibold text-sm flex flex-row items-center gap-2">
            Products <ChevronDown size={20} />
          </p>
          <li className="font-semibold text-sm flex flex-row items-center gap-2">
            <Link href="/signup" className=" text-[#B69B64]">
              Sign up
            </Link>
          </li>
          <ShoppingCartSimpleIcon size={20} />
        </div>
      </Container>
    </header>
  );
}
