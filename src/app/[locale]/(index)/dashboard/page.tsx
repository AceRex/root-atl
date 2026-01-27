"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Container from "@/components/container";
import {
  Check,
  ChevronRight,
  Copy,
  Info,
  Pencil,
  Settings,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ProductsCard from "@/components/productsCard";
import bg from "@/assets/bg.png";

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
];

export default function DashboardPage() {
  const cat = [
    { name: "bronze", value: "0" },
    { name: "silver", value: "0" },
    { name: "gold", value: "0" },
    { name: "platinum", value: "0" },
  ];
  const [copiedItems, setCopiedItems] = useState({});

  const copyToClipboard = async (text: any, itemId: any) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems((prev) => ({ ...prev, [itemId]: true }));

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedItems((prev) => ({ ...prev, [itemId]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const CopyButton = ({ text, itemId, children, className = "" }: any) => {
    // @ts-ignore
    const isCopied = copiedItems[itemId];

    return (
      <button
        onClick={() => copyToClipboard(text, itemId)}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ${className}`}
      >
        {children}
        {isCopied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    );
  };

  return (
    <Container className="pt-[12rem] flex-col py-3">
      <div className="bg-white p-3 flex items-center gap-2 justify-center rounded-lg">
        <Settings />
        <p className="">Complete your profile for better experience.</p>
        <Link href={"/"} className="decoration underline¬">
          Go to Profile Settings
        </Link>
      </div>
      <Card className="mb-2">
        <Alert className="w-[70%] bg-neutral-100 px-8 flex flex-row items-center justify-between mx-auto">
          <div className="flex flex-row items-center gap-2">
            <Info size={25} />
            <AlertDescription className="text-sm">
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </div>
          <X size={25} />
        </Alert>
        <CardHeader>
          <div className="flex flex-row items-start border-b py-8 justify-between">
            <Avatar className="w-40 h-40">
              <AvatarImage src="/Hero Section (1).png" alt="avatar" />
              <AvatarFallback className="text-5xl">MB</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start gap-2 w-[70%] py-2">
              <div className="text-3xl font-semibold">Mike Borolls</div>
              <div className="text-sm">My Upline</div>
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row gap-3 items-center">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/Hero Section (1).png" alt="avatar" />
                    <AvatarFallback className="text-sm">RA</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col my-4">
                    <p className="text-base font-semibold">ROOTS ATL</p>
                    <p className="text-xs text-neutral-500">Director</p>
                  </div>
                </div>
                <ChevronRight className="text-neutral-400" />
                <div className="flex flex-row gap-3 items-center">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/Hero Section (1).png" alt="avatar" />
                    <AvatarFallback className="text-sm">BR</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col my-4">
                    <p className="text-base font-semibold">BOLA ROOT</p>
                    <p className="text-xs text-neutral-500">Sponsor</p>
                  </div>
                </div>
                <ChevronRight className="text-neutral-400" />
                <div className="flex flex-row gap-3 items-center">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/Hero Section (1).png" alt="avatar" />
                    <AvatarFallback className="text-sm">MB</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col my-4">
                    <p className="text-base font-semibold">Mike Borolls</p>
                    <p className="text-xs text-neutral-500">Me</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost">
                <Pencil size={30} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-between">
            <p className="text-sm font-semibold">
              Progress Tracker - 31 August 2026
            </p>
            <p className="text-sm text-neutral-400">
              Number of people other me
            </p>
          </div>
          <div className="relative my-2">
            <Progress value={33} className="w-full h-2" />
            <div
              className="absolute top-0 left-0 h-2 rounded-full transition-all duration-300 bg-[#B69B64]"
              style={{ width: `${33}%` }}
            />
          </div>
          <div className="flex flex-row items-center justify-between my-8">
            {cat.map((t, index) => (
              <div key={index} className="flex flex-col items-start">
                <p className="text-bold text-xl capitalize">{t.name}</p>
                <p className="text-semibold text-sm ">{t.value} points</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="mb-2 py-12">
        <h2 className="text-3xl font-semibold text-center">My Business</h2>
        <div className="flex flex-row items-center w-[90%] mx-auto">
          <div className="border-y py-8 w-1/4 flex flex-col justify-center text-center">
            <p className="uppercase text-neutral-400 text-sm text-semibold">
              total sales
            </p>
            <p className="text-3xl">0 BP</p>
          </div>
          <div className="border-y border-x py-8 w-1/4 flex flex-col justify-center text-center">
            <p className="uppercase text-neutral-400 text-sm text-semibold">
              Active recruits
            </p>
            <p className="text-3xl">$0.00</p>
          </div>
          <div className="border-y border-x py-8 w-1/4 flex flex-col justify-center text-center">
            <p className="uppercase  text-neutral-400 text-sm text-semibold">
              Monthly revenue
            </p>
            <p className="text-3xl">$0.00</p>
          </div>
          <div className="border-y py-8 w-1/4 flex flex-col justify-center text-center">
            <p className="uppercase  text-neutral-400 text-sm text-semibold">
              points gained
            </p>
            <p className="text-3xl">$0.00</p>
          </div>
        </div>
        <div className="w-[10%] mx-auto">
          <Button variant="ghost" className="border">
            View More
          </Button>
        </div>
      </Card>

      <Card className="mb-2 py-12 px-4">
        <h2 className="text-3xl font-semibold text-center">My Order</h2>
        <p className="text-sm text-center">
          Orders made through your referral link
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <ProductsCard
              key={index}
              name={product?.name}
              category={product?.category}
              price={product?.price}
              reviews={product?.reviews}
              rating={product?.rating}
            />
          ))}
        </div>
        <div className="w-[10%] mx-auto">
          <Button variant="ghost" className="border">
            View More
          </Button>
        </div>
      </Card>

      {/* Share & Earn */}
      <Card className="mb-2 py-12 px-4">
        <h2 className="text-3xl font-semibold text-center">Share & Earn</h2>
        <div className="w-[70%] mx-auto h-[250px] relative overflow-hidden rounded-lg">
          <div className="absolute w-full h-full">
            <div className="w-[80%] py-8 mx-auto text-center text-white">
              <p className="font-semibold text-5xl">JOIN ROOTS ATL</p>
            </div>
            <div className="bg-white w-[50%] mx-auto mb-8 rounded-lg">
              <CopyButton
                text="SC-bolarootsatl"
                itemId="simple"
                className="bg-white hover:bg-gray-100 border border-gray-300 text-neutral-400"
              >
                <p className="w-[20rem]">Use code: SC-bolarootsatl</p>
              </CopyButton>
            </div>

            <p className="font-semibold text-center tracking-tight text-white text-xl">
              From: BOLA
            </p>
          </div>

          <div className="w-[600px]">
            <Image src={bg} alt="bg" className="min-w-[900px]" />
          </div>
        </div>
        <p className="text-sm text-neutral-400 w-[70%] mx-auto text-center mb-3">
          Share your invite code or link to anyone you invite to ROOTS ATL.
          Recruit more by sharing your invite code or link and increase your
          network. More invites, bigger earnings! 
        </p>
        <div className="w-[60%] mx-auto rounded-lg flex flex-row gap-2">
          <Input
            className="h-12"
            placeholder="https://rootstats.com/bola20202"
          />
          <Button className="h-12">Copy</Button>
        </div>
      </Card>

      {/* Perfect Start progress */}
      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-3xl font-semibold text-center capitalize">
            My perfect start
          </h2>

          <p className="text-center text-sm text-slate-700">
            Orders made through your referral link
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          {/* Stepper */}
          <div className="flex items-center justify-center mb-6 w-full max-w-md">
            {[1, 2, 3].map((step, index) => (
              <React.Fragment key={step}>
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-semibold ${
                    step === 1
                      ? "bg-[#B69B64] border-0 text-white"
                      : "border-black text-black"
                  }`}
                >
                  {step}
                </div>
                {index < 2 && (
                  <div className="flex-1 h-[2px] bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex bg-neutral-100 p-2 rounded-full overflow-hidden mb-6">
            <button className="px-6 py-4 text-sm font-medium bg-white rounded-full shadow">
              TODO
            </button>
            <button className="px-6 py-4 text-sm font-medium text-gray-600">
              COMPLETED
            </button>
          </div>

          {/* Task */}
          <div className="w-full max-w-lg border border-gray-200 rounded-2xl flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                ✓
              </div>
              <span className="font-semibold">User Products</span>
            </div>
            <span className="text-gray-400">›</span>
          </div>
        </CardContent>
      </Card>

      {/* What's New */}
      <Card className="mb-2 py-12 px-4">
        <h2 className="text-3xl font-semibold text-center">What's New</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <ProductsCard
              key={index}
              name={product?.name}
              category={product?.category}
              price={product?.price}
              reviews={product?.reviews}
              rating={product?.rating}
            />
          ))}
        </div>
        <div className="w-[10%] mx-auto">
          <Button variant="ghost" className="border">
            View More
          </Button>
        </div>
      </Card>

      {/* Order history */}
      <Card className="mb-2 py-12">
        <h2 className="text-3xl font-semibold text-center">Order history</h2>
        <CardContent>
          <div className="flex items-center gap-3 w-[70%] mx-auto mb-6">
            <Input placeholder="Search here 60+ products..." className="h-12" />
            <Button variant="outline" className="h-12">
              <SlidersHorizontal />
            </Button>
          </div>

          <div className="text-center text-slate-500 py-12">
            You have not yet placed any orders, when you have they will be shown
            here.
          </div>
        </CardContent>
        <div className="w-[10%] mx-auto">
          <Button variant="ghost" className="border">
            Continue shopping
          </Button>
        </div>
      </Card>
    </Container>
  );
}
