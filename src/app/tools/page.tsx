"use client";
import Sidebar from "@/components/Sidebar";
import Tool from "@/components/Tool";

export default function Tools() {
  return (
    <main className="">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Tool title="URL Encoder" id="url-encoder" />
      </div>
    </main>
  );
}
