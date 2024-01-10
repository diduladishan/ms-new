import Sidebar from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { SidebarNav } from "./components/sidebar-nav";
import { sidebarNavItems } from "@/constants/sidebarNavItems";

export const metadata: Metadata = {
  title: "Settings",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="container flex w-full mx-auto">
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and appearance preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="bg-slate-50 p-5 rounded-lg dark:bg-gray-800/40 -mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-screen-2xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
