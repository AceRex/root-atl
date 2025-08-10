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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <Sheet>
      <header className="bg-white border-b shadow-sm">
        <div className="w-full bg-[#B69B64] hidden md:block">
          <div className="max-w-[1500px] mx-auto p-2">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <PhoneIcon size={15} weight="fill" color="#251F0E" />
                <p className="text-xs font-medium text-[#251F0E]">
                  +1 2345 56768
                </p>
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
          </div>
        </div>
        <Container className="py-3 min-h-[84px] items-center justify-between">
          {/* Logo */}
          <Link
            href={"/"}
            className="flex justify-between items-center gap-6 w-full md:w-[60%]"
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
            <Link href="/allproducts" className="hover:text-[#B69B64]">
              <p className="font-semibold text-sm flex flex-row items-center gap-2">
                Products <ChevronDown size={20} />
              </p>
            </Link>
            <li className="font-semibold text-sm flex flex-row items-center gap-2">
              <Link href="/signup" className=" text-[#B69B64]">
                Sign up
              </Link>
            </li>
            <SheetTrigger>
              <ShoppingCartSimpleIcon size={20} />
            </SheetTrigger>
            <SheetContent className="!w-[500px] !max-w-[500px] sm:!w-[600px] sm:!max-w-[600px] p-4">
              <SheetHeader>
                <SheetTitle className="flex flex-row items-center gap-3">
                  <p className="text-xl">My Cart</p>
                  <div className="rounded-full text-lg text-white p-2 w-[30px] h-[30px] bg-[#B69B64] flex items-center justify-center">
                    0
                  </div>
                </SheetTitle>
              </SheetHeader>
              <SheetDescription className="text-center text-neutral-500 flex flex-col items-center justify-center h-[300px]">
                Your cart is empty. Start shopping to add items.
              </SheetDescription>
              <SheetFooter>
                <div className="flex flex-row items-center justify-between my-3 py-5 border-t border-b border-neutral-300">
                  <p className="text-lg text-neutral-400">Subtotal:</p>
                  <p className="text-lg">$0.00</p>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="bg-[#B69B64] flex-grow font-semibold border-0 text-sm text-white py-6"
                >
                  Checkout
                </Button>
              </SheetFooter>
            </SheetContent>
          </div>
        </Container>
      </header>
    </Sheet>
  );
}
