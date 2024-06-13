"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const words = ["Learning", "Creating", "Thriving"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);


  useEffect(() => {
    if (subIndex === words[index].length + 1 && forward) {
      setForward(false);
      return;
    }
    if (subIndex === 0 && !forward) {
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (forward ? 1 : -1));
      },
      forward ? 150 : 100
    );
    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, words]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);
  return (
    <>
      <div className="flex max-lg:flex-col  bg-black gap-2 text-white pt-24 max-sm:pt-8 min-h-dvh rounded-b-3xl">
        <div className="relative">
          <Image
            src="hero-page.svg"
            className="text-black w-[2600px]"
            alt="hero"
            width={1000}
            height={1000}
          />
          <Image
            src="/line-chart.gif"
            className="text-black absolute top-8 right-32 rounded-2xl opacity-80 max-lg:hidden"
            alt="hero"
            width={140}
            height={140}
          />
        </div>
        <div className="ps-32 flex flex-col gap-8 pe-24 max-lg:px-2">
          <div className="text-4xl font-semibold leading-relaxed pe-20">
            Embark on Your Journey : <br />
            <span className="inline-block text-transparent bg-clip-text font-black bg-gradient-to-r from-violet-600 to-blue-400">
              {`${words[index].substring(0, subIndex)}`}
            </span>{" "}
            <h1 className="sm:inline">Together</h1>
          </div>
          <p>
            Empowering students with state-of-the-art tools and resources for
            academic success. Our platform integrates innovative learning
            methods, collaboration opportunities, and growth-focused features.
            Transform your educational journey with personalized support,
            interactive content, and a vibrant community. Discover the future of
            education, tailored for you.
          </p>
          <div className="pt-4 max-sm:py-6">
            <Link href={"https://learn.tutly.in"} className="p-2 px-4 rounded-full border-violet-400 border-2 text-transparent hover:text-white bg-clip-text hover:bg-clip-border hover:border-none bg-gradient-to-r from-violet-600  to-blue-400 font-semibold">
              Join the community
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
