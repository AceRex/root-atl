"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      router.push("/admin/dashboard");
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  return null;
}
