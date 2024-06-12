import "./globals.css";
export const metadata = {
  title: "Tutly",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
