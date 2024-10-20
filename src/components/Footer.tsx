import { D, Instagram, Linkedin, Tiktok, Twitter, YouTube } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black bottom-0  left-0 right-0">
      <div className="container pt-2 mx-auto sm:flex text-center sm:justify-between items-center h-[64px]">
        <p className="text-[#808080] text-[14px]">
          @ 2024 FastSaverApi. All rights reserved
        </p>
        <div className="flex gap-[13px] justify-center sm:justify-between items-center pt-2">
          <Link href="/">
            <Image
              className="text-[#fff] w-[24px] h-[24px]"
              src={Twitter}
              alt="img"
            />
          </Link>
          <Link href="/">
            <Image
              className="text-[#fff] w-[18px] h-[18px]"
              src={Instagram}
              alt="img"
            />
          </Link>
          <Link href="/">
            <Image
              className="text-[#fff] w-[18px] h-[18px]"
              src={D}
              alt="img"
            />
          </Link>
          <Link href="/">
            <Image
              className="text-[#fff] w-[18px] h-[18px]"
              src={Linkedin}
              alt="img"
            />
          </Link>
          <Link href="/">
            <Image
              className="text-[#fff] w-[24px] h-[24px]"
              src={Tiktok}
              alt="img"
            />
          </Link>
          <Link href="/">
            <Image
              className="text-[#fff] w-[24px] h-[24px]"
              src={YouTube}
              alt="img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
