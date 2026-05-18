"use client"

import Image from 'next/image'
import { FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const products = [
  { name: 'Matte Lipstick', price: '$299.00', img: '/profile.jpg' },
  { name: 'Radiant Face Serum', price: '$499.00', img: '/profile.jpg' },
  { name: 'Floral Perfume', price: '$999.00', img: '/profile.jpg' },
  { name: 'Makeup Gift Set', price: '$1,299.00', img: '/profile.jpg' },
  { name: 'Skincare Combo', price: '$899.00', img: '/profile.jpg' },
]

const Bestsellers = () => {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-black">Bestsellers</h2>
          <div className="w-10 h-1 bg-pink-400 mx-auto mt-2 rounded-full" />
        </div>

        <div className="relative">
          {/* Prev arrow */}
          <button className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-pink-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow hover:bg-pink-600 transition">
            <FiChevronLeft />
          </button>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition group">
                <div className="relative w-full">
                  <div className="w-full h-40 relative rounded-lg overflow-hidden bg-pink-50">
                    <Image src={p.img} alt={p.name} fill className="object-cover" />
                  </div>
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 transition">
                    <FiHeart />
                  </button>
                </div>
                <p className="text-sm font-medium text-gray-800 text-center">{p.name}</p>
                <p className="text-sm font-bold text-black">{p.price}</p>
                <button className="w-full bg-pink-500 text-white text-xs py-2 rounded-lg hover:bg-pink-600 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-pink-500 text-white w-9 h-9 rounded-full flex items-center justify-center shadow hover:bg-pink-600 transition">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
