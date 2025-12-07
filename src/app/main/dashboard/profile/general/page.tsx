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

function General() {
  const router = useRouter();
  return (
    <>
      <Breadcrumbs />
      <Container className="!-my-10">
        <Card className="w-full px-12">
          <h2 className="text-3xl font-semibold text-center">
            General Settings
          </h2>
          <CardContent className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <Label>First Name</Label>
              <Input className="my-2 h-12" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Last Name</Label>
              <Input className="my-2 h-12" />
            </div>
          </CardContent>
          <CardContent className="">
            <div className="flex flex-col gap-1">
              <Label>Bio</Label>
              <Input className="my-2 h-24" />
            </div>
          </CardContent>
          <CardContent className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <Label>First Name</Label>
              <Select>
                <SelectTrigger className=" my-2 w-full h-12">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <Label>Date of Birth</Label>
              <div className="my-2 w-full">
                <DatePicker />
              </div>
            </div>
          </CardContent>
          <CardContent className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <Label>ID type</Label>
              <Select>
                <SelectTrigger className=" my-2 w-full h-12">
                  <SelectValue placeholder="Id type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nin">NIN</SelectItem>
                  <SelectItem value="drivers-license">
                    Drivers license
                  </SelectItem>
                  <SelectItem value="voters-card">Voters card</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <Label>ID number</Label>
              <Input className="my-2 h-12" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>ID expiry Date</Label>
              <div className="my-2 w-full">
                <DatePicker />
              </div>
            </div>
          </CardContent>
          <div className="w-[30%] mx-auto">
            <Button className="bg-[#B69B64] w-full h-12">Save</Button>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default General;
