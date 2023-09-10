"use client";
import Sidebar from "@/components/Sidebar";
import Tool from "@/components/Tool";
import MenuProvider from "@/context/menuContext";

export default function Tools() {
  return (
    <MenuProvider>
      <main className="">
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <Tool />
        </div>
      </main>
    </MenuProvider>
  );
}
