"use client";

import React, { useState } from "react";

const Login = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];
    const value = e.target.value;

    // Faqat raqamlarni qabul qilish
    if (/^\d*$/.test(value)) {
      newCode[index] = value;
      setCode(newCode);

      // Avtomatik keyingi inputga o'tish
      if (value.length === 1 && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (code[index] === "" && index > 0) {
        const prevInput = document.getElementById(`code-${index - 1}`);
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#1c113e_85%,#010101_100%)]">
      <div className="text-center">
        <div className="flex justify-center">
          {/* Icon yoki Logo */}
          <div className="bg-white p-5 rounded-full">
            <h1 className="text-black text-4xl font-bold">FastSaver Api</h1>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mt-8 text-white">
          Kodni Kiriting
        </h1>
        <p className="text-sm mt-2 text-white">
          <a
            href="https://t.me/qirikkibot"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @qirikkibot
          </a>{" "}
          telegram botiga kiring va 1 daqiqalik kodingizni oling.
        </p>

        <div className="flex justify-center gap-2 mt-8">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
