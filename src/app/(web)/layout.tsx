import Navbar from "../(web)/components/navbar"
import "./globals.css"
import Footer from "./components/footer";

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
        <Footer />
      </body>
    </html>
  );
}
