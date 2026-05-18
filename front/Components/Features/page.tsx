import { FiTruck, FiShield, FiGift, FiHeadphones } from 'react-icons/fi'

const Features = () => {
  return (
    <section className="bg-pink-100 py-8 px-6 border-t border-pink-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="flex items-start gap-3">
          <div className="bg-white p-3 rounded-full flex-shrink-0 shadow-sm">
            <FiTruck className="text-pink-500 text-2xl" />
          </div>
          <div>
            <p className="font-semibold text-sm text-black">Fast Delivery</p>
            <p className="text-xs text-gray-500 mt-1">Get your order quickly at your doorstep</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-white p-3 rounded-full flex-shrink-0 shadow-sm">
            <FiShield className="text-pink-500 text-2xl" />
          </div>
          <div>
            <p className="font-semibold text-sm text-black">100% Original</p>
            <p className="text-xs text-gray-500 mt-1">Authentic products you can trust</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-white p-3 rounded-full flex-shrink-0 shadow-sm">
            <FiGift className="text-pink-500 text-2xl" />
          </div>
          <div>
            <p className="font-semibold text-sm text-black">Perfect Gifts</p>
            <p className="text-xs text-gray-500 mt-1">Thoughtful gifts for every occasion</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-white p-3 rounded-full flex-shrink-0 shadow-sm">
            <FiHeadphones className="text-pink-500 text-2xl" />
          </div>
          <div>
            <p className="font-semibold text-sm text-black">Customer Support</p>
            <p className="text-xs text-gray-500 mt-1">We&apos;re here to help you anytime</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features
