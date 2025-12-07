"use client";
import Breadcrumbs from "@/components/breadcrumbs";
import Container from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  CircleUserIcon,
  LandmarkIcon,
  Settings,
  Settings2,
  ShieldUserIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function Profile() {
  const router = useRouter();
  return (
    <>
      <Breadcrumbs />
      <Container className="!-my-10">
        <Card className="w-full px-12">
          <h2 className="text-3xl font-semibold text-center">Settings</h2>
          <div className="flex flex-row gap-2">
            <Settings fontWeight={10} />
            <p>Profile strength low</p>
          </div>
          <div className="relative my-2">
            <Progress value={33} className="w-full h-2" />
            <div
              className="absolute top-0 left-0 h-2 rounded-full transition-all duration-300 bg-[#B69B64]"
              style={{ width: `${33}%` }}
            />
          </div>
          <div className="text-xl text-neutral-400 font-light">
            Complete your profile in just a few steps
          </div>
          <CardContent className="grid grid-cols-2 gap-8">
            <Card
              onClick={() => router.push("/dashboard/profile/general")}
              className="flex flex-col rounded-2xl gap-3 p-8 cursor-pointer"
            >
              <Settings size={40} />
              <h4 className="text-xl font-semibold">General Settings</h4>
              <p className=" text-neutral-500">Name, profile picture, bio</p>
            </Card>
            <Card
              onClick={() => router.push("/dashboard/profile/payment")}
              className="flex flex-col rounded-2xl gap-3 p-8 cursor-pointer"
            >
              <LandmarkIcon size={40} />
              <h4 className="text-xl font-semibold">Payment Method</h4>
              <p className=" text-neutral-500">
                Add/edit bank account info, recurring card
              </p>
            </Card>
            <Card
              onClick={() => router.push("/dashboard/profile/contact")}
              className="flex flex-col rounded-2xl gap-3 p-8 cursor-pointer"
            >
              <CircleUserIcon size={40} />
              <h4 className="text-xl font-semibold">Contact</h4>
              <p className=" text-neutral-500">
                Address, phone, email, social media
              </p>
            </Card>
            <Card
              onClick={() => router.push("/dashboard/profile/security")}
              className="flex flex-col rounded-2xl gap-3 p-8 cursor-pointer"
            >
              <ShieldUserIcon size={40} />
              <h4 className="text-xl font-semibold">Security</h4>
              <p className=" text-neutral-500">Password, pin code</p>
            </Card>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Profile;
