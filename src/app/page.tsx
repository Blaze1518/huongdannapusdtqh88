"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ContentPanel from "@/components/ContentPanel";
import ContentPanelVideo from "@/components/ContentPanelVideo";
import { useState } from "react";
import Sidebarmobile from "@/components/Sidebarmobile";
export default function Home() {
  return (
    <div className="flex px-3 md:px-14 py-8">
      <div className="hidden md:flex flex-col">
        {/* <Sidebar selected={selected} setSelected={setSelected} /> */}
      </div>
      <div className="flex w-full md:hidden">
        <Sidebarmobile />
      </div>
      <div className="hidden md:flex flex-1 justify-center items-center">
        <ContentPanel />
      </div>
    </div>
  );
}
