import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Image src="/pp.png" alt="Jalpa Logo" width={80} height={80} className="rounded-full mb-3" />
          <p className="text-xs text-gray-400 leading-6">
            Your one-stop destination for cosmetics, beauty essentials and thoughtful gifts.
          </p>
          <div className="flex gap-3 mt-4 text-gray-400">
            <FaFacebookF className="cursor-pointer hover:text-pink-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
            <FaWhatsapp className="cursor-pointer hover:text-pink-400 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            {['Home', 'Shop', 'Categories', 'Gifts', 'About Us', 'Contact'].map((l) => (
              <li key={l}><Link href="/" className="hover:text-pink-400 transition">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Customer Service</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            {['My Account', 'Order Tracking', 'Wishlist', 'FAQs', 'Shipping & Delivery', 'Returns & Refunds'].map((l) => (
              <li key={l}><Link href="/" className="hover:text-pink-400 transition">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Contact Us</h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li className="flex items-center gap-2"><FiPhone className="text-pink-400" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FiMail className="text-pink-400" /> info@jalpashop.com</li>
            <li className="flex items-start gap-2"><FiMapPin className="text-pink-400 mt-0.5" /> 123 Beauty Street,<br />Your City, India - 560001</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Newsletter</h4>
          <p className="text-xs text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800 text-xs text-white px-3 py-2 rounded-l-lg outline-none placeholder-gray-500"
            />
            <button className="bg-pink-500 text-white text-xs px-3 py-2 rounded-r-lg hover:bg-pink-600 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 pt-5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
        <p>© 2025 Jalpa Cosmetic and Gift Shop. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-pink-400 transition">Privacy Policy</Link>
          <span>|</span>
          <Link href="/" className="hover:text-pink-400 transition">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
