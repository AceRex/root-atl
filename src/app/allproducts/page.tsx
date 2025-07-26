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

const products = [
  {
    id: 1,
    name: "Gut Harmony",
    category: "Men supplement",
    price: 95.0,
    rating: 5,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-green-800",
  },
  {
    id: 2,
    name: "HeartEase Tea",
    category: "Teas",
    price: 95.0,
    rating: 5,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-amber-600",
  },
  {
    id: 3,
    name: "ROOTS Radiant skin",
    category: "Skincare",
    price: 95.0,
    rating: 5,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-green-700",
  },
  {
    id: 4,
    name: "Gut Harmony",
    category: "Men supplement",
    price: 95.0,
    rating: 5,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-green-600",
  },
  {
    id: 5,
    name: "ROOTS HeartEase Tea",
    category: "Teas",
    price: 95.0,
    rating: 5,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-green-800",
  },
  {
    id: 6,
    name: "Radiant Skin Corrector",
    category: "Skincare",
    price: 95.0,
    rating: 5,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-amber-600",
  },
  {
    id: 7,
    name: "Gut Harmony",
    category: "Supplement",
    price: 95.0,
    rating: 5,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-green-600",
  },
  {
    id: 8,
    name: "HeartEase Tea's",
    category: "Red Sirtios",
    price: 95.0,
    rating: 5,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-green-700",
  },
  {
    id: 9,
    name: "Radiant Skin",
    category: "Skincare",
    price: 95.0,
    rating: 5,
    reviews: 91,
    image: "/placeholder.svg?height=300&width=300",
    bgColor: "bg-green-800",
  },
];

const categories = [
  { name: "All", count: null },
  { name: "Supplement for men", count: null },
  { name: "Supplement for women", count: null },
  { name: "Teas", count: null },
  { name: "Smart gadgets", count: null },
  { name: "Kids sessions", count: null },
  { name: "Skincare", count: null },
];

export default function ProductListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Lifestyle</h2>

              <div className="mb-4">
                <Input placeholder="Search items..." className="text-sm" />
              </div>

              <div className="space-y-2">
                {categories.map((category) => (
                  <Collapsible key={category.name}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-left text-sm hover:text-gray-900">
                      <span>{category.name}</span>
                      <Plus className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="pl-4 py-1 text-sm text-gray-600">
                        Subcategory items would go here
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">All Products</h1>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Filters:</span>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="supplements">Supplements</SelectItem>
                        <SelectItem value="teas">Teas</SelectItem>
                        <SelectItem value="skincare">Skincare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <Select defaultValue="popular">
                      <SelectTrigger className="w-40">
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

                <p className="text-sm text-gray-600 mt-4">
                  Showing 1 - 15 of 200 results
                </p>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {products.map((product) => (
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
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
