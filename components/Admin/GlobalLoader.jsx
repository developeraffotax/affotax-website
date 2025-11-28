// components/GlobalLoader.jsx
"use client";
import { Spin } from "antd";

export default function GlobalLoader({ loading }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-[9999]">
      <div className="p-6 rounded-xl bg-white shadow-xl flex flex-col items-center gap-3">
        <Spin size="large" />
        <span className="text-gray-700 font-medium">Loading…</span>
      </div>
    </div>
  );
}