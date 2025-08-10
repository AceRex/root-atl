import Breadcrumbs from "@/components/breadcrumbs";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

function Checkout() {
  return (
    <>
      <Breadcrumbs />
      <Container className="flex flex-row gap-10">
        <Container className=" w-full md:w-[60%] !p-0 flex flex-col gap-10">
          <Container className="border rounded-lg !p-6 w-full -m-0">
            <div className="flex flex-row items-center gap-2">
              <h2 className="font-semibold text-xl">Order Summary</h2>
              <div className="rounded-full flex flex-row font-semibold text-xl items-center w-8 h-8 text-white bg-[#B69B64]">
                <p className="m-auto">2</p>
              </div>
            </div>
          </Container>
          <Container className="border flex flex-col gap-6 rounded-lg !p-6 w-full -m-0 bg-white">
            <div className="flex flex-col gap-4 mb-4">
              <h2 className="font-semibold text-xl">Delivery Information</h2>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="w-full flex flex-col gap-2 md:w-1/2">
                <label>First Name</label>
                <Input className="h-12" />
              </div>
              <div className="w-full flex flex-col gap-2 md:w-1/2">
                <label>Last Name</label>
                <Input className="h-12" />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-full">
                <label>Address</label>
                <Input className="h-12" />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-full flex flex-col gap-2 md:w-1/2">
                <label>City/Town</label>
                <Input className="h-12" />
              </div>
              <div className="w-full flex flex-col gap-2 md:w-1/2">
                <label>Zip Code</label>
                <Input className="h-12" />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-full flex flex-col gap-2 md:w-1/2">
                <label>Mobile Number</label>
                <Input className="h-12" />
              </div>
              <div className="w-full flex flex-col gap-2 md:w-1/2">
                <label>Email address</label>
                <Input className="h-12" />
              </div>
            </div>
          </Container>
        </Container>
        <Container className="border rounded-lg !p-8 w-full md:w-[40%]">
          <div className="flex flex-row items-center p-2">
            <h2 className="font-semibold text-xl">Payment Information</h2>
            <div className="rounded-full"></div>
          </div>
          <div className="m-auto flex flex-col gap-2 p-4 border-b ">
            <h3 className="font-semibold">Apply Discount</h3>
            <div className="flex flex-row items-center gap-3">
              <Input
                className="h-12 rounded-4xl"
                placeholder="Enter coupon code"
              />
              <Button className="h-12 w-[25%] rounded-4xl bg-[#B69B64] text-white">
                Apply
              </Button>
            </div>
          </div>
          <div className="m-auto flex flex-col gap-4 p-4 border-b">
            <h3 className="font-semibold">Pay With</h3>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one" className="text-base">
                  Debit or Credit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two" className="text-base">
                  Pay on Delivery
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="m-auto flex flex-col gap-4 p-4 border-b">
            <h3 className="font-semibold">Enter Card Information</h3>
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="pay-on-delivery" className="text-base">
                Cardholder Name
              </Label>
              <Input className="h-12" name="pay-on-delivery" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="card-number" className="text-base">
                Card Number
              </Label>
              <Input className="h-12" name="card-number" />
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-full flex flex-col gap-2 md:w-1/2">
                <Label htmlFor="card-number" className="text-base">
                  Expiry Date
                </Label>
                <Input className="h-12" />
              </div>
              <div className="w-full flex flex-col gap-2 md:w-1/2">
                <Label htmlFor="card-number" className="text-base">
                  CVV
                </Label>
                <Input className="h-12" />
              </div>
            </div>
          </div>
          <div className="m-auto flex flex-col gap-4 p-4 border-b">
            <div className="w-full flex flex-flex items-center justify-between gap-2">
              <Label htmlFor="card-number" className="text-base">
                Sub Total
              </Label>
              <p>$549.00</p>
            </div>
            <div className="w-full flex flex-flex items-center justify-between gap-2">
              <Label htmlFor="card-number" className="text-base">
                Tax (10%)
              </Label>
              <p>$54.00</p>
            </div>
            <div className="w-full flex flex-flex items-center justify-between gap-2">
              <Label htmlFor="card-number" className="text-base">
                Shipping
              </Label>
              <p>$0.00</p>
            </div>
          </div>
          <div className="m-auto flex flex-row items-center justify-between gap-4 p-4">
            <Label htmlFor="card-number" className="text-base">
              Total
            </Label>
            <p className="font-semibold text-lg">$250.32</p>
          </div>
          <Button className="h-12 w-full m-auto rounded-4xl text-xl bg-[#B69B64] text-white">
            $250.32
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default Checkout;
