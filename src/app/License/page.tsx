"use client";
import License from "@/components/License";
import SidebarNav from "@/components/SidebarNav";

export default function docsPage() {
  return (
    <div className="lg:flex">
      <div className="fixed top-0 h-full w-64 flex-none border-r border-gray-200 lg:static lg:block lg:h-auto lg:overflow-y-visible dark:border-gray-600 hidden">
        <SidebarNav />
      </div>
      <License />
    </div>
  );
}
