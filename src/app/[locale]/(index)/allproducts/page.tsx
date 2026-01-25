"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ProductsCard from "@/components/productsCard";
import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "../views/footer";
import Container from "@/components/container";
import {
  MagnifyingGlassIcon,
  RectangleDashedIcon,
} from "@phosphor-icons/react";
import { useGetCategories, useGetProducts } from "@/services/products";

export default function ProductListingPage() {
  const { data: categories } = useGetCategories();
  const { data } = useGetProducts(6);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen">
      <Breadcrumbs />

      <Container>
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 sticky top-0">
          <div className="bg-white rounded-lg">
            <h2 className="text-[20px] text-[#101928] font-medium mb-4">
              Categories
            </h2>

            {categories?.length === 0 && (
              <div className="flex flex-col justify-center items-center bg-[#B69B64]/10 rounded-[12px] p-6 w-full h-[50vh]">
                <RectangleDashedIcon className="text-[#B69B64]/20 text-6xl" />
                <p className="text-[14px] text-center text-[#B69B64]/40 font-semibold mt-4">
                  {"No categories found"}
                </p>
              </div>
            )}
            {categories?.length > 0 && (
              <>
                <div className="mb-4 relative">
                  <MagnifyingGlassIcon className="absolute text-[#667185] left-3 top-1/2 -translate-y-1/2" />
                  <Input
                    placeholder="Search items..."
                    className="text-sm pl-8"
                  />
                </div>

                <ul className="">
                  {categories?.map(({ category }: { category: any }) => (
                    <li
                      key={category.name}
                      className="flex h-[37px] border-b border-b-[#F0F2F5] w-full items-center justify-between py-6 text-left text-[14px] hover:text-gray-900"
                    >
                      <span>{category.name}</span>
                      <Plus className="h-4 w-4 text-[#98A2B3]" />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full">
          <div className="bg-white rounded-lg">
            {data?.length === 0 ||
              (!data && (
                <>
                  <h1 className="text-[28px] font-semibold mb-2">Products</h1>

                  <div className="flex flex-col justify-center items-center bg-[#B69B64]/10 rounded-[12px] p-6 w-full h-[50vh]">
                    <RectangleDashedIcon className="text-[#B69B64]/20 text-6xl" />
                    <p className="text-[14px] text-center text-[#B69B64]/40 font-semibold mt-4">
                      {"No products found"}
                    </p>
                  </div>
                </>
              ))}

            {/* Product Grid */}
            {data?.length > 0 && (
              <>
                <div className="space-y-2">
                  <h1 className="text-[28px] font-semibold">All Products</h1>

                  <div className="flex items-center justify-between border-y border-y-[#F0F2F5]">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Filters:</span>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[90%] text-[14px] text-[#B69B64] border-0 shadow-none">
                          <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="supplements">
                            Supplements
                          </SelectItem>
                          <SelectItem value="teas">Teas</SelectItem>
                          <SelectItem value="skincare">Skincare</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Sort by:</span>
                      <Select defaultValue="popular">
                        <SelectTrigger className="w-auto text-[14px] text-[#B69B64] border-0 shadow-none">
                          <SelectValue placeholder="Most popular" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="popular">Most popular</SelectItem>
                          <SelectItem value="price-low">
                            Price: Low to High
                          </SelectItem>
                          <SelectItem value="price-high">
                            Price: High to Low
                          </SelectItem>
                          <SelectItem value="newest">Newest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 w-full flex justify-end">
                    Showing 1 - 15 of 200 results
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {data?.map(({ product }: { product: any }) => (
                    <ProductsCard
                      name={product.name}
                      category={product.category}
                      price={product.price}
                      reviews={product.reviews}
                      rating={product.rating}
                    />
                  ))}
                </div>
                {/* Pagination */}
                <div className="flex items-center justify-center gap-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  <div className="flex gap-1">
                    {[1, 2, 3, "...", 10, 11, 12].map((page, index) => (
                      <Button
                        key={index}
                        variant={page === 3 ? "default" : "outline"}
                        size="sm"
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button variant="outline" size="sm">
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </main>
      </Container>
    </div>
  );
}
