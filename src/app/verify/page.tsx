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
      <Container className="px-28 py-12">
        <div className="bg-white p-12 rounded-lg">
          <div className="text-center">
            <h3 className="font-semibold text-3xl">Verify your email</h3>
            <p>
              To continue with the registration please verify your email. A code
              was sent to ekpobiyeremark@gmail.com you can enter it below
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-center mt-12">
            <form className="w-[40%]">
              <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Page;
