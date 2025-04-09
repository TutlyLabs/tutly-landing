import { FaTwitter, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      id="about"
      className="bg-gradient-to-r from-black to-blue-950/50 bg-[length:200%_200%] animate-gradient px-2 max-sm:text-xs md:px-24 pt-4 sm:py-8 text-gray-300"
    >
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col gap-8 w-2/5 max-sm:w-full max-sm:pb-6">
          <h1 className="text-3xl sm:text-5xl font-black">Tutly</h1>
          <p className="max-sm:hidden">
            Tutly is a cutting-edge Learning Management System (LMS) designed to
            revolutionize education. We provide instructors with powerful tools
            to create courses, manage students, track progress, and analyze
            performance, all in one seamless platform. Tutly transforms
            traditional education into an engaging and efficient experience.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Explore</h1>
          <Link href={"/developers"}>Contribute</Link>
          <h1>Pricing</h1>
          <h1>Reviews</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Learn</h1>
          <h1>Courses</h1>
          <h1>About us</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white">Contact</h1>
          <h1>sales@tutly.in</h1>
          <div>
            <h1>Office:</h1>
            <h1>Hyderabad, Telangana</h1>
            <h1>India. 500090</h1>
          </div>
          <div className="flex gap-4 text-lg">
            <Link href="https://x.com/tutlydotin" target="_blank">
              <FaTwitter />
            </Link>
            <Link href="https://t.me/tutlydotin" target="_blank">
              <FaTelegram />
            </Link>
            <Link href="https://www.instagram.com/tutlydotin" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/company/tutly/"  target="_blank">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center sm:pt-14">
        <div>
          <div className="flex gap-4 py-4">
            <h1>Copyright ©2025 Tutly. All rights reserved.</h1>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
        <Link href="/">
          <FaArrowCircleUp className="cursor-pointer hover:-translate-y-4 duration-500 text-3xl" />
        </Link>
      </div>
    </div>
  );
}
