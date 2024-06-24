"use client";
import React from "react";

import { Sidebar } from "flowbite-react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const SidebarNav = () => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
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
          <Sidebar.Collapse
            label="PROJECTS"
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
            <Sidebar.Item href="#">Nakama INC.</Sidebar.Item>
            <Sidebar.Item href="#">AJAIB</Sidebar.Item>
            <Sidebar.Item href="#">Dapur Mama Herma</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="Contact">
            CONTACT
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarNav;
