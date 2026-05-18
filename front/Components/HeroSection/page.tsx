import Image from 'next/image'
import { FiHeart, FiShoppingBag } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className="bg-[#FFF0EE] py-16 px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-pink-500 text-lg font-medium">Welcome to</p>
            <FiHeart className="text-pink-400 fill-pink-400" />
          </div>

          <h1 className="text-7xl font-bold text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Jalpa
          </h1>

          <h2 className="text-2xl font-semibold text-black mb-3">
            Cosmetic and Gift Shop
          </h2>

          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            Beauty, Elegance &amp; Thoughtful Gifts —<br />All in One Place.
          </p>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
              <FiShoppingBag />
              Shop Now
            </button>
            <button className="flex items-center gap-2 border border-gray-300 bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:border-pink-400 hover:text-pink-500 transition">
              <FiHeart />
              Explore Gifts
            </button>
          </div>
        </div>

        {/* Right — circular image area */}
        <div className="relative flex items-center justify-center">
        

          {/* Product image */}
          <div className="relative z-10 mt-8">
            <Image
              src="/profile.jpg"
              alt="Cosmetic Products"
              width={500}
              height={500}
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
