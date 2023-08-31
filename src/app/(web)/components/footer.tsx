import React from "react";
import Link from "next/link";
import settings from "../../../../settings.json";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {

    return (
        <footer className="bg-white">
            <main className="text-Custm_letter font-body font-normal md:text-xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 bg-cove p-10 w-full mt-auto">
                <section className="sm:col-span-1">
                    <h1 className="font-semibold"> About Us </h1>
                    <p>{settings.footerData.about}</p>
                </section>
                <section>
                    <h1 className="font-semibold">Contact Us:</h1>
                    <ul>
                        <li>{settings.footerData.address}</li>
                        <li>{settings.footerData.phone}</li>
                        <li>{settings.footerData.email}</li>
                    </ul>
                </section>
                <section>
                    <h1 className="text-center font-semibold">Seguinos: </h1>
                    <div className="flex flex-row justify-center gap-6 my-3">
                        <Link href={settings.footerData.social.facebook}>
                            <AiFillFacebook size={35} />
                        </Link>
                        <Link href={settings.footerData.social.instagram}>
                            <AiFillInstagram size={35} />
                        </Link>
                        <Link href={settings.footerData.social.twitter}>
                            <AiFillTwitterSquare size={35} />
                        </Link>
                        <Link href={settings.footerData.social.youtube}>
                            <AiFillYoutube size={35} />
                        </Link>

                    </div>

                </section>
            </main>
            <p className="text-Custm_tertiary text-center">
                {settings.footerData.copy}
            </p>
        </footer>
    );
};

export default Footer;
