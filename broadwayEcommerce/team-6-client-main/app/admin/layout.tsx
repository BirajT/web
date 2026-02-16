import Footer from '@/components/footer/indes'
import NavBar from '@/components/nav'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>

            {/* nav bar */}
            <NavBar />

            {/* dynamic content */}
            <div>
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default Layout