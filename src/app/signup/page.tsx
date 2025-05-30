"use client";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  CalendarIcon,
  Check,
  Eye,
  EyeClosed,
  EyeOff,
  Mail,
  Phone,
  PiggyBankIcon,
  PointerIcon,
  Share2Icon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Page() {
  const [date, setDate] = useState<Date>();
  const [hide, setHide] = useState<boolean>();

  const router = useRouter();

  return (
    <div className="min-h-[100dvh] relative pt-[5rem] lg:pt-[7.5rem] bg-[#FAF9F6]">
      <Container className="lg:px-28 max-sm:!px-0 py-4">
        <div className="bg-white p-12 rounded-lg">
          <div className="text-center">
            <h3 className="font-semibold text-3xl">Sign up</h3>
            <p>
              Already have an account?
              <Link href={"/login"} className="text-[#B69B64]">
                {" "}
                Login now
              </Link>
            </p>
          </div>
          <div className="flex flex-row flex-wrap mt-12">
            <form className="lg:w-[40%] w-full">
              <div className="my-5">
                <label className="ml-1 text-sm">First Name</label>
                <Input className="h-10 mt-1 w-full border border-neutral-300" />
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Last Name</label>
                <Input className="h-10 mt-1 w-full border border-neutral-300" />
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Email</label>
                <div className="relative rounded-lg mt-1 w-full border border-neutral-300">
                  <Input className="h-10 w-full border-0" />
                  <Mail
                    size={20}
                    className="absolute top-2.5 right-3 text-neutral-300"
                  />
                </div>
                <span className="text-xs text-neutral-500">
                  Write your email in this format my@email.com
                </span>
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Phone</label>
                <div className="relative rounded-lg mt-1 w-full border border-neutral-300">
                  <Input className="h-10 w-full border-0" />
                  <Phone
                    size={20}
                    className="absolute top-2.5 right-3 text-neutral-300"
                  />
                </div>
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Date of Birth</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full h-10 mt-1 justify-start text-left font-normal border border-neutral-300",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Unique ID</label>
                <Input className="h-10 mt-1 w-full border border-neutral-300" />
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Password</label>
                <div className="relative rounded-lg mt-1 w-full border border-neutral-300">
                  <Input
                    className="h-10 w-full border-0"
                    type={hide ? "password" : "text"}
                    placeholder="Enter password"
                  />
                  <div
                    onClick={() => setHide(!hide)}
                    className="absolute top-2.5 right-3"
                  >
                    {hide ? (
                      <Eye size={20} className=" text-neutral-300" />
                    ) : (
                      <EyeOff size={20} className=" text-neutral-300" />
                    )}
                  </div>
                </div>
                <div className="flex flex-row items-center flex-wrap gap-3 mt-3">
                  <div className=" px-2 py-1 text-neutral-400 border border-neutral-300 flex flex-row gap-2 items-center justify-between rounded-full">
                    <p className="text-xs">Lowercase</p>
                    <Check size={12} />
                  </div>
                  <div className=" px-2 py-1 text-neutral-400 border border-neutral-300 flex flex-row gap-2 items-center justify-between rounded-full">
                    <p className="text-xs">6 Characters</p>
                    <Check size={12} />
                  </div>
                  <div className=" px-2 py-1 text-neutral-400 border border-neutral-300 flex flex-row gap-2 items-center justify-between rounded-full">
                    <p className="text-xs">Uppercase</p>
                    <Check size={12} />
                  </div>
                  <div className=" px-2 py-1 text-neutral-400 border border-neutral-300 flex flex-row gap-2 items-center justify-between rounded-full">
                    <p className="text-xs">Number</p>
                    <Check size={12} />
                  </div>
                  <div className=" px-2 py-1 text-neutral-400 border border-neutral-300 flex flex-row gap-2 items-center justify-between rounded-full">
                    <p className="text-xs">Special character</p>
                    <Check size={12} />
                  </div>
                </div>
              </div>
              <div className="my-6 flex flex-row items-start gap-2">
                <Checkbox className="h-5 w-5" />
                <p className="text-sm">
                  I acknowledge and agree to Agreement ROOTS ATL, Terms of Use &
                  Privacy Policy.
                </p>
              </div>
              <Button
                type="button"
                onClick={() => router.push("/verify")}
                className="bg-[#B69B64] mt-5 w-full flex-grow font-semibold border-0 text-lg text-white py-6  cursor-pointer"
              >
                Continue
              </Button>
            </form>
            <div className="hidden lg:block lg:w-[60%] px-12 ">
              <div className="rounded-lg p-24 bg-[#F8D8CC] flex flex-col gap-12">
                <div className="flex flex-col justify-center gap-3 text-center items-center">
                  <PointerIcon size={30} />
                  <h4 className="text-lg font-semibold">Subscribe</h4>
                  <p className="text-sm">
                    Make your own work schedule, set your own working hours,
                    work from home, work online - be independent
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3 text-center items-center">
                  <Share2Icon size={30} />
                  <h4 className="text-lg font-semibold">Share</h4>
                  <p className="text-sm">
                    Make your own work schedule, set your own working hours,
                    work from home, work online - be independent
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3 text-center items-center">
                  <PiggyBankIcon size={30} />
                  <h4 className="text-lg font-semibold">Earn</h4>
                  <p className="text-sm">
                    Make your own work schedule, set your own working hours,
                    work from home, work online - be independent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Page;
