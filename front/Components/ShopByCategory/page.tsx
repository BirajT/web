import Image from 'next/image'

const categories = [
  { name: 'Makeup', img: '/profile.jpg' },
  { name: 'Skincare', img: '/profile.jpg' },
  { name: 'Fragrance', img: '/profile.jpg' },
  { name: 'Gift Sets', img: '/profile.jpg' },
  { name: 'Beauty Tools', img: '/profile.jpg' },
  { name: 'Gift Items', img: '/profile.jpg' },
]

const ShopByCategory = () => {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-black">Shop by Category</h2>
          <div className="w-10 h-1 bg-pink-400 mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-pink-50 border border-pink-100 group-hover:border-pink-400 transition">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-pink-500 transition">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory
