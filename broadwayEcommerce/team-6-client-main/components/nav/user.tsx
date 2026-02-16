import Image from 'next/image'
import React from 'react'

const UserSection = () => {
  return (
<div className="flex items-center gap-1">
        {/* image */}
        <div className="h-12 w-12 border-2 border-blue-500 rounded-full p-1">
          <Image
            src={"/logo.svg"}
            alt="logo"
            height={500}
            width={500}
            className="h-full w-full"
          />
        </div>
        {/* name */}
        <div>
          <p className="text-lg font-semibold  text-blue-500">John Doe</p>
        </div>
      </div>
  )
}

export default UserSection