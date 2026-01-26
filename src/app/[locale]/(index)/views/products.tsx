"use client";
import Container from "@/components/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BabyIcon,
  GenderFemaleIcon,
  GenderMaleIcon,
  JarIcon,
  RectangleDashedIcon,
  TeaBagIcon,
} from "@phosphor-icons/react";
import { Tablet } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useGetCategories, useGetProducts } from "@/services/products";

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

  const { data: categories } = useGetCategories();
  const { data } = useGetProducts(6);
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
      {categories?.length === 0 && (
        <div className="flex flex-col justify-center items-center bg-[#B69B64]/10 rounded-[12px] p-6 w-[80%] mx-auto h-[300px]">
          <RectangleDashedIcon className="text-[#B69B64]/20 text-6xl" />
          <p className="text-lg text-[#B69B64]/40 font-semibold mt-4">
            No product is listed yet.
          </p>
        </div>
      )}
      {categories?.length > 0 && (
        <Tabs defaultValue="sup_men" className="mt-6 w-full">
          <TabsList className="h-14 w-full rounded-full bg-gray-100 p-1 flex gap-2">
            <TabsTrigger
              value="sup_men"
              className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
            >
              <GenderMaleIcon weight="bold" />
              <p className="hidden lg:block">{categories[0].name}</p>
            </TabsTrigger>
            <TabsTrigger
              value="sup_w_men"
              className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
            >
              <GenderFemaleIcon weight="bold" />
              <p className="hidden lg:block">{categories[1].name}</p>
            </TabsTrigger>
            <TabsTrigger
              value="teas"
              className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
            >
              <TeaBagIcon weight="bold" />
              <p className="hidden lg:block">{categories[2].name}</p>
            </TabsTrigger>
            <TabsTrigger
              value="smart_gadgets"
              className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
            >
              <Tablet className="font-semibold" />
              <p className="hidden lg:block">{categories[3].name}</p>
            </TabsTrigger>
            <TabsTrigger
              value="kids_sess"
              className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
            >
              <BabyIcon weight="bold" />
              <p className="hidden lg:block">{categories[4].name}</p>
            </TabsTrigger>
            <TabsTrigger
              value="skincare"
              className="data-[state=active]:bg-white data-[state=active]:rounded-full px-3 lg:px-6 py-2 text-sm font-medium transition cursor-pointer"
            >
              <JarIcon weight="bold" />
              <p className="hidden lg:block">{categories[5].name}</p>
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
      )}
    </Container>
  );
}

export default Products;
