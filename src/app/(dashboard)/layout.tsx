"use client"
import Footer from "../_componants/footer";
import Header from "../_componants/header";
import "../globals.css";


export default function HomeLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
