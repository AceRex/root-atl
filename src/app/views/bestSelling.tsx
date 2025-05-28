import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import img1 from "@/assets/products/1bd18ebf8c59505166e682537732b3f9a5c328d5.png";
import img2 from "@/assets/products/1e43bbea1408c0182474afbe0857d71393a157e8.png";
import img3 from "@/assets/products/6e73899109943999fdb25353ac2ada7cceed2a27.png";
import img4 from "@/assets/products/6fb120683067d6148a26d199c5dc058f0a2f5a9e.png";
import img5 from "@/assets/products/8a083c5511733a9befd8178c5149ac3b5166a71b.png";
import img6 from "@/assets/products/043f5d484a21b7849cbc05209f23065eaeaffbf1.png";
import React from "react";

const data = [
  {
    product_name: "HYDRABOOST+",
    image: img1,
    amount: 95,
    rating: 4.5,
    comments: 91,
    category: "Kids",
  },
  {
    product_name: "ROOTS CALM MIST",
    image: img2,
    amount: 95,
    rating: 5,
    comments: 91,
    category: "Tech",
  },
  {
    product_name: "SHINE GUMMIES",
    image: img3,
    amount: 95,
    rating: 4.5,
    comments: 91,
    category: "Gummies",
  },
  {
    product_name: "SUGAR (Natural Blood)",
    image: img4,
    amount: 95,
    rating: 5,
    comments: 91,
    category: "any",
  },
];

function BestSelling() {
  return (
    <Container className="my-12">
      <div className="flex flex-row justify-between items-center">
        <h4 className="text-2xl font-semibold">Best Sellings</h4>
        <div className="w-10">
          <Button className="bg-white flex-grow font-semibold border cursor-pointer border-neutral-400 text-sm text-neutral-400 py-5">
            Shop now <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto gap-6 mt-8">
        {data.map((item, index) => (
          <li>item</li>
        ))}
      </div>
    </Container>
  );
}

export default BestSelling;
