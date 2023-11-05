export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="">
            <body className="h-screen">
                {children}
            </body>
        </html>
    );
}