import { Graph } from "@/assets";
import Image from "next/image";
import React from "react";

const ControlPage = () => {
  return (
    <main className=" bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#1c113e_85%,#010101_100%)]">
      <section>
        <div className="container mx-auto pt-[81px]">
          <p className="sm:text-[54px] text-[36px] text-white font-bold text-center pt-[80px] sm:pt-[120px] tracking-tighter">
            Statistics of your usage
          </p>
          <div className="block sm:flex">
            <div>
              <Image src={Graph} alt="graph" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[38px] pt-[120px] font-bold tracking-tighter text-white">
                Filter by
              </p>
              <div className="flex flex-col gap-[71px]">
                <div className="flex flex-col space-y-2">
                  <label className="text-white pt-[21px]">Token</label>
                  <select
                    className="mt-6 text-[20px] rounded-2xl bg-black text-white w-[220px] h-[53px] flex justify-center pl-[14px] pr-[24px] p-3 -ml-3"
                    name="allToken"
                    id="allToken"
                  >
                    <option selected className="text-[20px]">
                      All
                    </option>
                    <option value="token1">Token 1</option>
                    <option value="token2">Token 2</option>
                    <option value="token3">Token 3</option>
                  </select>

                  <label className="text-white pt-[50px]">Social Media</label>
                  <select
                    className="mt-12  text-[20px] rounded-2xl bg-black text-white w-[220px] h-[53px] flex justify-center pl-[14px] pr-[24px] p-3 -ml-3"
                    name="allSocial"
                    id="allSocial"
                  >
                    <option selected className="">
                      All
                    </option>
                    <option value="Telegram">Telegram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Instagram">Instagram</option>
                  </select>

                  <label className="text-white pt-[43px]">Time Range</label>
                  <select
                    className="mt-11 text-[20px] rounded-2xl bg-black text-white w-[220px] h-[53px] flex justify-center pl-[14px] pr-[24px] p-3 -ml-3"
                    name="allTime"
                    id="allTime"
                  >
                    <option value="24hours" className="">
                      {" "}
                      Last 24 hours
                    </option>
                    <option value="7days"> Last 7 days</option>
                    <option value="30days">Last 30 days</option>
                  </select>
                </div>
                <div className="pt-15">
                  <button className=" border-2 w-[220px] border-blue-700 text-blue-700 text-[20px] font-medium flex justify-center items-center rounded-2xl ">
                    Generate report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className="text-[54px] text-white font-bold text-center pt-[120px] tracking-tighter">
          Your current plan
        </p>
        <div className="max-w-[1005px] mx-auto h-[587px] p-[51px] bg-black mt-16 rounded-lg">
          <p className="text-[36px] sm:text-[64px] font-bold text-white">
            Ultra plan
          </p>
          <p className="text-[32px] font-bold text-blue-700">Active</p>
          <p className="sm:text-[32px] text-[28px] font-medium text-white pt-[60px]">
            500K requests/monthly
          </p>
          <p className="sm:text-[32px] text-[28px] font-medium text-white pt-[43px]">
            24/7 support
          </p>
          <p className="sm:text-[32px] text-[28px] font-medium text-white pt-[43px]">
            12 requests per second
          </p>
          <div className="flex justify-end items-center sm:pt-5 pt-3">
            <p className="text-white text-[34px] sm:text-[54px] font-bold">
              $36
            </p>
            <p className="text-white sm:pt-5 pt-2 text-[20px]">/monthly</p>
          </div>
        </div>
        <p className="text-[#2c2c2c] font-bold text-center sm:pt-[120px] pt-[60px] tracking-tighter sm:pb-[93px] pb-[53px]">
          Expires in 28.04.2024
        </p>
      </section>
    </main>
  );
};

export default ControlPage;
