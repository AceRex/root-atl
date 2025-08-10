import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

// This is a single-file Next.js page / React component that reproduces the
// dashboard layout shown in the screenshot using Tailwind + shadcn-style components.
// Replace imports with your project's actual component paths if different.

const products = [
  {
    id: 1,
    title: "Root Gut Harmony",
    price: "$95.00",
    img: "/Hero Section (1).png",
  },
  {
    id: 2,
    title: "Root HeartEase Tea",
    price: "$95.00",
    img: "/Hero Section (1).png",
  },
  {
    id: 3,
    title: "Radiant Skin Corrector",
    price: "$95.00",
    img: "/Hero Section (1).png",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F3] text-slate-800">
      <div className="max-w-[1200px] mx-auto flex gap-6 py-8 px-6">
        {/* Sidebar */}
        <aside className="w-64 sticky top-6 h-[calc(100vh-48px)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center font-bold">
              RA
            </div>
            <div>
              <div className="text-sm font-semibold">ROOTS ATL</div>
              <div className="text-xs text-slate-500">Distributor</div>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              "Dashboard",
              "My business",
              "Order management",
              "My Sales",
              "Marketplace Access",
              "Track my team",
              "Training vault",
              "Profile settings",
            ].map((it) => (
              <button
                key={it}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-white/60 hover:shadow-sm text-sm flex items-center gap-3"
              >
                {/* <IconUser className="w-4 h-4 text-amber-600" /> */}
                <span>{it}</span>
              </button>
            ))}
          </nav>

          <div className="mt-6 text-sm text-slate-500">© Roots ATL</div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          {/* Top summary card */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/Hero Section (1).png" alt="avatar" />
                    <AvatarFallback>MA</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-lg font-semibold">Mike Borolls</div>
                    <div className="text-xs text-slate-500">
                      My Upline • ROOTS ATL • BOLA ROOT • Me
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="ghost">Edit</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 py-4">
                {[
                  ["Total Sales", "0 BP"],
                  ["Active Recruits", "$0.00"],
                  ["Monthly Revenue", "$0.00"],
                  ["Points Gained", "$0.00"],
                ].map(([title, value]) => (
                  <div
                    key={String(title)}
                    className="bg-white rounded-md p-4 shadow-sm"
                  >
                    <div className="text-xs text-slate-500">{title}</div>
                    <div className="mt-2 text-lg font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Orders section */}
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">My Orders</h2>
              <Button variant="outline">View more</Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {products.map((p) => (
                <Card key={p.id}>
                  <CardContent>
                    <div className="h-40 w-full relative rounded-md overflow-hidden bg-slate-50">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="mt-3">
                      <div className="font-medium">{p.title}</div>
                      <div className="text-sm text-slate-500">Red Silettos</div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="font-semibold">{p.price}</div>
                        <div className="text-xs text-amber-600">★★★★★</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Share & Earn */}
          <section className="mb-6">
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Share & Earn</h3>
                    <p className="text-sm text-slate-500">
                      Share your invite code or link to anyone you invite to
                      ROOTS ATL.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-900 text-white px-6 py-3 rounded-xl shadow-md">
                      <div className="text-sm">JOIN ROOTS ATL</div>
                      <div className="text-xs mt-1 bg-white/10 px-2 py-1 rounded inline-block">
                        Use code: SC-bolarootsal
                      </div>
                    </div>
                    <Button variant="ghost" className="flex items-center gap-2">
                      {/* <IconShare className="w-4 h-4" /> Copy */}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Perfect Start progress */}
          <section className="mb-6">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">
                  The Perfect Start
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Orders made through your referral link
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-full">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded overflow-hidden">
                        <Progress value={33} className="h-2" />
                      </div>
                      <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                        3
                      </div>
                    </div>

                    <div className="space-x-2">
                      <Button size="sm">TODO</Button>
                      <Button variant="outline" size="sm">
                        COMPLETED
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* What's New */}
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">What's New</h2>
              <Button variant="outline">View more</Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {products.map((p) => (
                <Card key={`new-${p.id}`}>
                  <CardContent>
                    <div className="h-40 w-full relative rounded-md overflow-hidden bg-slate-50">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="mt-3">
                      <div className="font-medium">{p.title}</div>
                      <div className="text-sm text-slate-500">Red Silettos</div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="font-semibold">{p.price}</div>
                        <div className="text-xs text-amber-600">★★★★★</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Order history */}
          <section className="mb-16">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">Order history</h3>
                <div className="flex items-center gap-3 mb-6">
                  <Input placeholder="Search here 60+ products..." />
                  <Button variant="outline">Filter</Button>
                </div>

                <div className="text-center text-slate-500 py-12">
                  You have not yet placed any orders, when you have they will be
                  shown here.
                  <div className="mt-6">
                    <Button variant="ghost">Continue shopping</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
