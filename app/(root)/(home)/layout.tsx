import React, { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling app",
  icons: "/icons/logo.svg",
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col px-5 pb-6 pt-28 xl:pb-4 xl:pt-[5.75rem] ">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
