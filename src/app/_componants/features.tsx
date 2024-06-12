"use client";
import { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/6527d12579fe9fb6cfc0c8eb_RPA%20BLOG%20THUMBNAIL.png",
    heading: "Impact of RPA (Robotic Process Automation) in Supply Chain ",
    date: "Oct 12, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64ec7b71e9332bfe4b920ba3_thumbnail%20QSR%20(1).png",
    heading: "Creating an Impact with Inventory Planning: The QSR Edition",
    date: "Aug 28, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64ccbab82ea1c2946724d96f_blog-thumbnail.jpg",
    heading: "The Ultimate Recipe for Inventory Success",
    date: "Aug 4, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64a2748fdf4cb57114ca9e3d_HOLIDAY%20SEASON%20-p-1080.png",
    heading: "Stocking Strategies for Festive Season Sales",
    date: "Jul 3, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20-p-1080.png",
    heading: "To Build or Buy: The Endless Inventory Planning Dilemma",
    date: "Apr 17, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/642688163009ef784ee99686_blog%20image%20-p-1080.png",
    heading: "Why your ERP is not your Inventory Planning Tool",
    date: "Mar 31, 2023",
  },
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="blog" className="py-20">
      <div className="flex gap-10">
        <div className="flex flex-col w-1/3 ps-32 justify-between">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold">Delivered:</h1>
              <h1 className="text-4xl font-bold">The Crest blog</h1>
            </div>
            <p>
              Insights from years of working in various supply-chain roles (and
              an itch to write). We hope you find these posts interesting!
            </p>
            <div className="flex gap-4">
              <Image
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                alt="arrow"
                className="transform rotate-180 cursor-pointer"
                onClick={handlePrev}
                width={30}
                height={30}
              />
              <Image
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                alt="arrow"
                className="cursor-pointer"
                onClick={handleNext}
                width={30}
                height={30}
              />
            </div>
          </div>
          <div>
            <button className="p-2 px-4 rounded-full border-2 font-semibold border-pink-300 inline-block text-transparent bg-clip-text hover:bg-clip-border hover:border-pink-400 hover:text-white bg-gradient-to-r via-pink-500 from-[#F48D88] to-violet-500">
              View all blogs
            </button>
          </div>
        </div>
        <div className="overflow-hidden w-2/3">
          <div
            className="flex gap-10 transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 435}px)` }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-violet-100 w-[400px] rounded-2xl p-6 flex-shrink-0 group cursor-pointer"
              >
                <div className="rounded-2xl h-[240px] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt="image"
                    className="rounded-2xl w-full h-full group-hover:scale-110 duration-1000"
                    width={300}
                    height={300}
                  />
                </div>
                <h1 className="text-xl font-semibold py-4 mb-12">
                  {blog.heading}
                </h1>
                <div className="flex justify-between">
                  <h1>{blog.date}</h1>
                  <Image
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d07edea3eca_Vector.svg"
                    alt="arrow"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}