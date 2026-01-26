"use client";
import { Modal } from "@/components/modal";
import TableView from "@/components/table";
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
import {
  CreditCardIcon,
  InfoIcon,
  NoteIcon,
  TruckIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
            Order & Sales
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
      customer: "Bellow Collins",
      order_id: "#123456",
      category: "Home",
      date: "20/04/2025",
      payment: "Pending",
      shipping_status: "Delivered",
    },
    {
      id: 2,
      customer: "Bellow Collins",
      order_id: "#123456",
      category: "Home",
      date: "20/04/2025",
      payment: "Failed",
      shipping_status: "Cancelled",
    },
    {
      id: 3,
      customer: "Bellow Collins",
      order_id: "#123456",
      category: "Home",
      date: "20/04/2025",
      payment: "Paid",
      shipping_status: "Shipped",
    },
    {
      id: 4,
      customer: "Bellow Collins",
      order_id: "#123456",
      category: "Home",
      date: "20/04/2025",
      payment: "Failed",
      shipping_status: "Delivered",
    },
    {
      id: 5,
      customer: "Bellow Collins",
      order_id: "#123456",
      category: "Home",
      date: "20/04/2025",
      payment: "Paid",
      shipping_status: "Delivered",
    },
  ];
  const tableHeading = [
    {
      key: "order_id",
      label: "Order",
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },
    {
      key: "customer",
      label: "Customer",
      render: (value: any) => <span className="font-medium">{value}</span>,
    },
    {
      key: "category",
      label: "Category",
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },

    {
      key: "date",
      label: "Date",
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },
    {
      key: "payment",
      label: "Payment",
      render: (value: any) => (
        <span
          className={`px-3 py-1 text-xs rounded-full ${
            value === "Paid"
              ? "bg-green-100 text-green-700"
              : value === "Pending"
                ? "bg-amber-200 text-amber-600"
                : "bg-red-100 text-red-700"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "shipping_status",
      label: "Shipping Status",
      render: (value: any) => (
        <span
          className={`px-3 py-1 text-xs rounded-full ${
            value === "Delivered"
              ? "bg-green-100 text-green-700"
              : value === "Shipped"
                ? "bg-purple-200 text-purple-900"
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
      render: (value: any, row: any) => (
        <span className="cursor-pointer">
          <Sheet>
            <SheetTrigger className="border border-neutral-500 px-3 py-1 rounded-lg">
              View
            </SheetTrigger>
            <SheetContent className="min-w-2xl px-8 py-4">
              <div className="flex flex-col gap-12 py-4">
                <div>
                  <div className="flex flex-row justify-between items-center">
                    <p className="font-semibold text-2xl">Order Details</p>
                    <Badge className="bg-emerald-300 p-1 px-4 text-emerald-900">
                      Active
                    </Badge>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-xs text-neutral-500">
                      Apr 26 2025 - example@gmail.com
                    </p>
                    <p className="text-xs text-neutral-500">
                      Customer since, Apr 2023
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg text-neutral-400 my-2">
                  Shipping Address
                </p>
                <div className="bg-neutral-200 p-4 rounded-lg flex flex-col gap-2">
                  <p className="font-semibold text-lg">{row.customer}</p>
                  <p className="text-sm text-neutral-500">example@gmail.com</p>
                  <p className="text-sm text-neutral-700">
                    123 Example street, Lagos
                  </p>
                </div>
              </div>
              <div>
                <p className="text-lg text-neutral-400 my-2">Order Items</p>
                <Table>
                  <TableHeader className="bg-neutral-200 p-2 rounded-t-lg">
                    <TableRow>
                      <TableHead className="w-[40%]">Product</TableHead>
                      <TableHead>Qty</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Starter refresher</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>$120,000</TableCell>
                      <TableCell>$240,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Starter refresher</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>$120,000</TableCell>
                      <TableCell>$240,000</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter className="bg-neutral-100">
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>SubTotal</TableCell>
                      <TableCell>$480,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>Shipping</TableCell>
                      <TableCell>$1,400</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell>$481,400</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <div className="w-1/2 ">
                  <p className="text-lg text-neutral-400 my-2">
                    Payment information
                  </p>
                  <div className="bg-neutral-100 p-8 rounded-lg">
                    <div className="flex flex-row items-center justify-between mb-4">
                      <CreditCardIcon size={30} />
                      <Badge className="bg-emerald-300 p-1 px-4 !text-xs text-emerald-900">
                        Paid
                      </Badge>
                    </div>
                    <p className="text-lg font-semibold my-2">
                      Visa ending with 1290
                    </p>
                    <p className="text-sm text-neutral-500">
                      Processed on 24 Apr 2025
                    </p>
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="text-lg text-neutral-400 my-2">
                    Shipping Status
                  </p>
                  <div className="bg-neutral-100 p-8 rounded-lg">
                    <div className="flex flex-row items-center justify-between mb-4">
                      <TruckIcon size={30} />
                      <Badge className="bg-emerald-300 p-1 px-4 !text-xs text-emerald-900">
                        Delivered
                      </Badge>
                    </div>
                    <p className="text-lg font-semibold my-2">
                      Visa ending with 1290
                    </p>
                    <p className="text-sm text-neutral-500">
                      Estimate delivery 23 Apr 2025
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg text-neutral-400 my-2">Action Payments</p>
                <div className="flex flex-row flex-wrap gap-3">
                  <Button
                    variant="outline"
                    className="border border-red-600 p-2 flex flex-row cursor-pointer"
                  >
                    <XIcon className="text-red-600" />
                    <span className="text-red-600">Cancel Order</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border border-blue-600 p-2 flex flex-row cursor-pointer"
                  >
                    <InfoIcon className="text-blue-600" />
                    <span className="text-blue-600">Issue refund</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border border-neutral-500 p-2 flex flex-row cursor-pointer"
                  >
                    <InfoIcon />
                    <span>Manual fulfil</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border border-neutral-500 p-2 flex flex-row cursor-pointer"
                  >
                    <TruckIcon />
                    <span>Sync with Delivery Partner</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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
      <div className="my-4">
        <div className=" p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <div className="flex flex-row items-end justify-end">
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
                <NoteIcon size={25} />
                Generate Sales Report
              </Button>
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
      <Modal
        open={openCreateProductModal}
        onOpenChange={setOpenCreateProductModal}
        heading="Create New Product"
        description="Enter the details of the new product."
        className="min-w-xl"
      >
        <form className="w-full flex flex-col gap-4">
          <div className="flex w-full flex-row gap-4 items-center">
            <div className=" w-full">
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
            <div className="w-full">
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
            <div className="w-full">
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
            <div className="w-full">
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
            <div className="w-full">
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
            <div className="w-full">
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
            <div className="w-full">
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
            <div className="w-full">
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
