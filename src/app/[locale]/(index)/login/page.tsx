"use client";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

function Page() {
  const [hide, setHide] = useState<boolean>();

  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="min-h-[100dvh] pt-[5rem] lg:pt-[7.5rem] bg-[#FAF9F6]">
      <Container className="lg:px-28 max-sm:!px-0 py-4">
        <div className="bg-white w-full lg:p-24 p-4 rounded-lg">
          <div className="text-center">
            <h3 className="font-semibold text-3xl">{t("login.heading")}</h3>
            <p>{t("login.subHeading")}</p>
          </div>
          <div className="flex flex-row flex-wrap justify-center mt-12">
            <form className="lg:w-[40%] w-full">
              <div className="my-5">
                <label className="ml-1 text-sm">{t("login.email")}</label>
                <div className="relative rounded-lg mt-1 w-full border border-neutral-300">
                  <Input className="h-10 w-full border-0" />
                  <Mail
                    size={20}
                    className="absolute top-2.5 right-3 text-neutral-300"
                  />
                </div>
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">{t("login.password")}</label>
                <div className="relative rounded-lg mt-1 w-full border border-neutral-300">
                  <Input
                    className="h-10 w-full border-0"
                    type={hide ? "password" : "text"}
                    placeholder={t("login.placeholderPassword")}
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
                    {t("login.rememberMe")}
                  </p>
                </div>
                <p className="text-sm">
                  <Link href={"/"} className=" text-[#B69B64]">
                    {t("login.forgotPassword")}
                  </Link>
                </p>
              </div>
              <Button
                type="button"
                onClick={() => router.push("/verify")}
                className="bg-[#B69B64] mt-5 w-full flex-grow font-semibold border-0 text-lg text-white py-6 cursor-pointer"
              >
                {t("login.button")}
              </Button>

              <div className="text-center mt-4">
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
