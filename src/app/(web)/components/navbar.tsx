import React from "react";
import Link from "next/link";
import settings from "../../../../settings.json";

const Navbar = () => {
    return (
        <nav className="bg-Custm_background_light font_body text-white flex xl:flex-row md:flex-row xl:gap-0 md:gap-0 justify-between items-center px-10 w-full h-20">
            <div className="">
                <Link href="/" className=" text-Custm_letter font-body btn btn-ghost normal-case text-xl">
                    {settings.aboutUs.Name}
                </Link>
            </div>
            <div className="">
                <ul className="text-Custm_letter font-body text-lg font-medium leading-7 tracking-wider text-center flex flex-row items-center gap-4 ">
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/contactanos">Contactanos</Link>
                    </li>
                    <li>
                        <Link href="/about_us">Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link href="../../login" className="btn btn-ghost rounded-lg bg-Custm_primary text-white normal-case text-xl p-2"> Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;