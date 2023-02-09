import React from "react";
import { ButtonGetStarted, Paragraph, SubHeading } from "./subcomponent";
import { card } from "../assets";

const CardDeal = () => (
  <div className="flex justify-center items-center w-full px-32 gap-28 py-28">
    <div className="w-1/2">
      <SubHeading title="Find a better card deal in few easy steps" />
      <Paragraph text="Arcu tortor, purus in mattis at sed integer faucibus, Aliquet quis aliquet eget tortor. Aliquet ultrices ac, ametau." />
      <ButtonGetStarted />
    </div>
    <img src={card} className="w-1/2" />
  </div>
);

export default CardDeal;
