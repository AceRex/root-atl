"use client";
import Breadcrumbs from "@/components/breadcrumbs";
import Container from "@/components/container";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React from "react";

function Security() {
  const router = useRouter();
  return (
    <>
      <Breadcrumbs />
      <Container className="!-my-10 py-12">
        <Card className="w-full px-12">
          <h2 className="text-3xl font-semibold text-center">Security</h2>
          <h2 className="text-lg text-neutral-400 text-center">
            Change Password
          </h2>

          <div className="flex flex-col gap-1">
            <Label>Old Password</Label>
            <Input className="my-2 h-12" />
          </div>
          <div className="flex flex-col gap-1">
            <Label>New Password</Label>
            <Input className="my-2 h-12" />
          </div>
          <div className="w-[30%] mx-auto">
            <Button className="bg-[#B69B64] w-full h-12">Save</Button>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default Security;
