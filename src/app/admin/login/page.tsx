"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { useAdminLogin } from "@/services/admin";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useAdminLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      setIsLoading(false);
      return;
    }

    mutate({ email, password });
  };

  return (
    <div className="min-h-screen bg-accent flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-[#B69B64] bg-accent">
          <CardHeader className="space-y-2">
            <div className="flex flex-col justify-center items-center gap-2 mb-4">
              <Image src={Logo} alt="Roots ATL Logo" width={150} height={150} />
              <span className="text-xl font-bold text-[#B69B64]">
                Admin Dashboard
              </span>
            </div>
            <CardTitle className="text-2xl text-primary">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-slate-400">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-red-400">{error}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-500">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-slate-700 placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium  text-neutral-500">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" border-slate-700 placeholder:text-slate-500"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white font-medium"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
