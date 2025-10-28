import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="bg-[#faf9f6] w-[100%] h-auto py-12 px-8">{children}</main>
    </SidebarProvider>
  );
}
