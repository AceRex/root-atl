"use client";

import { AdminAuthProvider } from "@/providers/adminProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../main/views/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <html>
      <body className={`${inter.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <AdminAuthProvider>
            <Header />
            {children}
          </AdminAuthProvider>
          <Toaster position="top-center" richColors />
        </QueryClientProvider>
      </body>
    </html>
  );
}
