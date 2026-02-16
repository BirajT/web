import React from 'react'
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import Link from 'next/link';
const IconSection = () => {
    return (
        <div className='flex gap-2'>
            <Link href={'/wishlist'} title='wishlist' className='cursor-pointer'>
                <CiHeart size={30} />
            </Link>
            <Link href={'/cart'} title='cart' className='cursor-pointer'>
                <BsHandbag size={22} />
            </Link>

        </div>
    )
}

export default IconSection