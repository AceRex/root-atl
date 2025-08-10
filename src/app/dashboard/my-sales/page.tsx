import Breadcrumbs from "@/components/breadcrumbs";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal } from "lucide-react";
import React from "react";

function MySales() {
  return (
    <>
      <Breadcrumbs />
      <Container className="!-my-10">
        <Card className="w-full">
          <h2 className="text-3xl font-semibold text-center">My Sales</h2>
          <div className="flex flex-row items-center w-[90%] mx-auto">
            <div className="border-y py-8 w-1/4 flex flex-col justify-center text-center">
              <p className="uppercase text-neutral-400 text-sm text-semibold">
                total sales
              </p>
              <p className="text-3xl">0 BP</p>
            </div>
            <div className="border-y border-x py-8 w-1/4 flex flex-col justify-center text-center">
              <p className="uppercase text-neutral-400 text-sm text-semibold">
                Active recruits
              </p>
              <p className="text-3xl">$0.00</p>
            </div>
            <div className="border-y border-x py-8 w-1/4 flex flex-col justify-center text-center">
              <p className="uppercase  text-neutral-400 text-sm text-semibold">
                Monthly revenue
              </p>
              <p className="text-3xl">$0.00</p>
            </div>
            <div className="border-y py-8 w-1/4 flex flex-col justify-center text-center">
              <p className="uppercase  text-neutral-400 text-sm text-semibold">
                points gained
              </p>
              <p className="text-3xl">$0.00</p>
            </div>
          </div>
          <CardContent>
            <div className="flex items-center gap-3 w-[70%] mx-auto mb-6">
              <Input
                placeholder="Search here 60+ products..."
                className="h-12"
              />
              <Button variant="outline" className="h-12">
                <SlidersHorizontal />
              </Button>
            </div>

            <div className="text-center text-slate-500 py-12">
              You have not yet placed any orders, when you have they will be
              shown here.
            </div>
          </CardContent>
          <div className="w-[10%] mx-auto">
            <Button variant="ghost" className="border">
              Continue shopping
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default MySales;
