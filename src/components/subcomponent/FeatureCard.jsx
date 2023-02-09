import React from "react";
import { features } from "../../constants";

const FeatureCard = () =>
  features.map(({ id, icon, title, content }) => (
    <div
      id={id}
      className="flex w-full items-center p-5 feature-card rounded-xl"
    >
      <img src={icon} className="bg-cyan-800/25 rounded-full w-20 p-4 mr-5" />
      <div>
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  ));

export default FeatureCard;
