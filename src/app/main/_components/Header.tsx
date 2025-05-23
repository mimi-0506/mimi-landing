"use client";

import Image from "next/image";
import throttle from "lodash/throttle";
import { useEffect, useState } from "react";
import { songmyung } from "@/fonts";

const MENU_ITEMS = ["Home", "Feature", "Apps", "About mimi"];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollClick = (index: number) => {
    window.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const index = Math.round(scrollY / screenHeight);
      setCurrentIndex(index);
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${songmyung.className} flex justify-between items-center 
      top-0 z-100 text-glow
      w-full
      aboslute sm:sticky
      pt-3
      sm:pt-10
      md:mt-10
      `}
    >
      <div className="flex items-center gap-2">
        <Image src="/favicon.ico" alt="Mimimemo Icon" width={24} height={24} />
        <span className="text-xl tracking-tighter font-bold">MimiMemo</span>
      </div>
      <nav className="hidden md:block">
        <ul className="flex justify-between gap-5 list-none">
          {MENU_ITEMS.map((item, idx) => (
            <li
              key={idx}
              className={`cursor-pointer transition ${
                currentIndex === idx ? "font-bold text-black" : "text-gray-400"
              }`}
              onClick={() => handleScrollClick(idx)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
