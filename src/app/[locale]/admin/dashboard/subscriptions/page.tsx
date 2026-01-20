"use client";
import { Modal } from "@/components/modal";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import {
  EnvelopeIcon,
  NoteIcon,
  PenIcon,
  TrashIcon,
  TrayArrowUpIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Plus, SlashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
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
            Subscription plans
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function Page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("here");
  };
  return (
    <div className="min-h-[100dvh] pt-[4rem] bg-[#FAF9F6] ">
      <Breadcrumbs />
      <div className="w-full flex justify-end mb-4">
        <div className="w-[3xl] flex flex-row items-center gap-3">
          <div className="px-2 hidden md:flex items-center  flex-row gap-2 border border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm">
            <MagnifyingGlassIcon size={25} color="#667185" />
            <Input
              type="text"
              className="border-none outline-none ring-0 focus:outline-none focus:border-none focus:ring-0"
              placeholder="Search for products..."
            />
          </div>
          <Button
            onClick={() => setOpen(!open)}
            className="bg-[#B69B64] flex-grow font-semibold border-0 text-sm text-white py-4 cursor-pointer"
          >
            <Plus size={25} />
            Create new Plan
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 my-2">
        <div className="flex flex-col gap-4 rounded-lg bg-white border border-neutral-300 p-6">
          <div className="flex flex-row items-center justify-between gap-4">
            <h5
              className={cn(
                "font-bold text-3xl text-neutral-800 tracking-tight"
              )}
            >
              Starter Plan
            </h5>
            <div className="flex flex-row gap-2 text-neutral-600">
              <PenIcon size={30} />
              <TrashIcon size={30} />
            </div>
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
            <div className="bg-neutral-800 text-white px-4 py-2  rounded-lg">
              <h4>Plan Benefits</h4>
            </div>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>Full Access to product catalog</li>
              <li>Level 3 commissions</li>
              <li>Priority customer support</li>
            </ul>
          </div>
          <p>
            Subscribers: <span className="font-semibold">500</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-white border border-neutral-300 p-6">
          <div className="flex flex-row items-center justify-between gap-4">
            <h5
              className={cn("font-bold text-3xl text-[#B69B64] tracking-tight")}
            >
              Growth Plan
            </h5>
            <div className="flex flex-row gap-2 text-neutral-600">
              <PenIcon size={30} />
              <TrashIcon size={30} />
            </div>
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
          </div>
          <p>
            Subscribers: <span className="font-semibold">500</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-[#B69B64] p-6">
          <div className="flex flex-row items-center justify-between gap-4">
            <h5 className={cn("font-bold text-3xl text-white tracking-tight")}>
              Pro Plan
            </h5>
            <div className="flex flex-row gap-2 text-white">
              <PenIcon size={30} />
              <TrashIcon size={30} />
            </div>
          </div>
          <p className="text-7xl font-bold tracking-tight text-white">
            $2k
            <span className="text-lg font-medium tracking-normal text-neutral-50">
              {" "}
              /month
            </span>
          </p>
          <p className=" -mt-4 font-medium tracking-normal text-neutral-50">
            Renews on 30th, June 2026
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <div className="bg-white text-[#B69B64] px-4 py-2  rounded-lg">
              <h4>Plan Benefits</h4>
            </div>
            <ul className="list-disc list-inside flex flex-col gap-2 text-white">
              <li>Full Access to product catalog</li>
              <li>Level 3 commissions</li>
              <li>Priority customer support</li>
            </ul>
          </div>
          <p className="text-white">
            Subscribers: <span className="font-semibold">500</span>
          </p>
        </div>
      </div>
      <Modal
        open={open}
        onOpenChange={setOpen}
        heading="Create a New Plan"
        description="Create a new subscription."
        className="min-w-xl"
      >
        <form className="py-4 w-full flex flex-col gap-4">
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Plan Name
              </label>
              <Input
                type="text"
                placeholder="e.g Basic"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-neutral-300 h-10 w-full placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Monthly Price ($)
              </label>
              <Input
                type="text"
                placeholder="12000"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-neutral-300 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Product Access Limits
              </label>
              <Input
                type="text"
                placeholder="All Products"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-neutral-300 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Level 1 (%)
              </label>
              <Input
                type="number"
                placeholder="10"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-neutral-300 h-10 w-full placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Level 2 (%)
              </label>
              <Input
                type="number"
                placeholder="10"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-neutral-300 h-10 w-full placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Level 3 (%)
              </label>
              <Input
                type="number"
                placeholder="10"
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                className="border-neutral-300 h-10 w-full placeholder:text-slate-500"
              />
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
              onClick={() => setOpen(!open)}
              className="flex-grow border font-semibold text-sm text-neutral-700 py-4 cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={handleOpenModal}
              className="bg-[#B69B64] flex-grow font-semibold border-0 text-sm text-white py-4 cursor-pointer"
            >
              Add Plan
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Page;
