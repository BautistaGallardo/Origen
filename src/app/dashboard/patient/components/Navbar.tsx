import React from "react";
import Link from "next/link";
import settings from "../../../../../settings.json";
import {LogoutButton} from "@/app/dashboard/logout";

const Navbar = () => {
    return (
        <nav className=" bg-Custm_primary font_body text-white flex flex-row xl:flex-row md:flex-row xl:gap-0 md:gap-0 justify-between items-center px-10 w-full h-auto xl:h-20">
            <div className="mb-4 xl:mb-0">
                <Link href="/" className="text-white font-body btn btn-ghost normal-case text-xl">
                    {"Hola, " + settings.aboutUs.Name}
                </Link>
            </div>
            <div className="xl:w-auto">
                <ul className="text-white font-body text-lg font-medium leading-7 tracking-wider text-center flex flex-row xl:flex-row items-center gap-4 ">
                    <li>
                        <LogoutButton/>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
