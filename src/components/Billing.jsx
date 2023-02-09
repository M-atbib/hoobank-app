import React from "react";
import { bill, google, apple } from "../assets";
import { Paragraph, SubHeading } from "./subcomponent";

const Billing = () => (
  <div className="flex items-center justify-center w-full px-32 gap-28">
    <img src={bill} className="w-1/2" />
    <div className="w-1/2 font-poppins">
      <SubHeading title="Easily control your billing & invoicing." />
      <Paragraph
        text="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."
      />
      <div className="flex items-center justify-start gap-10">
        <img src={apple} alt="app store" className="cursor-pointer" />
        <img src={google} alt="google play" className="cursor-pointer" />
      </div>
    </div>
  </div>
);

export default Billing;
