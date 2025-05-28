import Container from "@/components/container";
import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="bg-[#EDEDED] py-8">
      <Container className="flex flex-row justify-between">
        <div>
          <h5 className="font-semibold mb-2">ROOTS ATL</h5>
          <ul className="space-y-2">
            <li className="text-sm">Support center</li>
            <li className="text-sm">Track your last order</li>
            <li className="text-sm">Returns and Claim</li>
            <li className="text-sm">Become a member</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">CORPORATE INFO</h5>
          <ul className="space-y-2">
            <li className="text-sm">Work WIth Us</li>
            <li className="text-sm">Who we are</li>
            <li className="text-sm">Contact Us</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">DISCOVER</h5>
          <ul className="space-y-2">
            <li className="text-sm">News</li>
            <li className="text-sm">Careers</li>
            <li className="text-sm">Investors</li>
            <li className="text-sm">Purpose</li>
          </ul>
        </div>
        <div className="w-[35%] space-y-7">
          <Image src={Logo} alt="logo" width={200} height={200} />
          <p className="text-sm">
            Get the latest updates about ROOTS ATL new features and product
            updates.
          </p>
          <div className="flex flex-row gap-2">
            <Input
              className="w-[70%] min-h-12 border border-neutral-300 py-4 placeholder:text-neutral-400"
              placeholder="Email address"
            />
            <Button className="bg-[#B69B64] w-[30%] flex-grow font-semibold border-0 text-lg text-white py-6">
              Subscribe
            </Button>
          </div>
        </div>
      </Container>
      <Container className="flex flex-row justify-between pt-14">
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
