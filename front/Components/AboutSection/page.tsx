import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="bg-pink-50 py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left image */}
        <div className="rounded-2xl overflow-hidden h-[320px] relative">
          <Image
            src="/profile.jpg"
            alt="About Jalpa"
            fill
            className="object-cover"
          />
        </div>

        {/* Right text */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            About Jalpa
          </h2>
          <p className="text-gray-600 text-sm leading-7 mb-6">
            At <span className="font-semibold text-black">Jalpa Cosmetic and Gift Shop</span>, we believe in enhancing beauty
            and spreading happiness. From premium cosmetics to unique gifts,
            we bring products that make you look good and feel special.
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-pink-600 transition">
            Learn More About Us
          </button>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
