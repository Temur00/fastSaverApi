"use client";

import { Done, Nihol, Partner, VectorRight } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "flowbite";

import { FaPlus } from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleText = () => {
    setIsOpen(!isOpen);
  };

  const images = [Partner, Partner, Partner, Partner, Partner];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    return [images[prevIndex], images[currentIndex], images[nextIndex]];
  };

  return (
    <main className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#1c113e_85%,#010101_100%)] sm:py-24 relative overflow-clip">
      <div className="  mx-auto ">
        <section className="container mx-auto content-center ">
          <div>
            <div className="flex mt-[132px] gap-3 items-center justify-center border-solid border-2 border-white/30 w-[229px] h-[31px] mx-auto rounded-md">
              <p className="text-[13px] text-[#FFFFFF80]">
                Version 2.0 is here
              </p>
              <div className="flex items-center cursor-pointer">
                <p className="text-[13px] text-[#FFFFFF80] ">Read more </p>{" "}
                <Image className="w-[20px]" src={VectorRight} alt="img" />
              </div>
            </div>
            <div>
              <p className="text-center font-bold text-[70px] sm:text-[125px] tracking-tighter text-white">
                FastSaver
              </p>
              <p className="text-center font-bold  text-[70px] sm:text-[125px] tracking-tighter sm:-mt-20 -mt-12 text-white">
                Api
              </p>
            </div>
            <p className="text-white text-center w-[380px] pl-6 pr-6 mx-auto ">
              the world's largest API hub, is used by over four thousand
              developers to find, test and connect to some API
            </p>
            <button className="mt-[32px] block mx-auto w-[131px] h-[50px] bg-white rounded-lg text-black">
              Sign up now
            </button>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto">
            <p className="text-center pt-[100px] sm:pt-[221px] sm:text-[54px] text-[45px] font-bold tracking-tighter text-white">
              Everything you need
            </p>
            <p className="mx-auto w-[532px] gap-4 pt-[20px] text-white ">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
            <div className="flex gap-1 pt-[66px] flex-wrap">
              <div className="card max-w-[360px] overflow-hidden h-[352px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
                <div className="mt-[60px] w-[56px] h-[56px] rounded-xl bg-white flex justify-center items-center mx-auto">
                  <Image src={Nihol} alt="nihol" />
                </div>
                <p className="text-center pt-6 font-bold text-[18px] text-white">
                  Multiplatfrom support
                </p>
                <p className="text-center pt-2 text-white">
                  Download medias from popular social media platforms
                  like Instagram, TikTok, Youtube, Facebook, Twitter, Capcut,
                  Threads, Pinterest, imdb, imgur, ifunny, Reddit, Vimeo,
                  Snapchat, Likee, Linkedin, Tumblr, Hipi, Telegram,
                  Getstickerpack, oke.ru, Streamable, Weibo, and more.
                </p>
              </div>
              <div className="card max-w-[360px] h-[352px] overflow-hidden mx-auto border-solid border-2 border-[#222222] rounded-xl">
                <div className="mt-[60px] w-[56px] h-[56px] rounded-xl bg-white flex justify-center items-center mx-auto">
                  <Image src={Nihol} alt="nihol" />
                </div>
                <p className="text-center pt-6 font-bold text-[18px] text-white">
                  High quality downloads
                </p>
                <p className="text-center pt-2 text-white">
                  Scrape data from Instagram unlimitedly. Get all reels, videos,
                  posts, stories… with full json, included download urls,
                  caption, etc. you can use it as instagram reel downloader,
                  instagram post downloader, instagram video downloader,
                  instagram reel scraper, etc.
                </p>
              </div>
              <div className="card max-w-[360px] h-[352px] overflow-hidden mx-auto border-solid border-2 border-[#222222] rounded-xl">
                <div className="mt-[60px] w-[56px] h-[56px] rounded-xl bg-white flex justify-center items-center mx-auto">
                  <Image src={Nihol} alt="nihol" />
                </div>
                <p className="text-center pt-6 font-bold text-[18px] text-white">
                  Performance metrics
                </p>
                <p className="text-center pt-2 text-white">
                  Experience lightning-fast response times and minimal latency
                  with our high-performance API. You can make a large number of
                  concurrent requests without performance degradation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-white">
          <div className="container mx-auto">
            <p className="pt-[97px] sm:text-[54px] text-[45px] tracking-tighter text-center text-white">
              Our partners
            </p>
            <p className="text-[22px] w-[500px] mx-auto text-center text-white">
              Over 20+ successful telegram bots were run by FastSaver API in
              2024
            </p>

            <div className="relative w-full mx-auto mt-14 sm:mt-32 md:mt-44 mb-12">
              <div className="flex justify-center items-center space-x-4 h-[400px]">
                {getVisibleImages().map((image, index) => (
                  <div
                    key={index}
                    className="transition-opacity duration-700 ease-in-out"
                  >
                    <Image
                      src={image}
                      alt={`Partner ${index + 1}`}
                      className="rounded-lg"
                      width={300}
                      height={400}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute z-30 flex -translate-x-1/2  bottom-[-0px] sm:bottom-[-160px] md:bottom-[-180px] left-1/2 space-x-3">
                {" "}
                {/* Tugmachalar pastga tushirildi */}
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`sm:w-5 sm:h-5 h-3 w-3 rounded-full ${
                      index === currentIndex ? "bg-white" : "bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-current={index === currentIndex}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-[22px] text-center pt-20 sm:pt-36 md:pt-44 text-white">
              Thanks for working with FastSaver API!
            </p>
          </div>
        </section>

        <section className="container mx-auto" id="pricing">
          <p className="pt-[97px] sm:text-[54px] text-[45px] tracking-tighter text-center text-white">
            Perfect service
          </p>
          <p className="text-[22px] w-[500px] mx-auto text-center text-white">
            We provide service capable of withstanding huge stands. We use open
            APIs to perform distributed queries.
          </p>
          <div className="flex flex-wrap gap-5 pt-[66px]  ">
            <div className=" w-[280px]  overflow-hidden h-[400px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
              <p className="pt-[40px] pl-[40px] text-[18px] text-white">Free</p>
              <div className="flex items-center pt-[34px]">
                <p className="text-[54px] pl-[40px] text-white">$0</p>
                <p className="pt-[20px] text-white">/monthly</p>
              </div>
              <button className="mx-auto flex justify-center items-center mt-[34px] w-[221px] h-[39px] rounded-2xl bg-white text-black font-semibold">
                Buy now
              </button>
              <p className=" text-white text-[14px] pt-[34px] pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                100 requests/month
              </p>
              <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                Basic support{" "}
              </p>
              <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                One request per second{" "}
              </p>
            </div>
            <div className=" w-[280px]  overflow-hidden h-[400px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
              <p className="pt-[40px] pl-[40px] text-[18px] text-white">Pro</p>
              <div className="flex items-center pt-[34px]">
                <p className="text-[54px] pl-[40px] text-white">$13</p>
                <p className="pt-[20px] text-white">/monthly</p>
              </div>
              <button className="mx-auto flex justify-center items-center mt-[34px] w-[221px] h-[39px] rounded-2xl bg-white text-black font-semibold">
                Buy now
              </button>
              <p className=" text-white text-[14px] pt-[34px] pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                100 requests/month
              </p>
              <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                24/7 support{" "}
              </p>
              <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />7 requests per second{" "}
              </p>
            </div>
            <div className=" w-[280px]  overflow-hidden h-[400px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
              <p className="pt-[40px] pl-[40px] text-[18px] text-white">
                Ultra
              </p>
              <div className="flex items-center pt-[34px] text-white">
                <p className="text-[54px] pl-[40px] text-white">$36</p>
                <p className="pt-[20px] text-white">/monthly</p>
              </div>
              <button className="mx-auto flex justify-center items-center mt-[34px] w-[221px] h-[39px] rounded-2xl bg-white text-black font-semibold">
                Buy now
              </button>
              <p className=" text-white text-[14px] pt-[34px] pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                500K requests/month
              </p>
              <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                Basic support{" "}
              </p>
              <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                12 requests per second{" "}
              </p>
            </div>
            <div className=" w-[280px]  overflow-hidden h-[400px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
              <p className="pt-[40px] pl-[40px] text-[18px] text-white">Mega</p>
              <div className="flex items-center pt-[34px]">
                <p className="text-[54px] pl-[40px] text-white">$84</p>
                <p className="pt-[20px] text-white">/monthly</p>
              </div>
              <button className="mx-auto flex justify-center items-center mt-[34px] w-[221px] h-[39px] rounded-2xl bg-white text-black font-semibold">
                Buy now
              </button>
              <p className=" text-white text-[14px] pt-[34px] pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                1.2M requests/month
              </p>
              <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                24/7 support
              </p>
              <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
                <Image src={Done} alt="img" />
                20 requests per second{" "}
              </p>
            </div>
          </div>
          <div className="pt-[70px]"></div>
        </section>
        <section className=" mx-auto ">
          <div className="container">
            <p className="sm:pt-[97px] pt-[50px] sm:text-[54px] text-[45px] tracking-tighter text-center text-white">
              Frequently asked questions
            </p>
            {/* PLUS MINUS */}
            <div className="flex flex-col gap-4 w-[673px] mx-auto">
              <div className="flex justify-between items-center pt-[67px]">
                <p className="text-[18px] font-bold text-white">
                  How does the pricing work for teams
                </p>
                <p className="flex cursor-pointer" onClick={toggleText}>
                  <FaPlus className="w-8 h-8 text-white" />
                </p>
              </div>
              {isOpen && (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  magni illum et dolor reprehenderit nulla ad mollitia
                  accusantium nam animi voluptatem inventore, assumenda minima
                  culpa! Placeat illo voluptatibus tenetur sequi labore? Optio
                  animi beatae numquam.
                </p>
              )}
              <hr className="bg-black" />
            </div>
            <div className="flex flex-col gap-4 w-[673px] mx-auto">
              <div className="flex justify-between items-center pt-[67px]">
                <p className="text-[18px] font-bold text-white">
                  In what projects API can be used
                </p>
                <p className="flex cursor-pointer">
                  <FaPlus className="w-8 h-8 text-white" />
                </p>
              </div>

              <hr className="bg-black" />
            </div>
            <div className="flex flex-col gap-4 w-[673px] mx-auto">
              <div className="flex justify-between items-center pt-[67px]">
                <p className="text-[18px] font-bold text-white">
                  How I can pay for API access
                </p>
                <p className="flex cursor-pointer">
                  <FaPlus className="w-8 h-8 text-white" />
                </p>
              </div>

              <hr className="bg-black" />
            </div>
            <div className="flex flex-col gap-4 w-[673px] mx-auto">
              <div className="flex justify-between items-center pt-[67px]">
                <p className="text-[18px] font-bold text-white">
                  How this site is so beatifull{" "}
                </p>
                <p className="flex cursor-pointer" onClick={toggleText}>
                  <FaPlus className="w-8 h-8 text-white" />
                </p>
              </div>

              <hr className="bg-black" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

// import { Done, Nihol, Partner, VectorRight } from "@/assets";
// import Image from "next/image";
// import React, { useState } from "react";
// import "flowbite";

// import { FaPlus } from "react-icons/fa";

// const Home = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleText = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <main className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#1c113e_85%,#010101_100%)] sm:py-24 relative overflow-clip">
//       <div className="  mx-auto ">
//         <section className="container mx-auto content-center ">
//           <div>
//             <div className="flex mt-[132px] gap-3 items-center justify-center border-solid border-2 border-white/30 w-[229px] h-[31px] mx-auto rounded-md">
//               <p className="text-[13px] text-[#FFFFFF80]">
//                 Version 2.0 is here
//               </p>
//               <div className="flex items-center cursor-pointer">
//                 <p className="text-[13px] text-[#FFFFFF80] ">Read more </p>{" "}
//                 <Image className="w-[20px]" src={VectorRight} alt="img" />
//               </div>
//             </div>
//             <div>
//               <p className="text-center font-bold text-[70px] sm:text-[125px] tracking-tighter text-white">
//                 FastSaver
//               </p>
//               <p className="text-center font-bold  text-[70px] sm:text-[125px] tracking-tighter sm:-mt-20 -mt-12 text-white">
//                 Api
//               </p>
//             </div>
//             <p className="text-white text-center w-[380px] pl-6 pr-6 mx-auto ">
//               the world's largest API hub, is used by over four thousand
//               developers to find, test and connect to some API
//             </p>
//             <button className="mt-[32px] block mx-auto w-[131px] h-[50px] bg-white rounded-lg text-black">
//               Sign up now
//             </button>
//             {/* <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div> */}
//           </div>
//         </section>
//         <section className="">
//           <div className="container mx-auto">
//             <p className="text-center pt-[100px] sm:pt-[221px] sm:text-[54px] text-[45px] font-bold tracking-tighter text-white">
//               Everything you need
//             </p>
//             <p className="mx-auto w-[532px] gap-4 pt-[20px] text-white ">
//               Enjoy customizable lists, team work tools, and smart tracking all
//               in one place. Set tasks, get reminders, and see your progress
//               simply and quickly.
//             </p>
//             <div className="flex gap-1 pt-[66px] flex-wrap">
//               <div className="card max-w-[360px] overflow-hidden h-[352px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
//                 <div className="mt-[60px] w-[56px] h-[56px] rounded-xl bg-white flex justify-center items-center mx-auto">
//                   <Image src={Nihol} alt="nihol" />
//                 </div>
//                 <p className="text-center pt-6 font-bold text-[18px] text-white">
//                   Multiplatfrom support
//                 </p>
//                 <p className="text-center pt-2 text-white">
//                   Download medias from popular social media platforms
//                   like Instagram, TikTok, Youtube, Facebook, Twitter, Capcut,
//                   Threads, Pinterest, imdb, imgur, ifunny, Reddit, Vimeo,
//                   Snapchat, Likee, Linkedin, Tumblr, Hipi, Telegram,
//                   Getstickerpack, oke.ru, Streamable, Weibo, and more.
//                 </p>
//               </div>
//               <div className="card max-w-[360px] h-[352px] overflow-hidden mx-auto border-solid border-2 border-[#222222] rounded-xl">
//                 <div className="mt-[60px] w-[56px] h-[56px] rounded-xl bg-white flex justify-center items-center mx-auto">
//                   <Image src={Nihol} alt="nihol" />
//                 </div>
//                 <p className="text-center pt-6 font-bold text-[18px] text-white">
//                   High quality downloads
//                 </p>
//                 <p className="text-center pt-2 text-white">
//                   Scrape data from Instagram unlimitedly. Get all reels, videos,
//                   posts, stories… with full json, included download urls,
//                   caption, etc. you can use it as instagram reel downloader,
//                   instagram post downloader, instagram video downloader,
//                   instagram reel scraper, etc.
//                 </p>
//               </div>
//               <div className="card max-w-[360px] h-[352px] overflow-hidden mx-auto border-solid border-2 border-[#222222] rounded-xl">
//                 <div className="mt-[60px] w-[56px] h-[56px] rounded-xl bg-white flex justify-center items-center mx-auto">
//                   <Image src={Nihol} alt="nihol" />
//                 </div>
//                 <p className="text-center pt-6 font-bold text-[18px] text-white">
//                   Performance metrics
//                 </p>
//                 <p className="text-center pt-2 text-white">
//                   Experience lightning-fast response times and minimal latency
//                   with our high-performance API. You can make a large number of
//                   concurrent requests without performance degradation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className=" text-white ">
//           <div className="container mx-auto">
//             <p className="pt-[97px] sm:text-[54px] text-[45px] tracking-tighter text-center text-white">
//               Our partners
//             </p>
//             <p className="text-[22px] w-[500px] mx-auto text-center text-white">
//               Over 20+ successful telegram bots was ran by FastSaver API in 2024
//             </p>

//             <div
//               id="default-carousel"
//               className="relative w-full  mx-auto"
//               data-carousel="slide"
//             >
//               <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 <div
//                   className="hidden duration-700 ease-in-out"
//                   data-carousel-item
//                 >
//                   <Image
//                     src={Partner}
//                     alt="img"
//                     className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-[322px] h-[698px]"
//                   />
//                 </div>
//                 <div
//                   className="hidden duration-700 ease-in-out"
//                   data-carousel-item
//                 >
//                   <Image
//                     src={Partner}
//                     alt="img"
//                     className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-[322px] h-[698px]"
//                   />
//                 </div>
//                 <div
//                   className="hidden duration-700 ease-in-out"
//                   data-carousel-item
//                 >
//                   <Image
//                     src={Partner}
//                     alt="img"
//                     className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-[322px] h-[698px]"
//                   />
//                 </div>
//                 <div
//                   className="hidden duration-700 ease-in-out"
//                   data-carousel-item
//                 >
//                   <Image
//                     src={Partner}
//                     alt="img"
//                     className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-[320px] h-[698px]"
//                   />
//                 </div>
//               </div>
//               <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//                 <button
//                   type="button"
//                   className="w-3 h-3 rounded-full"
//                   aria-current="true"
//                   aria-label="Slide 1"
//                   data-carousel-slide-to={0}
//                 />
//                 <button
//                   type="button"
//                   className="w-3 h-3 rounded-full"
//                   aria-current="false"
//                   aria-label="Slide 2"
//                   data-carousel-slide-to={1}
//                 />
//                 <button
//                   type="button"
//                   className="w-3 h-3 rounded-full"
//                   aria-current="false"
//                   aria-label="Slide 3"
//                   data-carousel-slide-to={2}
//                 />
//                 <button
//                   type="button"
//                   className="w-3 h-3 rounded-full"
//                   aria-current="false"
//                   aria-label="Slide 4"
//                   data-carousel-slide-to={3}
//                 />
//                 <button
//                   type="button"
//                   className="w-3 h-3 rounded-full"
//                   aria-current="false"
//                   aria-label="Slide 5"
//                   data-carousel-slide-to={4}
//                 />
//               </div>
//             </div>

//             <p className="text-[22px] text-center pt-[48px] text-white">
//               Thanks for working with FastSaver API!
//             </p>
//           </div>
//         </section>
//         <section className="container mx-auto" id="pricing">
//           <p className="pt-[97px] sm:text-[54px] text-[45px] tracking-tighter text-center text-white">
//             Perfect service
//           </p>
//           <p className="text-[22px] w-[500px] mx-auto text-center text-white">
//             We provide service capable of withstanding huge stands. We use open
//             APIs to perform distributed queries.
//           </p>
//           <div className="flex flex-wrap gap-5 pt-[66px]  ">
//             <div className=" w-[280px]  overflow-hidden h-[400px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
//               <p className="pt-[40px] pl-[40px] text-[18px] text-white">Free</p>
//               <div className="flex items-center pt-[34px]">
//                 <p className="text-[54px] pl-[40px] text-white">$0</p>
//                 <p className="pt-[20px] text-white">/monthly</p>
//               </div>
//               <button className="mx-auto flex justify-center items-center mt-[34px] w-[221px] h-[39px] rounded-2xl bg-white text-black font-semibold">
//                 Buy now
//               </button>
//               <p className=" text-white text-[14px] pt-[34px] pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 100 requests/month
//               </p>
//               <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 Basic support{" "}
//               </p>
//               <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 One request per second{" "}
//               </p>
//             </div>
//             <div className=" w-[280px]  overflow-hidden h-[400px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
//               <p className="pt-[40px] pl-[40px] text-[18px] text-white">Pro</p>
//               <div className="flex items-center pt-[34px]">
//                 <p className="text-[54px] pl-[40px] text-white">$13</p>
//                 <p className="pt-[20px] text-white">/monthly</p>
//               </div>
//               <button className="mx-auto flex justify-center items-center mt-[34px] w-[221px] h-[39px] rounded-2xl bg-white text-black font-semibold">
//                 Buy now
//               </button>
//               <p className=" text-white text-[14px] pt-[34px] pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 100 requests/month
//               </p>
//               <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 24/7 support{" "}
//               </p>
//               <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />7 requests per second{" "}
//               </p>
//             </div>
//             <div className=" w-[280px]  overflow-hidden h-[400px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
//               <p className="pt-[40px] pl-[40px] text-[18px] text-white">
//                 Ultra
//               </p>
//               <div className="flex items-center pt-[34px] text-white">
//                 <p className="text-[54px] pl-[40px] text-white">$36</p>
//                 <p className="pt-[20px] text-white">/monthly</p>
//               </div>
//               <button className="mx-auto flex justify-center items-center mt-[34px] w-[221px] h-[39px] rounded-2xl bg-white text-black font-semibold">
//                 Buy now
//               </button>
//               <p className=" text-white text-[14px] pt-[34px] pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 500K requests/month
//               </p>
//               <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 Basic support{" "}
//               </p>
//               <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 12 requests per second{" "}
//               </p>
//             </div>
//             <div className=" w-[280px]  overflow-hidden h-[400px] mx-auto border-solid border-2 border-[#222222] rounded-xl">
//               <p className="pt-[40px] pl-[40px] text-[18px] text-white">Mega</p>
//               <div className="flex items-center pt-[34px]">
//                 <p className="text-[54px] pl-[40px] text-white">$84</p>
//                 <p className="pt-[20px] text-white">/monthly</p>
//               </div>
//               <button className="mx-auto flex justify-center items-center mt-[34px] w-[221px] h-[39px] rounded-2xl bg-white text-black font-semibold">
//                 Buy now
//               </button>
//               <p className=" text-white text-[14px] pt-[34px] pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 1.2M requests/month
//               </p>
//               <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 24/7 support
//               </p>
//               <p className=" text-white text-[14px]  pl-[40px] flex gap-1">
//                 <Image src={Done} alt="img" />
//                 20 requests per second{" "}
//               </p>
//             </div>
//           </div>
//           <div className="pt-[70px]"></div>
//         </section>
//         <section className=" mx-auto ">
//           <div className="container">
//             <p className="sm:pt-[97px] pt-[50px] sm:text-[54px] text-[45px] tracking-tighter text-center text-white">
//               Frequently asked questions
//             </p>
//             {/* PLUS MINUS */}
//             <div className="flex flex-col gap-4 w-[673px] mx-auto">
//               <div className="flex justify-between items-center pt-[67px]">
//                 <p className="text-[18px] font-bold text-white">
//                   How does the pricing work for teams
//                 </p>
//                 <p className="flex cursor-pointer" onClick={toggleText}>
//                   <FaPlus className="w-8 h-8 text-white" />
//                 </p>
//               </div>
//               {isOpen && (
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
//                   magni illum et dolor reprehenderit nulla ad mollitia
//                   accusantium nam animi voluptatem inventore, assumenda minima
//                   culpa! Placeat illo voluptatibus tenetur sequi labore? Optio
//                   animi beatae numquam.
//                 </p>
//               )}
//               <hr className="bg-black" />
//             </div>
//             <div className="flex flex-col gap-4 w-[673px] mx-auto">
//               <div className="flex justify-between items-center pt-[67px]">
//                 <p className="text-[18px] font-bold text-white">
//                   In what projects API can be used
//                 </p>
//                 <p className="flex cursor-pointer">
//                   <FaPlus className="w-8 h-8 text-white" />
//                 </p>
//               </div>

//               <hr className="bg-black" />
//             </div>
//             <div className="flex flex-col gap-4 w-[673px] mx-auto">
//               <div className="flex justify-between items-center pt-[67px]">
//                 <p className="text-[18px] font-bold text-white">
//                   How I can pay for API access
//                 </p>
//                 <p className="flex cursor-pointer">
//                   <FaPlus className="w-8 h-8 text-white" />
//                 </p>
//               </div>

//               <hr className="bg-black" />
//             </div>
//             <div className="flex flex-col gap-4 w-[673px] mx-auto">
//               <div className="flex justify-between items-center pt-[67px]">
//                 <p className="text-[18px] font-bold text-white">
//                   How this site is so beatifull{" "}
//                 </p>
//                 <p className="flex cursor-pointer" onClick={toggleText}>
//                   <FaPlus className="w-8 h-8 text-white" />
//                 </p>
//               </div>

//               <hr className="bg-black" />
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Home;