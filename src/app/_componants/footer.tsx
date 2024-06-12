import Image from "next/image";
import { FaTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="about" className="bg-primary text-gray-300 px-32 pb-32">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 w-2/5">
          {/* <Image
            src=""
            alt="logo"
            width={200}
            height={100}
          /> */}
          <p>
            Crest is an AI-powered supply chain software that provides companies
            tools for demand forecasting, inventory planning and more. This
            helps them have the right amount of stock, optimise space and fulfil
            every order.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Explore</h1>
          <h1>Product</h1>
          <h1>Pricing</h1>
          <h1>Customer Stories</h1>
          <h1>Career</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Learn</h1>
          <h1>About us</h1>
          <h1>Blog</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Contact Crest</h1>
          <h1>sales@getcrest.ai</h1>
          <div>
            <h1>Registered Office:</h1>
            <h1>1507, Incubex, 11th cross road,</h1>
            <h1>19th Main Road, Bengaluru,</h1>
            <h1>India. 560102</h1>
          </div>
          <div>
            <h1>Corporate Office:</h1>
            <h1>291, All Time Space, 4th Floor,</h1>
            <h1>15th A Cross, Sector - 6,</h1>
            <h1>HSR Layout, Bengaluru,</h1>
            <h1>India. 560102</h1>
          </div>
          <div className="flex gap-4 text-lg">
            <Link href="www.google.com">
              <FaTwitter />
            </Link>
            <Link href="www.google.com">
              <FaFacebookF />
            </Link>
            <Link href="www.google.com">
              <FaInstagram />
            </Link>
            <Link href="www.google.com">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="flex gap-4 py-4">
            <h1>Copyright 2024 Crest</h1>
            <h1>Terms of Service</h1>
            <h1>Privacy Policy</h1>
          </div>
          <div>
            <h1>Conifer Innovations Private Limited</h1>
            <h1>CIN: U72900KA2022PTC163144</h1>
          </div>
        </div>
        <Link href="#top">
          {/* <Image
            src=""
            alt="logo"
            className="cursor-pointer hover:-translate-y-5 duration-500"
            width={50}
            height={50}
          /> */}
        </Link>
      </div>
    </div>
  );
}
