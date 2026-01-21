"use client";
import Container from "@/components/container";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useVerifyUser } from "@/services/user";
import { Loader2Icon } from "lucide-react";

function Page() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const { mutate, isPending } = useVerifyUser();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <div className="min-h-[100dvh] pt-[5rem] lg:pt-[8rem] bg-[#FAF9F6]">
      <Container className="lg:px-28 max-sm:!px-0 py-4 lg:py-24">
        <div className="bg-white w-full p-24 rounded-lg">
          <div className="text-center">
            <h3 className="font-semibold text-3xl">{t("verify.heading")}</h3>
            <p className="w-[50%] mx-auto">
              {t("verify.subHeading", { email })}
            </p>
          </div>
          <div className="flex flex-row w-[40%] mx-auto justify-center mt-12">
            {!isPending ? (
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
                onComplete={(value) => mutate({ code: value })}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="h-16 w-16 text-xl" />
                  <InputOTPSlot index={1} className="h-16 w-16 text-xl" />
                  <InputOTPSlot index={2} className="h-16 w-16 text-xl" />
                  <InputOTPSlot index={3} className="h-16 w-16 text-xl" />
                  <InputOTPSlot index={4} className="h-16 w-16 text-xl" />
                  <InputOTPSlot index={5} className="h-16 w-16 text-xl" />
                </InputOTPGroup>
              </InputOTP>
            ) : (
              <Loader2Icon color="#B69B64" className="animate-spin" size={24} />
            )}
          </div>

          <p className="mt-8 text-center">
            {t("verify.didntReceiveCode")}
            <span className="text-[#E98129]"> {t("verify.resendCode")}</span>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Page;
