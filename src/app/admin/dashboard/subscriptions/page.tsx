"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  EnvelopeIcon,
  NoteIcon,
  PenIcon,
  TrashIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Plus, SlashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

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
  return (
    <div className="min-h-[100dvh] pt-[4rem] bg-[#FAF9F6] ">
      <Breadcrumbs />
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
              <PenIcon size={30}/>
              <TrashIcon size={30}/>
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
              <PenIcon size={30}/>
              <TrashIcon size={30}/>
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
              Growth Plan
            </h5>
            <div className="flex flex-row gap-2 text-white">
              <PenIcon size={30}/>
              <TrashIcon size={30}/>
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
    </div>
  );
}

export default Page;
