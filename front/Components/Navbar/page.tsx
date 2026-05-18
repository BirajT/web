"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiSearch, FiShoppingBag, FiUser, FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
  const [cartCount] = useState(2)

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/pp.png"
          alt="Jalpa Logo"
          width={90}
          height={90}
          className="rounded-full object-cover"
        />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700 text-sm">
        <li>
          <Link href="/" className="text-pink-500 border-b-2 border-pink-500 pb-1">Home</Link>
        </li>
        <li>
          <Link href="/Shop" className="hover:text-pink-500 transition">Shop</Link>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-pink-500 transition">
          <Link href="/Categories">Categories</Link>
          <FiChevronDown className="text-xs" />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-pink-500 transition">
          <Link href="/Gifts">Gifts</Link>
          <FiChevronDown className="text-xs" />
        </li>
        <li>
          <Link href="/About Us" className="hover:text-pink-500 transition">About Us</Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-pink-500 transition">Contact</Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-5 text-xl text-gray-700">
        <FiSearch className="cursor-pointer hover:text-pink-500 transition" />
        <FiUser className="cursor-pointer hover:text-pink-500 transition" />
        <div className="relative">
          <FiShoppingBag className="cursor-pointer hover:text-pink-500 transition" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
