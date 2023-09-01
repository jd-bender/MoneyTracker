import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-teal-300">{children}</body>
        </html>
    )
}