"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
       <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="https://InsuringBitcoin.vercel.app">Home</a>
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/">AI Risk Chat</a>
      <a className={`mr-4 ${pathname === "/structured_output" ? "text-white border-b" : ""}`} href="/structured_output">Structured Risk Data Output</a>
      <a className={`mr-4 ${pathname === "/agents" ? "text-white border-b" : ""}`} href="/agents">Risk Agents</a>
      <a className={`mr-4 ${pathname === "/retrieval" ? "text-white border-b" : ""}`} href="/retrieval">Retrieval</a>
      <a className={`mr-4 ${pathname === "/retrieval_agents" ? "text-white border-b" : ""}`} href="/retrieval_agents">Retrieval Agents</a>
    </nav>
  );
}