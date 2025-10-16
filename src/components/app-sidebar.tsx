"use client";
import {
  BadgeDollarSign,
  Box,
  BriefcaseBusinessIcon,
  Calendar,
  ChartCandlestickIcon,
  Grip,
  Home,
  Inbox,
  MenuIcon,
  School,
  Search,
  Settings,
  ShieldHalf,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Grip,
  },
  {
    title: "My business",
    url: "/dashboard/my-business",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Order management",
    url: "/dashboard/order-management",
    icon: Box,
  },
  {
    title: "My Sales",
    url: "/dashboard/my-sales",
    icon: BadgeDollarSign,
  },
  {
    title: "Marketplace Access",
    url: "/dashboard/marketplace-access",
    icon: ChartCandlestickIcon,
  },
  {
    title: "Track my team",
    url: "/dashboard/my-team",
    icon: ShieldHalf,
  },
  {
    title: "Training vault",
    url: "/dashboard/training",
    icon: School,
  },
  {
    title: "Profile settings",
    url: "/dashboard/profile",
    icon: User2,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="py-[8rem]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="py-[2rem]">
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={cn(
                      "py-1 rounded-lg transition-colors"
                    )}
                  >
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        "w-full",
                        isActive &&
                          "bg-primary text-primary font-medium hover:bg-primary"
                      )}
                    >
                      <a href={item.url}>
                        <item.icon className={cn(isActive && "text-primary")} />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
