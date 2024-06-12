"use client";
import React, { useState } from "react";
import "./features.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaChalkboardTeacher,
} from "react-icons/fa";

const PageFlip = () => {
  const [turnedPages, setTurnedPages] = useState<any>([]);

  const togglePageFlip = (page: any) => {
    setTurnedPages((prev: any) =>
      prev.includes(page)
        ? prev.filter((p: any) => p !== page)
        : [...prev, page]
    );
  };

  return (
    <div id="features" className="mb-20">
      <div className="perspective h-[500px] flex justify-end ">
        {/* 1-left */}
        <div className="text-xl sm:text-3xl md:text-5xl flex justify-center items-center w-1/2 px-2 sm:px-5 font-bold bg-gradient-to-r from-blue-500 to-violet-800">
          <img
            src="https://i.postimg.cc/SRdLW1sg/Modern-Education-Badge-Logo-1-removebg-preview.png"
            alt=""
          />
        </div>
        {/* 2-right */}
        <div
          className={`page duration-1000 flex items-end origin-left w-1/2 transition h-[500px] transform ${
            turnedPages.includes(2) ? "turn z-50" : ""
          }`}
          data-page="2"
          onClick={() => togglePageFlip(1)}
        >
          <div className="front flex flex-col gap-5 justify-center px-2 sm:px-5 bg-gray-200 w-full h-[500px]">
            <div className="p-6 mx-4 rounded shadow-lg bg-white hover:bg-blue-100 transition duration-300">
              <h1 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                <FaBookOpen /> Feature 5
              </h1>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
                rem ipsa voluptates excepturi quo, unde nostrum eos blanditiis
                hic nam iusto molestiae culpa provident esse minima voluptatem
                reprehenderit eaque, aut corporis quis dolore tenetur.
              </p>
            </div>
            <div className="p-6 mx-4 rounded shadow-lg bg-white hover:bg-blue-100 transition duration-300">
              <h1 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                <FaChalkboardTeacher /> Feature 6
              </h1>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
                rem ipsa voluptates excepturi quo, unde nostrum eos blanditiis
                hic nam iusto molestiae culpa provident esse minima voluptatem
                reprehenderit eaque, aut corporis quis dolore tenetur.
              </p>
            </div>
            <FaArrowLeft className="text-2xl mt-2 text-blue-500 self-end cursor-pointer hover:text-blue-700 transition duration-300" />
          </div>
        </div>
        {/* 1-right */}
        <div
          className={`page absolute duration-1000 flex items-end origin-left w-1/2 transition h-[500px] transform ${
            turnedPages.includes(1) ? "turn z-50" : ""
          }`}
          data-page="1"
          onClick={() => togglePageFlip(1)}
        >
          <div className="front gap-5 flex flex-col justify-center px-2 sm:px-5 bg-gray-200 absolute w-full h-[500px]">
            <div className="p-6 rounded mx-4 shadow-lg bg-white hover:bg-blue-100 transition duration-300">
              <h1 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                <FaBookOpen /> Feature 1
              </h1>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
                rem ipsa voluptates excepturi quo, unde nostrum eos blanditiis
                hic nam iusto molestiae culpa provident esse minima voluptatem
                reprehenderit eaque, aut corporis quis dolore tenetur.
              </p>
            </div>
            <div className="p-6 rounded mx-4 shadow-lg bg-white hover:bg-blue-100 transition duration-300">
              <h1 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                <FaChalkboardTeacher /> Feature 2
              </h1>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
                rem ipsa voluptates excepturi quo, unde nostrum eos blanditiis
                hic nam iusto molestiae culpa provident esse minima voluptatem
                reprehenderit eaque, aut corporis quis dolore tenetur.
              </p>
            </div>
            <FaArrowRight className="text-2xl mt-2 text-blue-500 self-end cursor-pointer hover:text-blue-700 transition duration-300" />
          </div>
          {/* 2-left */}
          <div className="back gap-5 flex flex-col justify-center px-2 sm:px-5 bg-gray-200 border-r-2 absolute w-full h-[500px]">
            <div className="p-6 rounded mx-4 shadow-lg bg-white hover:bg-blue-100 transition duration-300">
              <h1 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                <FaBookOpen /> Feature 3
              </h1>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
                rem ipsa voluptates excepturi quo, unde nostrum eos blanditiis
                hic nam iusto molestiae culpa provident esse minima voluptatem
                reprehenderit eaque, aut corporis quis dolore tenetur.
              </p>
            </div>
            <div className="p-6 rounded mx-4 shadow-lg bg-white hover:bg-blue-100 transition duration-300">
              <h1 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                <FaChalkboardTeacher /> Feature 4
              </h1>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae
                rem ipsa voluptates excepturi quo, unde nostrum eos blanditiis
                hic nam iusto molestiae culpa provident esse minima voluptatem
                reprehenderit eaque, aut corporis quis dolore tenetur.
              </p>
            </div>
            <FaArrowLeft className="text-2xl mt-2 text-blue-500 cursor-pointer hover:text-blue-700 transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFlip;
