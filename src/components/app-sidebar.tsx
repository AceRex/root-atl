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

// Admin Menu items.
const AdminItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Grip,
  },
  {
    title: "Users & Sellers",
    url: "/admin/dashboard/users",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Subscription Plans",
    url: "/admin/dashboard/subscriptions",
    icon: Box,
  },
  {
    title: "Order Sales",
    url: "/admin/dashboard/order",
    icon: BadgeDollarSign,
  },
  {
    title: "Referral Network",
    url: "/admin/dashboard/referral",
    icon: ChartCandlestickIcon,
  },
  {
    title: "Products & Inventory",
    url: "/admin/dashboard/products",
    icon: ShieldHalf,
  },
  {
    title: "Payouts & Commission",
    url: "/admin/dashboard/payouts",
    icon: School,
  },
  {
    title: "Training & Content",
    url: "/admin/dashboard/training",
    icon: User2,
  },
  {
    title: "Support Tickets",
    url: "/admin/dashboard/support",
    icon: User2,
  },
  {
    title: "Website CMS Editor",
    url: "/admin/dashboard/website-cms",
    icon: User2,
  },
  {
    title: "Email Marketing",
    url: "/admin/dashboard/email-marketing",
    icon: User2,
  },
  {
    title: "Settings & Integrations",
    url: "/admin/dashboard/setting",
    icon: User2,
  },
  {
    title: "Admin Activity Logs",
    url: "/admin/dashboard/admin-activity-logs",
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
                    className={cn("py-1 rounded-lg transition-colors")}
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
export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="py-[4rem]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="py-[2rem]">
              {AdminItems.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={cn("py-1 rounded-lg transition-colors")}
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
