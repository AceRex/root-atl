import Breadcrumbs from "@/components/breadcrumbs";
import Container from "@/components/container";
import ReferralTree from "@/components/referralTree";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal } from "lucide-react";
import React from "react";

function MyTeam() {
  return (
    <>
      <Breadcrumbs />
      <Container className="!-my-10">
        <Card className="w-full py-12">
          <h2 className="text-3xl font-semibold text-center">Team Overview</h2>
          <div className="flex flex-row items-center w-[90%] mx-auto">
            <div className="border-y py-8 w-1/3 flex flex-col justify-center text-center">
              <p className="uppercase text-neutral-400 text-sm text-semibold">
                total Team size
              </p>
              <p className="text-3xl">20</p>
            </div>
            <div className="border-y border-x py-8 w-1/3 flex flex-col justify-center text-center">
              <p className="uppercase text-neutral-400 text-sm text-semibold">
                Active
              </p>
              <p className="text-3xl">20</p>
            </div>
            <div className="border-y py-8 w-1/3 flex flex-col justify-center text-center">
              <p className="uppercase  text-neutral-400 text-sm text-semibold">
                salesthis month
              </p>
              <p className="text-3xl">20</p>
            </div>
          </div>
          <CardContent>
            <ReferralTree />

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

export default MyTeam;
