"use client";

import React from "react";
import Image from "next/image";
import bg_image from "@/assets/00a8b1713646dbcd594d5a4deab25fecc1c50e3b.png";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/container";
import { useTranslation } from "react-i18next";

function Overview() {
  const { t } = useTranslation();

  const overView = [
    t("aboutRootATL.overview.overviewList.1"),
    t("aboutRootATL.overview.overviewList.2"),
    t("aboutRootATL.overview.overviewList.3"),
    t("aboutRootATL.overview.overviewList.4"),
    t("aboutRootATL.overview.overviewList.5"),
  ];
  return (
    <Container className="lg:my-28 my-12 lg:pb-28 flex flex-col-reverse relative">
      <div className="w-full lg:max-w-[55%] overflow-hidden rounded-2xl lg:rounded-[2.5rem]">
        <Image
          src={bg_image}
          alt="image"
          className="max-w-full max-h-[500px] object-cover"
        />
      </div>
      <div className="lg:bg-white lg:drop-shadow-2xl lg:rounded-[2.5rem] items-start lg:absolute bottom-10 right-24 lg:p-16 max-lg:py-6 w-full lg:max-w-[50dvw]">
        <div className="bg-white w-[80%] lg:w-[40%] text-center drop-shadow drop-shadow-[#F3903526] text-lg px-5 py-2 rounded-full font-semibold">
          🌿 {t("aboutRootATL.tag")}
        </div>
        <h3 className="font-semibold text-2xl lg:text-4xl mt-4 mb-2">
          {t("aboutRootATL.overview.text")}
        </h3>
        <p className="text-base mb-4">
          {t("aboutRootATL.overview.overviewContent")}
        </p>
        <ul className="list-none space-y-2">
          {overView.map((item, i) => (
            <li key={i} className="flex flex-row items-center gap-2">
              <CheckCircle2 size={15} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Overview;
