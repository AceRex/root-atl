"use client";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useLoginUser, Login, useResetPassword } from "@/services/user";
import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/store";

function Page() {
  const [hide, setHide] = useState<boolean>(true);

  const router = useRouter();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const { mutate: resetPassword, isPending } = useResetPassword();
  const { setForgotPassword } = useAuthStore();

  const onSubmit: SubmitHandler<Login> = (data) => {
    resetPassword(data);
    setForgotPassword(true);
  };

  return (
    <div className="min-h-[100dvh] pt-[5rem] lg:pt-[7.5rem] bg-[#FAF9F6]">
      <Container className="lg:px-28 max-sm:!px-0 py-4">
        <div className="bg-white min-h-[600px] flex flex-col justify-center w-full lg:p-12 p-4 rounded-lg space-y-6">
          <div className="text-center">
            <h3 className="font-semibold text-[30px]">
              {t("forgotPassword.heading")}
            </h3>
            <p className="text-[16px]">{t("forgotPassword.subHeading")}</p>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-[40%] w-full"
            >
              <div className="my-5">
                <label className="ml-1 text-sm">{t("login.email")}</label>
                <div
                  className={cn(
                    "relative rounded-lg mt-1 w-full border border-neutral-300",
                    errors.email && "border-red-600",
                  )}
                >
                  <Input
                    {...register("email", {
                      required: t("login.emailRequired") || "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="h-10 w-full border-0"
                    placeholder="example@email.com"
                  />
                  <Mail
                    size={20}
                    className={cn(
                      "absolute top-2.5 right-3 text-neutral-300",
                      errors.email && "text-red-600",
                    )}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-600 text-xs text-start block mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                disabled={isPending}
                className="bg-[#B69B64] mt-5 w-full flex-grow font-semibold border-0 text-[14px] text-white py-6 cursor-pointer hover:bg-[#A58B54] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Loading..." : t("forgotPassword.button")}
              </Button>

              <div className="text-center text-sm mt-4">
                <p>
                  {t("login.newHere")}
                  <Link href={"/signup"} className="text-[#B69B64]">
                    {" "}
                    {t("login.createAccount")}
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
