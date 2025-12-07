"use client";
import Breadcrumbs from "@/components/breadcrumbs";
import Container from "@/components/container";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Payment() {
  const router = useRouter();
  const [display, setDisplay] = useState("bank-account");
  return (
    <>
      <Breadcrumbs />
      <Container className="!-my-10 py-12">
        <Card className="w-full px-12">
          <h2 className="text-3xl font-semibold text-center">Payment</h2>
          <h2 className="text-lg text-neutral-400 text-center">
            Below is your payment information
          </h2>
          <div className="flex w-[50%] mx-auto bg-neutral-100 p-2 rounded-full overflow-hidden mb-6">
            <button
              onClick={() => setDisplay("bank-account")}
              className={`${
                display === "bank-account" && "bg-white rounded-full shadow"
              }px-6 py-4 w-1/2 text-sm font-medium`}
            >
              Bank Account
            </button>
            <button
              onClick={() => setDisplay("paypal")}
              className={`${
                display === "paypal" && "bg-white rounded-full shadow"
              }px-6 py-4 w-1/2 text-sm font-medium`}
            >
              Paypal
            </button>
          </div>
          {display === "bank-account" ? (
            <div>
              <h2 className="text-3xl font-semibold text-center">
                Bank Account
              </h2>
              <div className="w-[80%] py-12 mx-auto">
                <div className="my-2 flex flex-col gap-1">
                  <Label>BIC/SWIFT code*</Label>
                  <Input className="my-2 h-12" />
                </div>
                <div className="my-2 flex flex-col gap-1">
                  <Label>IBAN*</Label>
                  <Input className="my-2 h-12" />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-semibold text-center">
                Paypal account
              </h2>
              <div className="w-[80%] py-12 mx-auto">
                <div className="my-2 flex flex-col gap-1">
                  <Label>BIC/SWIFT code*</Label>
                  <Input className="my-2 h-12" />
                </div>
                <div className="my-2 flex flex-col gap-1">
                  <Label>IBAN*</Label>
                  <Input className="my-2 h-12" />
                </div>
              </div>
            </div>
          )}
          <div className="w-[30%] mx-auto">
            <Button className="bg-[#B69B64] w-full h-12">Save</Button>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default Payment;
