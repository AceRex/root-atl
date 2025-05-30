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
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const [date, setDate] = useState<Date>();
  const [hide, setHide] = useState<boolean>();

  const router = useRouter();

  return (
    <div className="min-h-[100dvh] pt-[5rem] lg:pt-[7.5rem] bg-[#FAF9F6]">
      <Container className="lg:px-28 max-sm:!px-0 py-4">
        <div className="bg-white p-12 rounded-lg">
          <div className="text-center">
            <h3 className="font-semibold text-3xl">Log In</h3>
            <p>Enter your credentials to access your account</p>
          </div>
          <div className="flex flex-row flex-wrap justify-center mt-12">
            <form className="lg:w-[40%] w-full">
              <div className="my-5">
                <label className="ml-1 text-sm">Email</label>
                <div className="relative rounded-lg mt-1 w-full border border-neutral-300">
                  <Input className="h-10 w-full border-0" />
                  <Mail
                    size={20}
                    className="absolute top-2.5 right-3 text-neutral-300"
                  />
                </div>
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
              </div>
              <div className="my-6 flex flex-row items-start justify-between gap-2">
                <div className="flex flex-row items-center gap-4">
                  <Checkbox className="h-5 w-5" />
                  <p className="text-sm font-semibold">
                    Remember me for 30 days
                  </p>
                </div>
                <p className="text-sm">
                  <Link href={"/"} className=" text-[#B69B64]">
                    Forgot password?
                  </Link>
                </p>
              </div>
              <Button
                type="button"
                onClick={() => router.push("/verify")}
                className="bg-[#B69B64] mt-5 w-full flex-grow font-semibold border-0 text-lg text-white py-6 cursor-pointer"
              >
                Log into account
              </Button>
              {/* <div className="flex flex-row my-6 items-center gap-4">
                <div className="border-t border-t-neutral-200 flex-grow"></div>
                <p>or</p>
                <div className="border-t border-t-neutral-200 flex-grow"></div>
              </div>
              <Button className="bg-white mt-5 w-full flex-grow font-semibold border border-neutral-300 text-lg text-white py-6">
                Log into account
              </Button>
              <Button className="bg-white mt-5 w-full flex-grow font-semibold border border-neutral-300 text-lg text-white py-6">
                Log into account
              </Button> */}
              <div className="text-center mt-4">
                <p>
                  Are you new here?
                  <Link href={"/signup"} className="text-[#B69B64]">
                    {" "}
                    Create account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Page;
