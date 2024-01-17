"use client";

import Navbar from "@/components/navbar";
import QueryProvider from "@/utils/provider";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <main>
        <Navbar />
        {children}
      </main>
    </QueryProvider>
  );
};

export default DashboardLayout;
