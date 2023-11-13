'use client'
import Navbar from "../(web)/components/navbar"
import "./globals.css"
import FooterLinks from "../(web)/components/footer"
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
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
      </head>
      <body className="h-screen">
        <Navbar />
        {children}

        <FooterLinks
          data={[
            {
              title: "Nosotros",
              links: [
                { label: "Sobre Nosotros", link: "/link1" },
                { label: "Contactanos", link: "/link2" },
                { label: "Turnos", link: "/link2" },

              ],
            },
          ]}
        />
      </body>
    </html>
  );
}
