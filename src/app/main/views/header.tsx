"use client";

import Image from "next/image";
import {
  BellIcon,
  CodeSimpleIcon,
  MagnifyingGlassIcon,
  NotificationIcon,
  PhoneIcon,
  ShoppingCartSimpleIcon,
} from "@phosphor-icons/react";
import Logo from "@/assets/logo.png";
import { AlignJustify, ChevronDown } from "lucide-react";
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
import { usePathname, useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Container from "@/components/container";
import { useAdminAuth } from "@/providers/adminProvider";

export default function Header() {
  const router = useRouter();
  const params = usePathname();
  const isAdmin = params.startsWith("/admin");
  const isAdminLoginPage = params.includes("/admin/login");
  const { user } = useAdminAuth();

  if (isAdminLoginPage) {
    return null;
  }

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div
      className={`fixed ${
        isAdmin ? "h-[5rem]" : "h-[7.5rem]"
      } w-full z-50 bg-white`}
    >
      {isAdmin ? (
        <Popover>
          <header className="h-20 border-b shadow-sm w-full">
            <div className="min-h-full px-12 m-auto grid grid-cols-2 items-center justify-between">
              {/* Logo */}
              <Link
                href={"/admin/dashboard"}
                className="flex justify-between items-center gap-6 w-full"
              >
                <Image
                  src={Logo}
                  alt="Roots ATL Logo"
                  width={150}
                  height={150}
                />
              </Link>

              {/* Center Nav */}
              <div className="hidden md:flex flex-end justify-end items-center gap-6">
                <div className="px-2 hidden md:flex items-center  flex-row gap-2 border border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm max-w-[50%]">
                  <MagnifyingGlassIcon size={25} color="#667185" />
                  <Input
                    type="text"
                    className="border-none outline-none ring-0 focus:outline-none focus:border-none focus:ring-0"
                    placeholder="Search"
                  />
                </div>
                <PopoverTrigger className="relative flex items-center">
                  <BellIcon size={25} />
                  <Badge
                    className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums text-xs absolute -top-2 -right-2 flex items-center justify-center"
                    variant="destructive"
                  >
                    9
                  </Badge>
                </PopoverTrigger>
                <PopoverContent className="mt-5 w-[25rem] mr-10">
                  <>
                    <div className="flex flex-row gap-2 items-center  mb-4">
                      <NotificationIcon
                        weight="duotone"
                        size={25}
                        className="text-[#B69B64]"
                      />
                      <p className="font-semibold text-[#B69B64] text-base">
                        Notifications
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto bg-neutral-50 rounded-lg p-2">
                      <div className="flex flex-row items-center justify-between gap-3 p-4 rounded-lg bg-white border border-[#b69b64] cursor-pointer">
                        <div className="flex w-[98%]">
                          <p className="text-sm">
                            New user registered with the email
                          </p>
                        </div>
                        <div className="w-2 h-2 bg-[#B69B64] rounded-full"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between gap-3 p-4 rounded-lg bg-white cursor-pointer">
                        <div className="flex w-[98%]">
                          <p className="text-sm">
                            New user registered with the email
                          </p>
                        </div>
                        <div className="w-2 h-2 bg-neutral-300 rounded-full"></div>
                      </div>
                    </div>
                  </>
                </PopoverContent>
                <div className="flex flex-row items-center gap-2 cursor-pointer">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>
                      {user?.firstName?.[0]}
                      {user?.lastName?.[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {user?.user_role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Popover>
      ) : (
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
                    <p className="font-semibold">
                      Get 50% Off on Selected Items
                    </p>{" "}
                    |<p> Shop Now</p>
                  </div>
                  <div className="">
                    <p className="font-medium text-xs flex flex-row items-center gap-2">
                      EN <ChevronDown size={20} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Container className="min-h-[60px] items-center justify-between">
              {/* Logo */}
              <Link
                href={"/"}
                className="flex justify-between items-center gap-6 w-full md:w-[60%]"
              >
                <Image
                  src={Logo}
                  alt="Roots ATL Logo"
                  width={150}
                  height={150}
                />
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
      )}
    </div>
  );
}
