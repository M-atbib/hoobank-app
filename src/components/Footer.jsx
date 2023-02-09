import React from "react";
import { logo } from "../assets";
import { socialMedia } from "../constants";
import { FooterLinks } from "./subcomponent";

const Footer = () => (
  <div className="bg-gray-gradient mt-20 px-32 pt-20 pb-10 font-poppins">
    <div className="flex justify-between items-start pb-10 mb-7 border-b-2 border-gray-800 border-solid">
      <div>
        <img src={logo} alt="hoobank logo" className="mb-7" />
        <p className="text-zinc-500 w-72">
          A new way to make the payments easy ,reliable and secure.
        </p>
      </div>

      <div className="flex justify-evenly items-start gap-48">
        <FooterLinks />
      </div>
    </div>

    <div className="flex justify-between items-center">
      <p className="text-zinc-500">
        Copyright ©️ 2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex items-center gap-8">
        {socialMedia.map(({ link, icon }) => (
          <a href={link}>
            <img src={icon} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
