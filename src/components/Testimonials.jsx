import React from "react";
import { SubHeading, FeedBackCard } from "./subcomponent";
import { feedback } from "../constants";

const Testimonials = () => (
  <div className="w-full px-32">
    <div className="flex items-center justify-start gap-36 mb-16">
      <div className="w-2/5">
        <SubHeading title="What people are saying about us" />
      </div>
      <p className="text-zinc-500 w-96">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flex justify-center items-center font-poppins gap-10 feedback-container">
      <FeedBackCard />
    </div>
  </div>
);

export default Testimonials;
