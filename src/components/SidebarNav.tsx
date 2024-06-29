"use client";
import React from "react";

import { Sidebar } from "flowbite-react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const SidebarNav = () => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="bg-white border-r border-gray-200 dark:border-gray-600">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            label="GETTING STARTED"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="Introduction">Introduction</Sidebar.Item>
            <Sidebar.Item href="License">License</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#">
            FIGMA
          </Sidebar.Item>
          <Sidebar.Item href="About">
            ABOUT
          </Sidebar.Item>
          <Sidebar.Item href="Projects">
            PROJECTS
          </Sidebar.Item>
          <Sidebar.Item href="Contact">
            CONTACT
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarNav;
