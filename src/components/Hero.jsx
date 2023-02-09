import React from "react";
import { discount, robot, arrowUp } from "../assets";
import { Paragraph } from "./subcomponent";

const Hero = () => (
  <div className="flex w-full">
    <div className="pl-32 pr-8 pt-24">
      <div className="flex items-center bg-discount-gradient rounded-md w-fit py-0 px-3 mb-7">
        <img src={discount} className="pr-2" />
        <p className="text-white uppercase text-sm">
          20% <span className="text-slate-400">discount for</span> 1 month{" "}
          <span className="text-slate-400">account</span>
        </p>
      </div>
      <div>
        <div className="flex w-full mb-6">
          <h1 className=" text-white capitalize text-6xl leading-snug font-semibold tracking-tight font-poppins">
            the next <span className="text-gradient">generation</span> payement
            method.
          </h1>
          <button className="border-2 border-solid border-teal-500 rounded-full h-28 p-7 text-teal-500 ">
            Get <img src={arrowUp} className="w-4 inline" /> Started
          </button>
        </div>
        <div className="w-2/3">
          <Paragraph
            text=" Our team of experts uses a methodology to identify the credit
          cardsmost likely to fit your needs. We examine annual percentage
          rates, annual fees."
          />
        </div>
      </div>
    </div>
    <div>
      <img src={robot} className="w-7/8" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
    </div>
  </div>
);

export default Hero;
