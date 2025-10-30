import React from "react";
import peace from "../../assets/peace.png";
import {  useTranslation } from "react-i18next";

export default function About() {
  const {t}=useTranslation()
  return (
    <div className="h-[calc(100vh-48px)] overflow-hidden relative flex justify-center">
      {/* Scroll Container */}
      <div className="teleprompter2 w-full flex flex-col items-center">
        <p className="font-bold md:text-3xl playfair-display text-[#0000ff] text-center lg:w-[55%] leading-normal" >
          {t("about")}
          <br />
          <span className="text-black">Jonah</span><br />
        </p>

        {/* Image scrolls with text */}
        <img src={peace} alt="peace" className="h-80 mt-12" />
      </div>
    </div>
  );
}
