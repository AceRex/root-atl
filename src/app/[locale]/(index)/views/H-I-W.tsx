"use client";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  PiggyBankIcon,
  PointerIcon,
  Share2Icon,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

function HowItWorks() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#EDEDED]">
      <Container className="flex-col items-center py-12 text-center">
        <h3 className="text-2xl font-semibold mb-3">
          {t("howItWorks.heading")}
        </h3>
        <p className="text-base text-center lg:w-[60%] lg:mx-auto mb-12">
          {t("howItWorks.subHeading")}
        </p>
        <div className="w-full mt-2 flex lg:flex-row flex-col max-md:space-y-12 flex-wrap justify-between items-center">
          <div className="lg:w-1/3 w-full lg:px-14 flex flex-col justify-center gap-3 text-center items-center">
            <PointerIcon size={30} />
            <h4 className="text-lg font-semibold">
              {t("howItWorks.items.0.title")}
            </h4>
            <p className="text-sm">{t("howItWorks.items.0.content")}</p>
          </div>
          <div className="lg:w-1/3 lg:px-14 flex flex-col justify-center gap-3 text-center items-center">
            <Share2Icon size={30} />
            <h4 className="text-lg font-semibold">
              {t("howItWorks.items.1.title")}
            </h4>
            <p className="text-sm">{t("howItWorks.items.1.content")}</p>
          </div>
          <div className="lg:w-1/3 lg:px-14 flex flex-col justify-center gap-3 text-center items-center">
            <PiggyBankIcon size={30} />
            <h4 className="text-lg font-semibold">
              {t("howItWorks.items.2.title")}
            </h4>
            <p className="text-sm">{t("howItWorks.items.2.content")}</p>
          </div>
        </div>
        <Button className="bg-[#B69B64] mt-20 lg:w-[30%] flex-grow font-semibold border-0 text-lg text-white py-6">
          {t("howItWorks.button")} <ChevronRight />
        </Button>
      </Container>
    </div>
  );
}

export default HowItWorks;
