"use client";
import { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/6527d12579fe9fb6cfc0c8eb_RPA%20BLOG%20THUMBNAIL.png",
    heading: "HTML ",
    date: "Oct 12, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64ec7b71e9332bfe4b920ba3_thumbnail%20QSR%20(1).png",
    heading: "CSS",
    date: "Aug 28, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64ccbab82ea1c2946724d96f_blog-thumbnail.jpg",
    heading: "Javascript",
    date: "Aug 4, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64a2748fdf4cb57114ca9e3d_HOLIDAY%20SEASON%20-p-1080.png",
    heading: "React",
    date: "Jul 3, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20-p-1080.png",
    heading: "NodeJS",
    date: "Apr 17, 2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/642688163009ef784ee99686_blog%20image%20-p-1080.png",
    heading: "Backend",
    date: "Mar 31, 2023",
  },
];

export default function Courses() {
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
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500  to-violet-500">Explore Our Curated Courses</h1>
              <p className="font-semibold pt-2">Unlock a World of Knowledge and Skills!</p>
            </div>
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
            <button className="p-2 px-4 rounded-full border-2 font-semibold border-violet-400 inline-block text-transparent bg-clip-text hover:bg-clip-border hover:border-none hover:text-white bg-gradient-to-r from-violet-600  to-blue-400">
              View all courses
            </button>
          </div>
        </div>
        <div className="overflow-hidden w-2/3">
          <div
            className="flex gap-10 transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 335}px)` }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-200  to-violet-300 w-[300px] rounded-2xl p-4 flex-shrink-0 group cursor-pointer"
              >
                <div className="rounded-2xl h-[180px] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt="image"
                    className="rounded-2xl w-full h-full group-hover:scale-110 duration-1000"
                    width={300}
                    height={300}
                  />
                </div>
                <h1 className="text-lg font-bold pt-4 text-center">
                  {blog.heading}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
