
import { FaTwitter, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="about" className="bg-black p-32 pt-8 rounded-t-3xl text-gray-300">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 w-2/5">
          <h1 className="text-5xl font-black">TUTLY</h1>
          <p className="">
            Empowering students with state-of-the-art tools and resources for
            academic success. Transform your educational journey with personalized support,
            interactive content, and a vibrant community. Discover the future of
            education, tailored for you.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Explore</h1>
          <Link href={'/events'}>Events</Link>
          <h1>Pricing</h1>
          <h1>Reviews</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Learn</h1>
          <h1>Courses</h1>
          <h1>About us</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Contact Crest</h1>
          <h1>sales@tutly.in</h1>
          <div>
            <h1>Office:</h1>
            <h1>Pragathi Nagar,</h1>
            <h1>Bachupally, Hyderabad</h1>
            <h1>India. 500090</h1>
          </div>
          <div className="flex gap-4 text-lg">
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaTelegram />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
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
        <Link href="#">
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
