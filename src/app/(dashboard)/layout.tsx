import Header from "@/componants/header";

export const metadata = {
  title: "Tutly",
  description: "Landing Page",
};

export default function HomeLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
