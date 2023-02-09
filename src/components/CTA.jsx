import React from "react";
import { ButtonGetStarted, Paragraph, SubHeading } from "./subcomponent";

const CTA = () => (
  <div className="flex justify-between items-center bg-black-gradient-2 rounded-xl mx-32 py-10 px-20">
    <div className="">
      <SubHeading title="Let's try our service now!" />
      <div className="w-2/3">
        <Paragraph text="Everything you need to accept card payments and grow your business anywhere on the planet." />
      </div>
    </div>
    <ButtonGetStarted />
  </div>
);

export default CTA;
