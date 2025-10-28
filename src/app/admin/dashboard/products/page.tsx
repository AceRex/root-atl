"use client";
import TableView from "@/components/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Plus, SlashIcon } from "lucide-react";
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
            Products & Inventory
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
          className={`px-3 py-1 rounded-full ${
            value === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {value}
        </span>
      ),
    },
  ];

  const [page, setPage] = useState(1);
  const [openCreateProductModal, setOpenCreateProductModal] = useState(false);

  const handleCreateProduct = () => {
    setOpenCreateProductModal(!openCreateProductModal);
  };

  return (
    <div className="min-h-[100dvh] pt-[4rem] bg-[#FAF9F6] ">
      <Breadcrumbs />
      <div className="grid grid-cols-4 gap-5 my-2">
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Active Subscribers
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">1,234</h2>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Sales This Month
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">$2.2M</h2>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Pending Orders
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">200</h2>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Outstanding Payouts
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">$2.2M</h2>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className=" p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <div className="flex flex-row items-center justify-between">
            <p className="text-base text-[#B69B64] font-semibold">
              Top 5 Selling Products
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
              <Button
                onClick={handleCreateProduct}
                className="bg-[#B69B64] flex-grow font-semibold border-0 text-sm text-white py-4 cursor-pointer"
              >
                <Plus />
                Add Products
              </Button>
            </div>
          </div>
          <div className="flex items-center">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="!h-[50px] !w-[40%] data-[active]:text-amber-500">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
                <TabsTrigger value="archive">Archive</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <TableView
                  heading={tableHeading}
                  data={products}
                  totalPages={2}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                  onEdit={(row) => console.log("Edit", row)}
                />
              </TabsContent>
              <TabsContent value="active">
                <TableView
                  heading={tableHeading}
                  data={products}
                  totalPages={2}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                  onEdit={(row) => console.log("Edit", row)}
                />
              </TabsContent>
              <TabsContent value="drafts">
                <TableView
                  heading={tableHeading}
                  data={products}
                  totalPages={2}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                  onEdit={(row) => console.log("Edit", row)}
                />
              </TabsContent>
              <TabsContent value="archive">
                <TableView
                  heading={tableHeading}
                  data={products}
                  totalPages={2}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                  onEdit={(row) => console.log("Edit", row)}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
