import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";
import Product from "@/assets/products/c5373a3a56d552f4c6f97b640a8297491a10252d.png";
import Image from "next/image";

function Hero() {
  return (
    <Container className="w-full !py-0 !px-0 overflow-hidden rounded-lg bg-gradient-to-tl from-[#7C7661] to-[#9F967A] max-sm:flex-col">
      <div className=" py-8 px-8 flex flex-col items-start lg:items-start justify-center gap-6">
        <p className="text-white text-3xl font-semibold">
          Get Started with ROOT ATL
        </p>
        <p className="text-white">
          Start your journey here. Learn how ROOT works, commissions, and team
          growth
        </p>
        <Button
          title="Start Course"
          className=" font-semibold border-0 text-lg text-white py-8 px-12"
        >
          Start Course <ChevronRight />
        </Button>
      </div>
      <div className="lg:w-1/2 w-full h-[350px] relative overflow-hidden">
        <div className="lg:top-6 top-0 absolute w-full">
          <Image
            src={Product}
            alt="image"
            className="rotate-[-15deg] object-contain h-[450px]"
          />
        </div>
        <div className="left-44 lg:top-10 top-4 absolute w-full">
          <Image
            src={Product}
            alt="image"
            className="rotate-[-15deg] object-contain h-[450px]"
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
