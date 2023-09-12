"use client";
import Sidebar from "@/components/Sidebar";
import Tool from "@/components/Tool";
import MenuProvider from "@/context/menuContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/query/client";

export default function Tools() {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuProvider>
        <main className="">
          <Sidebar />
          <div className="p-4 sm:ml-64">
            <Tool />
          </div>
        </main>
      </MenuProvider>
    </QueryClientProvider>
  );
}
