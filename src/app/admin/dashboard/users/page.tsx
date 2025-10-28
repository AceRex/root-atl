"use client";
import TableView from "@/components/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import {
  ArrowClockwiseIcon,
  ArrowsClockwiseIcon,
  ChatCircleDotsIcon,
  DotsThreeVerticalIcon,
  EyeIcon,
  InfoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SlashIcon, X } from "lucide-react";
import { useState } from "react";

function Breadcrumbs() {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-neutral-400 hover:text-neutral-400"
            href="/admin/dashboard"
          >
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-[#B69B64] hover:text-[#B69B64]">
            Users & Sellers
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function Page() {
  const products = [
    {
      id: 1,
      product: "Bellow Collins",
      sku: "#123456",
      category: "Home",
      price: "₦10K",
      stock: "Active",
      image: "🌿",
    },
    {
      id: 2,
      product: "Bellow Collins",
      sku: "#123456",
      category: "Home",
      price: "₦10K",
      stock: "Out of Stock",
      image: "🌿",
    },
    {
      id: 3,
      product: "Bellow Collins",
      sku: "#123456",
      category: "Home",
      price: "₦10K",
      stock: "Out of Stock",
      image: "🌿",
    },
    {
      id: 4,
      product: "Bellow Collins",
      sku: "#123456",
      category: "Home",
      price: "₦10K",
      stock: "Active",
      image: "🌿",
    },
    {
      id: 5,
      product: "Bellow Collins",
      sku: "#123456",
      category: "Home",
      price: "₦10K",
      stock: "Active",
      image: "🌿",
    },
  ];
  const Referral = [
    {
      id: 1,
      name: "Bellow Collins",
      image: "https://github.com/shadcn.png",
      date: "20/10/2024",
      tier: "Gold",
      amount: "₦10K",
    },
    {
      id: 2,
      name: "Bellow Collins",
      image: "https://github.com/shadcn.png",
      date: "20/10/2024",
      tier: "Bronze",
      amount: "₦10K",
    },
    {
      id: 3,
      name: "Bellow Collins",
      image: "https://github.com/shadcn.png",
      date: "20/10/2024",
      tier: "Silver",
      amount: "₦10K",
    },
    {
      id: 4,
      name: "Bellow Collins",
      image: "https://github.com/shadcn.png",
      date: "20/10/2024",
      tier: "Bronze",
      amount: "₦10K",
    },
    {
      id: 5,
      name: "Bellow Collins",
      image: "https://github.com/shadcn.png",
      date: "20/10/2024",
      tier: "Gold",
      amount: "₦10K",
    },
  ];
  const invoices = [
    {
      invoice: "INV001",
      date: "20/5/2024",
      totalAmount: "$250.00",
      status: "Pending",
    },
    {
      invoice: "INV002",
      date: "20/5/2024",
      totalAmount: "$150.00",
      status: "Rejected",
    },
    {
      invoice: "INV003",
      date: "20/5/2024",
      totalAmount: "$350.00",
      status: "Successful",
    },
    {
      invoice: "INV004",
      date: "20/5/2024",
      totalAmount: "$450.00",
      status: "Successful",
    },
    {
      invoice: "INV005",
      date: "20/5/2024",
      totalAmount: "$550.00",
      status: "Successful",
    },
    {
      invoice: "INV006",
      date: "20/5/2024",
      totalAmount: "$200.00",
      status: "Rejected",
    },
    {
      invoice: "INV007",
      date: "20/5/2024",
      totalAmount: "$300.00",
      status: "Successful",
    },
  ];
  const orderTableHeading = [
    { key: "invoice", label: "Invoice" },
    { key: "totalAmount", label: "Total Amount" },
    { key: "date", label: "Date" },
    {
      key: "status",
      label: "Status",
      render: (value: any) => (
        <span
          className={`px-3 py-1 rounded-lg text-xs ${
            value === "Successful"
              ? "bg-green-100 text-green-700"
              : value === "Rejected"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {value}
        </span>
      ),
    },
  ];
  const RefferalTable = [
    {
      key: "user",
      label: "User",
      render: (value: any, row: any) => (
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={row.image} alt={value} />
            <AvatarFallback>
              {value
                ?.split(" ")
                .map((n: any) => n[0])
                .join("")
                .toUpperCase() || "?"}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">{value}</span>
        </div>
      ),
    },
    { key: "amount", label: "Amount" },
    { key: "date", label: "Date" },
    {
      key: "tier",
      label: "Tier",
      render: (value: any) => (
        <span
          className={`px-3 py-1 rounded-lg text-xs ${
            value === "Gold"
              ? "bg-gradient-to-br from-yellow-600 to-yellow-500 text-white"
              : value === "Silver"
              ? "bg-gradient-to-br from-neutral-400 to-neutral-200 text-white"
              : "bg-gradient-to-br from-amber-500 to-amber-300 text-white"
          }`}
        >
          {value}
        </span>
      ),
    },
  ];
  const tableHeading = [
    {
      key: "product",
      label: "Product",
      render: (value: any, row: any) => (
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={row.avatar} alt={value} />
            <AvatarFallback>
              {value
                ?.split(" ")
                .map((n: any) => n[0])
                .join("")
                .toUpperCase() || "?"}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">{value}</span>
        </div>
      ),
    },
    {
      key: "category",
      label: "Category",
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },
    {
      key: "sku",
      label: "SKU",
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },
    {
      key: "price",
      label: "Price",
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },
    {
      key: "stock",
      label: "Stock",
      render: (value: any) => (
        <span
          className={`px-3 py-1 rounded-lg text-xs ${
            value === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "action",
      label: "Action",
      render: (value: any) => (
        <span className={` py-1 `}>
          <Popover>
            <Sheet>
              <PopoverTrigger>
                <DotsThreeVerticalIcon size={25} />
              </PopoverTrigger>
              <PopoverContent className="w-40 mr-5 !p-2">
                <ul>
                  <SheetTrigger className="p-2 w-full hover:bg-neutral-100 rounded-md cursor-pointer flex items-center flex-row gap-2">
                    <EyeIcon />
                    <p className="text-sm">View</p>
                  </SheetTrigger>
                  <SheetContent className="min-w-2xl px-8 py-4">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-row items-center gap-4">
                        <Avatar className="w-25 h-25">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt={value}
                          />
                          <AvatarFallback>
                            {value
                              ?.split(" ")
                              .map((n: any) => n[0])
                              .join("")
                              .toUpperCase() || "?"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2">
                          <p className="font-semibold text-lg">
                            Bellow Collins
                          </p>
                          <p className="text-sm -mt-3 text-neutral-500">
                            example@gmail.com
                          </p>
                          <div className="flex flex-row gap-4 items-center">
                            <Badge className="bg-white border p-2 px-4 border-neutral-400 text-neutral-600">
                              Premium
                            </Badge>
                            <Badge className="bg-emerald-300 p-2 px-4 text-emerald-900">
                              Active
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Tabs defaultValue="history" className="w-full mt-3">
                        <TabsList className="!h-[50px] !w-full ">
                          <TabsTrigger value={"history"}>History</TabsTrigger>
                          <TabsTrigger value={"referrals"}>
                            Referrals
                          </TabsTrigger>
                          <TabsTrigger value={"subscription"}>
                            Subscription
                          </TabsTrigger>
                          <TabsTrigger value={"training"}>Training</TabsTrigger>
                        </TabsList>
                        <TabsContent value="history" className="p-1">
                          <h3 className="font-bold text-lg">Orders</h3>
                          <div className="flex items-center my-2">
                            <TableView
                              heading={orderTableHeading}
                              data={invoices}
                              totalPages={2}
                              currentPage={1}
                              onPageChange={(newPage) => setPage(newPage)}
                            />
                          </div>
                        </TabsContent>
                        <TabsContent value="referrals" className="p-1">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="border border-neutral-500 p-4 rounded-lg">
                              <h5 className="font-semibold text-[#B69B64]">
                                Total Referrals
                              </h5>
                              <p className="text-2xl font-semibold">200</p>
                            </div>
                            <div className="border border-neutral-500 p-4 rounded-lg">
                              <h5 className="font-semibold text-[#B69B64]">
                                Total Earnings
                              </h5>
                              <p className="text-2xl font-semibold">$2.2M</p>
                            </div>
                          </div>
                          <div className="flex items-center my-3.5">
                            <TableView
                              heading={RefferalTable}
                              data={Referral}
                              totalPages={2}
                              currentPage={1}
                              onPageChange={(newPage) => setPage(newPage)}
                            />
                          </div>
                        </TabsContent>
                        <TabsContent value="subscription" className="p-1">
                          <div className="flex flex-col gap-4 rounded-lg border border-neutral-300 p-6">
                            <div className="flex flex-row items-center justify-between gap-4">
                              <h5
                                className={cn(
                                  "font-bold text-3xl text-[#B69B64] tracking-tight"
                                )}
                              >
                                Pro Plan
                              </h5>
                              <Badge className="bg-emerald-200 p-2 px-4 text-emerald-900">
                                Active
                              </Badge>
                            </div>
                            <p className="text-7xl font-bold tracking-tight">
                              $2k
                              <span className="text-lg font-medium tracking-normal text-neutral-400">
                                {" "}
                                /month
                              </span>
                            </p>
                            <p className=" -mt-4 font-medium tracking-normal text-neutral-400">
                              Renews on 30th, June 2026
                            </p>
                            <div className="flex flex-col gap-4 mt-4">
                              <div className="bg-[#B69B64] text-white px-4 py-2  rounded-lg">
                                <h4>Plan Benefits</h4>
                              </div>
                              <ul className="list-disc list-inside flex flex-col gap-2">
                                <li>Full Access to product catalog</li>
                                <li>Level 3 commissions</li>
                                <li>Priority customer support</li>
                              </ul>
                              <div className="flex flex-row gap-4 mt-4 w-full">
                                <Button className="w-1/2 bg-[#B69B64] text-white hover:bg-[#9C7A4C]">
                                  <ArrowsClockwiseIcon />
                                  Change Plan
                                </Button>
                                <Button className="w-1/2 bg-white flex flex-row text-[#B69B64] border border-neutral-400 hover:bg-neutral-100">
                                  <X />
                                  Cancel Subscription
                                </Button>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="training" className="p-1">
                          <h3 className="font-bold text-lg">
                            Training Progress
                          </h3>
                          <div className="flex flex-row justify-between my-4">
                            <p className="text-sm text-neutral-500">
                              Overall Completion
                            </p>
                            <p className="text-sm font-semibold">68%</p>
                          </div>
                          <Progress value={68} className="w-full h-2" />
                          <div className="bg-neutral-100 p-4 my-4 rounded-lg flex flex-col gap-4">
                            <div className="flex flex-row bg-white p-6 border border-neutral-300 rounded-lg justify-between">
                              <div>
                                <p className="font-semibold text-xl">
                                  Get Started
                                </p>
                                <p>Basic Training</p>
                              </div>
                              <div className="bg-emerald-200 rounded-lg flex p-2 text-xs items-center justify-center">
                                Completed
                              </div>
                            </div>
                            <div className="flex flex-row bg-white p-6 border border-neutral-300 rounded-lg justify-between">
                              <div>
                                <p className="font-semibold text-xl">
                                  Get Started
                                </p>
                                <p>Basic Training</p>
                              </div>
                              <div className="bg-emerald-200 rounded-lg flex p-2 text-xs items-center justify-center">
                                Completed
                              </div>
                            </div>
                            <div className="flex flex-row bg-white p-6 border border-neutral-300 rounded-lg justify-between">
                              <div>
                                <p className="font-semibold text-xl">
                                  Get Started
                                </p>
                                <p>Basic Training</p>
                              </div>
                              <div className="bg-amber-200 text-amber-700 rounded-lg flex p-2 text-xs items-center justify-center">
                                in Progress
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </SheetContent>
                  <li className="p-2 w-full hover:bg-neutral-100 rounded-md cursor-pointer flex items-center flex-row gap-2">
                    <InfoIcon />
                    <p className="text-sm"> Suspend</p>
                  </li>
                  <li className="p-2 w-full hover:bg-neutral-100 rounded-md cursor-pointer flex items-center flex-row gap-2">
                    <ChatCircleDotsIcon />
                    <p className="text-sm"> Message</p>
                  </li>
                </ul>
              </PopoverContent>
            </Sheet>
          </Popover>
        </span>
      ),
    },
  ];
  const [page, setPage] = useState(1);

  return (
    <Sheet>
      <div className="min-h-[100dvh] pt-[4rem] bg-[#FAF9F6] ">
        <Breadcrumbs />
        <div className="my-4">
          <div className=" p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
            <div className="flex flex-row items-center justify-between">
              <p className="text-base text-[#B69B64] font-semibold">
                Top Selling Products
              </p>
              <div className="flex flex-row items-center gap-3">
                <div className="px-2 hidden md:flex items-center  flex-row gap-2 border border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm">
                  <MagnifyingGlassIcon size={25} color="#667185" />
                  <Input
                    type="text"
                    className="border-none outline-none ring-0 focus:outline-none focus:border-none focus:ring-0"
                    placeholder="Search for products..."
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <TableView
                heading={tableHeading}
                data={products}
                totalPages={2}
                currentPage={1}
                onPageChange={(newPage) => setPage(newPage)}
              />
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
}

export default Page;
