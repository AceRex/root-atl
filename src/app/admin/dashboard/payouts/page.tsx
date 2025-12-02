"use client";
import { Modal } from "@/components/modal";
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
import { MagnifyingGlassIcon, TrayArrowUpIcon } from "@phosphor-icons/react";
import { Plus, SlashIcon } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DotsThreeVerticalIcon } from "@phosphor-icons/react/dist/ssr";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

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
            Payouts & Commission
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
          className={`px-3 py-1 text-xs rounded-full ${
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
        <span className="cursor-pointer">
          <Button
            variant="outline"
            className="border border-neutral-500 px-3 py-1"
          >
            Approve
          </Button>
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
            Total Payouts
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">$5.2M</h2>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Pending Payouts
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">$2.2M</h2>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Active Earners
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">200</h2>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Commissions Rate
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">12%</h2>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className=" p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <div className="flex flex-row items-center justify-end">
            <div className="flex flex-row items-center gap-3">
              <Button
                onClick={handleCreateProduct}
                className="bg-[#B69B64] flex-grow font-semibold border-0 text-sm text-white py-4 cursor-pointer"
              >
                <Plus />
                Process Payouts
              </Button>
            </div>
          </div>
          <div className="flex items-center">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="!h-[50px] !w-[40%] ">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <TableView
                  heading={tableHeading}
                  data={products}
                  totalPages={2}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                />
              </TabsContent>
              <TabsContent value="pending">
                <TableView
                  heading={tableHeading}
                  data={products}
                  totalPages={2}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                />
              </TabsContent>
              <TabsContent value="completed">
                <TableView
                  heading={tableHeading}
                  data={products}
                  totalPages={2}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Modal
        open={openCreateProductModal}
        onOpenChange={setOpenCreateProductModal}
        heading="Create New Product"
        description="Enter the details of the new product."
        className="min-w-xl"
      >
        <form className="py-4 w-full flex flex-col gap-4">
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Product name
              </label>
              <Input
                type="text"
                placeholder="product name"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                SKU
              </label>
              <Input
                type="text"
                placeholder="SKU"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Memory Price
              </label>
              <Input
                type="number"
                placeholder="0.00"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Retail Price
              </label>
              <Input
                type="text"
                placeholder="SKU"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Category
              </label>
              <Select>
                <SelectTrigger className="w-full !h-10 border-slate-700">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Description
              </label>
              <Input
                type="text"
                placeholder="description"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Inventory Quantity
              </label>
              <Input
                type="number"
                placeholder="0"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Product Image
              </label>
              <div className="border-slate-700 flex flex-col h-40 p-2 w-full border rounded-lg items-center justify-center">
                <TrayArrowUpIcon
                  weight="duotone"
                  size={35}
                  className="text-[#B69B64]"
                />
                <p className="text-sm text-neutral-400">
                  Drag and drop images here or click to upload
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row gap-8 items-center justify-between">
            <Button
              variant={"outline"}
              onClick={handleCreateProduct}
              className="flex-grow border font-semibold text-sm text-neutral-700 py-4 cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateProduct}
              className="bg-[#B69B64] flex-grow font-semibold border-0 text-sm text-white py-4 cursor-pointer"
            >
              Add Products
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Page;
