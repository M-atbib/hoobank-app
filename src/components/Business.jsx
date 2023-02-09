import React from "react";

import {
  ButtonGetStarted,
  FeatureCard,
  Paragraph,
  SubHeading,
} from "./subcomponent";

const Business = () => (
  <div
    className="flex justify-center gap-24 items-center px-32 py-28 font-poppins"
    id="features"
  >
    <div className="w-1/2">
      <SubHeading title="You do the business, we'll handle the money." />
      <Paragraph
        text="With the right credit card, you can improve your financiel life by
        building credit, earning rewards and saving money. But with hundreds of
        credits cards on the market."
      />
      <ButtonGetStarted />
    </div>

    <div className="w-1/2">
      <FeatureCard />
    </div>
  </div>
);

export default Business;
