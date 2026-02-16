

import Link from 'next/link';
const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
]

const NavLinks = () => {
  return (
     <div className="flex gap-2 tracking-wider">
            {links.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <span className="text-lg font-semibold text-gray-700">{item.label}</span>
                </Link> 
              );
            })}
          </div>
  )
}

export default NavLinks