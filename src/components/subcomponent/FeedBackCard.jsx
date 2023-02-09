import React from "react";
import { quotes } from "../../assets";
import { feedback } from "../../constants";

const FeedBackCard = () =>
  feedback.map(({ id, content, img, name, title }) => (
    <div
      id={id}
      className="w-1/3 h-80 align-middle py-14 px-9 rounded-xl feedback-card cursor-pointer"
    >
      <img src={quotes} className="mb-9" />
      <p className="text-white mb-5 leading-relaxed">{content}</p>
      <div className="flex justify-start items-center">
        <img src={img} className="w-14 mr-3" />
        <div>
          <h3 className="text-white text-lg">{name}</h3>
          <p className="text-zinc-500 text-sm">{title}</p>
        </div>
      </div>
    </div>
  ));

export default FeedBackCard;
