"use client";
import { LuSearch } from "react-icons/lu";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex border border-gray-400 rounded-[20px] items-center"
    >
      <div className="grid place-content-center pl-4 pr-2">
        <LuSearch />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="py-2 placeholder:text-xs border-none outline-0 text-xs w-[180px]"
        placeholder="Search..."
      />
    </form>
  );
}
