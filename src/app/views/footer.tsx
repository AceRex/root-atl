import Container from "@/components/container";
import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#EDEDED] py-8">
      <Container className="flex flex-row flex-wrap justify-between">
        <div className="mb-6">
          <h5 className="font-semibold mb-2">ROOTS ATL</h5>
          <ul className="space-y-2">
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Support center
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Track your last order
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Returns and Claim
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Become a member
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">CORPORATE INFO</h5>
          <ul className="space-y-2">
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Work WIth Us
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Who we are
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">DISCOVER</h5>
          <ul className="space-y-2">
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                News
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Careers
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Investors
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-sm cursor-pointer">
                Purpose
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-[35%] w-full max-md:my-12 space-y-7">
          <Image
            src={Logo}
            alt="logo"
            className="w-auto h-[40px]"
          />
          <p className="text-sm">
            Get the latest updates about ROOTS ATL new features and product
            updates.
          </p>
          <div className="flex flex-row gap-2">
            <Input
              className="w-[70%] min-h-9 lg:min-h-12 border border-neutral-300 py-4 placeholder:text-neutral-400"
              placeholder="Email address"
            />
            <Button className="bg-[#B69B64] w-[30%] flex-grow font-semibold border-0 text-sm lg:text-lg text-white py-4 lg:py-6">
              Subscribe
            </Button>
          </div>
        </div>
      </Container>
      <Container className="hidden lg:flex flex-row justify-between pt-14">
        <div className="flex flex-row gap-8 text-[#667185] text-sm">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Security</p>
        </div>
        <p className="text-[#667185] text-sm">
          © 2025 ROOTS ATL. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
