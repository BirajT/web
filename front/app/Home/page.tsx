import TopBar from '@/Components/TopBar/page'
import Navbar from '@/Components/Navbar/page'
import HeroSection from '@/Components/HeroSection/page'
import Features from '@/Components/Features/page'
import ShopByCategory from '@/Components/ShopByCategory/page'
import AboutSection from '@/Components/AboutSection/page'
import Bestsellers from '@/Components/Bestsellers/page'
import Footer from '@/Components/Footer/page'

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroSection />
      <Features />
      <ShopByCategory />
      <AboutSection />
      <Bestsellers />
      <Footer />
    </div>
  )
}

export default HomePage
