"use client"
import Header from "../_componants/header";
import "../globals.css";


export default function HomeLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
