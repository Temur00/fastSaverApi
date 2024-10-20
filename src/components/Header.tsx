"use client";
import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-white dark:bg-[#1a253c] -top-1 left-0 right-0 z-20 fixed opacity-95 ${
        isShrunk ? "shadow-lg" : ""
      }`}
    >
      <div className={`bg-black top-0 left-0 right-0 z-20  fixed `}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-[81px]">
            <div>
              <Link href="/" className="flex justify-between items-center">
                <Image className="w-11 h-13" src={Logo} alt="Logo" />
                <p className="text-white text-base">FastSaverApi</p>
              </Link>
            </div>
            <div className="flex">
              <div className="  hidden gap-6 justify-between items-center sm:flex">
                <Link href={"/controlPanel"} className="text-white">
                  Control
                </Link>
                <Link href="#pricing" className="text-white">
                  Pricing
                </Link>
                <Link href="/" className="text-white">
                  Documentation
                </Link>
                <Link href="/">
                  <button className="w-[71px] text-black bg-white h-[39px] rounded-xl flex justify-center items-center text-[16px]">
                    Login
                  </button>
                </Link>
              </div>

              <button
                onClick={handleClick}
                className="pt-2 flex-col gap-1 justify-center items-center block sm:hidden w-[32px] h-[32px] cursor-pointer dark:text-slate-200 text-[#22202E] hover:text-slate-950"
              >
                <span
                  className={`bg-steel-500 block transition-all duration-300 ease-out
            h-1 w-8 rounded-md bg-white dark:bg-slate-200 ${
              isOpen
                ? "rotate-45 translate-y-[0.41rem]"
                : "-translate-y-[0.30rem]"
            }`}
                ></span>
                <span
                  className={`bg-steel-500 block
            h-1 w-8 rounded-md my-0.5 bg-white dark:bg-slate-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
                ></span>
                <span
                  className={`bg-steel-500 block transition-all duration-300 ease-out
            h-1 w-8 rounded-md bg-white dark:bg-slate-200  ${
              isOpen
                ? "-rotate-45 -translate-y-[0.35rem]"
                : "translate-y-[0.30rem]"
            }`}
                ></span>
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "translate-x"
                : "-translate-x-[420px] transation duration-400 ease-linier opacity-95  "
            } absolute top-0 left-0 h-screen w-[50vw] bg-black dark:bg-[#162037] z-50 transation duration-200 ease-linear md:hidden shadow-md text-white`}
          >
            <div className="flex flex-col  gap-4 pl-5 pt-4 items-center">
              <div>
                <Link href="/" className="flex items-center">
                  <Image className="w-[50px] h-14" src={Logo} alt="Logo" />
                  <p className="text-white text-lg">FastSaverApi</p>
                </Link>
              </div>
              <Link href="/" className="text-white">
                Documentation
              </Link>
              <Link href={"/controlPanel"} className="text-white">
                Control
              </Link>
              <Link href="#pricing" className="text-white">
                Pricing
              </Link>

              <Link href="/">
                <button className="w-[71px] text-black bg-white h-[39px] rounded-xl flex justify-center items-center text-[16px]">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
