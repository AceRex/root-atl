import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  PiggyBankIcon,
  PointerIcon,
  Share2Icon,
} from "lucide-react";
import React from "react";

function HowItWorks() {
  return (
    <div className="bg-[#EDEDED]">
      <Container className="flex-col items-center py-12 text-center">
        <h3 className="text-2xl font-semibold mb-3">
          How It Works (MLM Model)
        </h3>
        <p className="text-base text-center lg:w-[60%] lg:mx-auto mb-12">
          ROOTS ATL empowers individuals through education, treatment, and
          continuous support across their entire health journey.
        </p>
        <div className="w-full mt-2 flex lg:flex-row flex-col max-md:space-y-12 flex-wrap justify-between items-center">
          <div className="lg:w-1/3 w-full lg:px-14 flex flex-col justify-center gap-3 text-center items-center">
            <PointerIcon size={30} />
            <h4 className="text-lg font-semibold">Subscribe</h4>
            <p className="text-sm">
              Make your own work schedule, set your own working hours, work from
              home, work online - be independent
            </p>
          </div>
          <div className="lg:w-1/3 lg:px-14 flex flex-col justify-center gap-3 text-center items-center">
            <Share2Icon size={30} />
            <h4 className="text-lg font-semibold">Share</h4>
            <p className="text-sm">
              Make your own work schedule, set your own working hours, work from
              home, work online - be independent
            </p>
          </div>
          <div className="lg:w-1/3 lg:px-14 flex flex-col justify-center gap-3 text-center items-center">
            <PiggyBankIcon size={30} />
            <h4 className="text-lg font-semibold">Earn</h4>
            <p className="text-sm">
              Make your own work schedule, set your own working hours, work from
              home, work online - be independent
            </p>
          </div>
        </div>
        <Button className="bg-[#B69B64] mt-20 lg:w-[30%] flex-grow font-semibold border-0 text-lg text-white py-6">
          Join Our Community <ChevronRight />
        </Button>
      </Container>
    </div>
  );
}

export default HowItWorks;
