import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";

const Clients = () => (
  <div className="flex justify-between items-center px-32 py-28">
    <img src={airbnb} alt="airbnb" className="w-48 cursor-pointer" />
    <img src={binance} alt="binance" className="w-48 cursor-pointer" />
    <img src={coinbase} alt="coinbase" className="w-48 cursor-pointer" />
    <img src={dropbox} alt="dropbox" className="w-48 cursor-pointer" />
  </div>
);

export default Clients;
