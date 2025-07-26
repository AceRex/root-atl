"use client";
import BestSelling from "@/app/views/bestSelling";
import Footer from "@/app/views/footer";
import JoinUs from "@/app/views/joinUs";
import Breadcrumbs from "@/components/breadcrumbs";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import SampleImage from "@/assets/products/c5373a3a56d552f4c6f97b640a8297491a10252d.png";
import Container from "@/components/container";

function ProductViewPage() {
  const params = useParams();
  return (
    <>
      <Breadcrumbs />
      <Container className="flex flex-row justify-between  items-center">
        <div className="relative rounded-lg w-1/2 max-h-[600px] overflow-hidden">
          <Image
            src={SampleImage}
            alt="Product Image"
            className="object-cover"
            sizes="50vw"
          />
        </div>

        <div className="flex flex-col w-1/2 px-12 gap-4">
          <h1 className="text-2xl font-bold">{params.productId}</h1>
          <p className="text-lg text-gray-700">
            Product Description: This is a sample description for the product.
          </p>
          <p className="text-xl font-semibold text-green-600">$99.99</p>
          <button className="bg-[#B69B64] text-white px-6 py-2 rounded-lg hover:bg-[#a68b5c] transition-colors">
            Add to Cart
          </button>
        </div>
      </Container>
      <BestSelling />
      <JoinUs />
      <Footer />
    </>
  );
}

export default ProductViewPage;
