"use client";
import Container from "@/components/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import img1 from "@/assets/products/1bd18ebf8c59505166e682537732b3f9a5c328d5.png";
import img2 from "@/assets/products/1e43bbea1408c0182474afbe0857d71393a157e8.png";
import img3 from "@/assets/products/64e6205920775bad4b49ff8a3c9f85907cfeaa23.jpg";
import img4 from "@/assets/products/6fb120683067d6148a26d199c5dc058f0a2f5a9e.png";
import img5 from "@/assets/products/8a083c5511733a9befd8178c5149ac3b5166a71b.png";
import img6 from "@/assets/products/043f5d484a21b7849cbc05209f23065eaeaffbf1.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BabyIcon,
  GenderFemaleIcon,
  GenderMaleIcon,
  JarIcon,
  TeaBagIcon,
} from "@phosphor-icons/react";
import { Tablet } from "lucide-react";
import { useTranslation } from "react-i18next";

const data = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
];

type ImageItem = {
  image: any;
};

function ImageGrid({ items }: { items: ImageItem[] }) {
  return (
    <div className="grid grid-cols-3 my-8 rounded-2xl overflow-hidden">
      {items?.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`overflow-hidden w-full h-[250px] sm:h-[280px] md:h-[350px] ${
            (index + 1) % 2 === 0 ? "bg-[#8DACA4]" : "bg-[#ECE0D0]"
          }`}
        >
          {/* @ts-ignore */}
          <Image
            src={item.image}
            alt={`image-${index}`}
            className={`object-contain w-full h-full`}
          />
        </motion.div>
      ))}
    </div>
  );
}

function Products() {
  const { t } = useTranslation();
  return (
    <Container className="my-20 lg:p-28 flex flex-col gap-3 items-center">
      <div className="bg-white text-center drop-shadow-xl drop-shadow-[#F3903526] text-lg px-5 py-2 rounded-full font-semibold">
        🌿 {t("homepageProducts.heading")}
      </div>
      <h3 className="font-semibold text-2xl text-center lg:text-4xl mt-8">
        {t("homepageProducts.heading")}
      </h3>
      <p className="text-base w-[100%] lg:w-[48%] text-center mb-4">
        {t("homepageProducts.subHeading")}
      </p>
      <Tabs defaultValue="sup_men" className="mt-6 w-full">
        <TabsList className="h-14 w-full rounded-full bg-gray-100 p-1 flex gap-2">
          <TabsTrigger
            value="sup_men"
            className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
          >
            <GenderMaleIcon weight="bold" />
            <p className="hidden lg:block">Supplements for men</p>
          </TabsTrigger>
          <TabsTrigger
            value="sup_w_men"
            className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
          >
            <GenderFemaleIcon weight="bold" />
            <p className="hidden lg:block">Supplements for Women</p>
          </TabsTrigger>
          <TabsTrigger
            value="teas"
            className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
          >
            <TeaBagIcon weight="bold" />
            <p className="hidden lg:block">Tea's</p>
          </TabsTrigger>
          <TabsTrigger
            value="smart_gadgets"
            className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
          >
            <Tablet className="font-semibold" />
            <p className="hidden lg:block">Smart gadgets</p>
          </TabsTrigger>
          <TabsTrigger
            value="kids_sess"
            className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
          >
            <BabyIcon weight="bold" />
            <p className="hidden lg:block">Kids sessions</p>
          </TabsTrigger>
          <TabsTrigger
            value="skincare"
            className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
          >
            <JarIcon weight="bold" />
            <p className="hidden lg:block">Skincare</p>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sup_men">
          <ImageGrid items={data} />
        </TabsContent>
        <TabsContent value="sup_w_men">
          <ImageGrid items={data} />
        </TabsContent>
        <TabsContent value="teas">
          <ImageGrid items={data} />
        </TabsContent>
        <TabsContent value="smart_gadgets">
          <ImageGrid items={data} />
        </TabsContent>
        <TabsContent value="kids_sess">
          <ImageGrid items={data} />
        </TabsContent>
        <TabsContent value="skincare">
          <ImageGrid items={data} />
        </TabsContent>
      </Tabs>
    </Container>
  );
}

export default Products;
