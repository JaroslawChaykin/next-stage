export const metadata = {
    title: "Show page",
    description: "showest",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
