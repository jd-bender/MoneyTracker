import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-teal-300">
                <span className="grid h-screen place-items-center">
                    {children}
                </span>
            </body>
        </html>
    )
}