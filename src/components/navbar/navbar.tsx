"use client";
import React, {useState} from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-5">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-4xl font-bold">Data Fetching</h1>

      <ul className="hidden md:flex space-x-4">
        <li><Link href="/" className="hover:underline text-2xl">Home</Link></li>
        <li><Link href="/client-fetch" className="hover:underline text-2xl">Client Side</Link></li>
        <li><Link href="/server-fetch" className="hover:underline text-2xl">Server Side</Link></li>
      </ul>

      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </div>

    {isOpen && (
      <ul className="md:hidden bg-black text-white px-4 py-2 space-y-2">
        <li><Link href="/" className="block hover:underline">Home</Link></li>
        <li><Link href="/client-fetch" className="block hover:underline">Client Fetch</Link></li>
        <li><Link href="/server-fetch" className="block hover:underline">Server Fetch</Link></li>
      </ul>
    )}
  </nav>
  )
}

export default Navbar