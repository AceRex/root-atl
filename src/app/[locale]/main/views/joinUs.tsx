import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";
import Product from "@/assets/products/c5373a3a56d552f4c6f97b640a8297491a10252d.png";
import Image from "next/image";

function JoinUs() {
  return (
    <div className="my-24 max-w-[90%] mx-auto">
      <Container className="!py-0 !px-0 overflow-hidden rounded-lg bg-gradient-to-tl from-[#7C7661] to-[#9F967A] max-sm:flex-col">
        <div className="lg:w-1/2 max-md:px-5 flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between py-12 lg:py-24">
          <p className="text-white text-3xl lg:text-4xl font-medium lg:pl-28">
            Join the ROOTS Network and Start Earning
          </p>
          <Button
            title="Join Now"
            className="bg-[#B09745] flex-grow font-semibold border-0 text-lg text-white py-6 px-12"
          >
            Join Now <ChevronRight />
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
    </div>
  );
}

export default JoinUs;
