"use client";
import Container from "@/components/container";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";

function Page() {
  const [date, setDate] = useState<Date>();
  const [hide, setHide] = useState<boolean>();

  return (
    <div className="min-h-[100dvh] pt-[5rem] lg:pt-[7.5rem] bg-[#FAF9F6]">
      <Container className="lg:px-28 max-sm:!px-0 py-4">
        <div className="bg-white p-24 rounded-lg">
          <div className="text-center">
            <h3 className="font-semibold text-3xl">Verify your email</h3>
            <p className="w-[50%] mx-auto">
              To continue with the registration please verify your email. A code
              was sent to ekpobiyeremark@gmail.com you can enter it below
            </p>
          </div>
          <div className="flex flex-row w-[40%] mx-auto justify-center mt-12">
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} className="h-16 w-16 text-xl" />
                <InputOTPSlot index={1} className="h-16 w-16 text-xl" />
                <InputOTPSlot index={2} className="h-16 w-16 text-xl" />
                <InputOTPSlot index={3} className="h-16 w-16 text-xl" />
                <InputOTPSlot index={4} className="h-16 w-16 text-xl" />
                <InputOTPSlot index={5} className="h-16 w-16 text-xl" />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <p className="mt-8 text-center">
            Don’t get Email
            <span className="text-[#E98129]"> Send again</span>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Page;
