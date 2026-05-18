import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiGift, FiTruck } from 'react-icons/fi'

const TopBar = () => {
  return (
    <div className="bg-black text-white text-xs py-2 px-6 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <FiTruck className="text-pink-400" />
        <p>Free Shipping on Orders Over $999</p>
      </div>

      <div className="hidden md:flex items-center gap-1">
        <FiGift className="text-pink-400" />
        <p>Beautiful Gifts for Every Occasion</p>
      </div>

      <div className="flex items-center gap-3">
        <span>Follow Us</span>
        <FaFacebookF className="cursor-pointer hover:text-pink-400 transition" />
        <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
      </div>
    </div>
  )
}

export default TopBar
