"use client";

import { BarChart2, BookOpen, GitBranch, Home, QrCode, RotateCw } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { NavSection } from "./nav-section";

// Menu items.
const data = {
  navMain: [
    {
      name: "Home",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      name: "Primer",
      url: "/primer",
      icon: BookOpen,
      isActive: true,
    },
    {
      name: "HMM Model",
      url: "/hmm",
      icon: BarChart2,
      isActive: true,
    },
    {
      name: "Tree Model",
      url: "/tree",
      icon: GitBranch,
      isActive: true,
    },
    {
      name: "Backtest",
      url: "/backtest",
      icon: RotateCw,
      isActive: true,
    },
  ],
  navOther: [
    {
      name: "About Us",
      url: "/about",
      icon: Home,
    },
    {
      name: "QR Code",
      url: "/share",
      icon: QrCode,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarContent>
              <NavSection projects={data.navMain} label="Project" />
              <NavSection projects={data.navOther} label="Info" />
            </SidebarContent>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
