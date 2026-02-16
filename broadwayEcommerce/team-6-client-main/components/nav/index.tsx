import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./navlinks";
import UserSection from "./user";
import IconSection from "./icon-section";



const NavBar = () => {
    return (
        <nav className="tracking-wider border border-gray-200 rounded-sm flex items-center justify-between h-16 px-2">
            {/* logo */}
            <div>
                <Image
                    src={"/logo.svg"}
                    alt="logo"
                    height={500}
                    width={500}
                    className="h-16 w-24"
                />
            </div>

            {/* links */}
            <NavLinks />

            <div className="flex gap-4 items-center ">
                <IconSection />
                {/* auth */}
                <UserSection />
            </div>
        </nav>
    );
};

export default NavBar;
