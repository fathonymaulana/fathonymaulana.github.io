"use client";
import SidebarNav from "@/components/SidebarNav";
import Figma from "@/components/Figma"

export default function docsPage() {
  return (
    <div className="lg:flex">
      <div className="relative h-full w-64 flex-none border-r border-gray-200 lg:static lg:block lg:h-auto lg:overflow-y-visible dark:border-gray-600 hidden">
        <SidebarNav />
      </div>
      <Figma />
    </div>
  );
}
