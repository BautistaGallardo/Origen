'use client'
import Navbar from "../(web)/components/navbar"
import "./globals.css"
import ContactPage from "./contactUs/contactUs"
import FooterLinks from "../(web)/components/footer"
import About_us from "./aboutUs/aboutUs"
import { Especialidades } from "./especialidades/especialidades"
export const metadata = {
  title: "Origen",
  description: "Sistema de especialidades médicas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="h-screen">
        <Navbar />
        {children}
        <Especialidades />
        <About_us />
        <ContactPage />
        <FooterLinks
          data={[
            {
              title: "Nosotros",
              links: [
                { label: "Sobre Nosotros", link: "/link1" },
                { label: "Contactanos", link: "/link2" },
                { label: "Especialidades", link: "/link2" },

              ],
            },

            // Agrega más grupos de enlaces si es necesario
          ]}
        />
      </body>
    </html>
  );
}
