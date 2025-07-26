import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProductsCardProps {
  image?: any;
  name: string;
  category: string;
  price: number;
  reviews: number;
  rating: number;
}

function ProductsCard({
  image,
  name,
  category,
  price,
  reviews,
  rating,
}: ProductsCardProps) {
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  return (
    <Tooltip>
      <TooltipTrigger>
        <Card
          onClick={() => router.push(`/allproducts/${name}`)}
          className="overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className={`p-6 flex items-center justify-center h-48`}>
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex flex-row items-start justify-between">
              <h3 className=" text-[#221A11] text-lg mb-1">{name}</h3>
              <p className="flex flex-row text-sm font-semibold items-start">
                <p>$</p>
                <p className="text-2xl font-bold">{price.toFixed(2)}</p>
              </p>
            </div>
            <p className="text-xs capitalize text-gray-600 my-2">{category}</p>

            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => {
                const fillType =
                  i + 1 <= rating
                    ? "fill-amber-400 text-amber-400"
                    : i + 0.5 <= rating
                    ? "fill-amber-300 text-amber-300"
                    : "fill-gray-300 text-gray-300";

                return <Star key={i} className={`h-4 w-4 ${fillType}`} />;
              })}
              <span className="text-sm text-gray-600 ml-1">({reviews})</span>
            </div>

            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </TooltipTrigger>
      <TooltipContent>Click to preview</TooltipContent>
    </Tooltip>
  );
}

export default ProductsCard;
