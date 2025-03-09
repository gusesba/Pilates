export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className="h-screen w-screen"
            style={{
                backgroundImage: "url(/assets/pilates-login.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 bg-opacity-50">
                <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
}
