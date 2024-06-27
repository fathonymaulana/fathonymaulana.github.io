import ProjectDetail from "@/components/ProjectDetail";
import SidebarNav from "@/components/SidebarNav";
import React from "react";

const page = () => {
  return (
    <div className="lg:flex">
      <div className="fixed top-0 h-full w-64 flex-none border-r border-gray-200 lg:static lg:block lg:h-auto lg:overflow-y-visible dark:border-gray-600 hidden">
        <SidebarNav />
      </div>
      <ProjectDetail />
    </div>
  );
};

export default page;
