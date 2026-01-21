"use client";
import BestSelling from "@/app/[locale]/(index)/views/bestSelling";
import Footer from "@/app/[locale]/(index)/views/footer";
import JoinUs from "@/app/[locale]/(index)/views/joinUs";
import Breadcrumbs from "@/components/breadcrumbs";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import SampleImage from "@/assets/products/d4afe74b5274c702d84ec8b05d23ab1f57e76ee4.jpg";
import Container from "@/components/container";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

function ProductViewPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  return (
    <>
      <Breadcrumbs />
      <Container className="flex flex-row justify-between gap-8 items-start">
        <div className="relative rounded-lg w-1/2 max-h-[600px] border overflow-hidden">
          <Image
            src={SampleImage}
            alt="Product Image"
            className="object-contain"
            sizes="50vw"
          />
        </div>

        <div className="flex flex-col w-1/2 gap-5">
          {/* TITLE */}
          <h1 className="text-3xl font-semibold text-gray-900">
            ROOTS Queen’s Guard Tea
          </h1>
          <p className="text-sm text-gray-500">
            Antibacterial & Soothing Vaginal Health
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2">
            <div className="flex flex-row gap-3 text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <span className="text-sm text-gray-600">(121)</span>
          </div>

          {/* PRICE */}
          <p className="text-[45px] font-bold text-gray-900 ">USD 23000</p>

          {/* QUANTITY + BUTTON */}
          <div className="flex flex-row justify-between w-[70%] items-center gap-4 mt-2">
            <div className="flex w-1/2 items-center border rounded-lg px-3 py-2 gap-4">
              <button
                onClick={decreaseQty}
                className={`${
                  quantity <= 1 ? "text-neutral-300" : "text-[#B69B64]"
                }  text-xl font-bold w-1/4`}
              >
                –
              </button>
              <span className="text-lg w-2/4 text-center text-[#B69B64]">
                {quantity}
              </span>
              <button
                onClick={increaseQty}
                className={`text-[#B69B64] text-xl font-bold w-1/4`}
              >
                +
              </button>
            </div>
            <Button className="bg-[#B69B64] flex-grow font-semibold border-0 text-sm text-white py-6">
              Buy Now
            </Button>
          </div>
          <div className="border-b border-gray-200 flex flex-row justify-between mt-6 px-2">
            {[
              "Intro",
              "Description",
              "How to use",
              "Ingredients",
              "Information",
              "Shipping",
            ].map((tab) => (
              <button
                key={tab}
                className="text-sm pb-2 border-b-2 border-transparent hover:border-gray-900 transition"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </Container>
      <BestSelling />
      <JoinUs />
    </>
  );
}

export default ProductViewPage;
