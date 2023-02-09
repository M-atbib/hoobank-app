import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <div className="flex justify-between items-center px-36 py-11 font-poppins">
    <div i={stats[0].id} className="flex items-center">
      <h3 className="text-white capitalize mr-5 text-4xl font-semibold">
        {stats[0].value}
      </h3>
      <p className="text-gradient text-xl tracking-wide uppercase">
        {stats[0].title}
      </p>
    </div>

    <div className="text-slate-700">|</div>

    <div i={stats[1].id} className="flex items-center">
      <h3 className="text-white capitalize mr-5 text-4xl font-semibold">
        {stats[1].value}
      </h3>
      <p className="text-gradient text-xl tracking-wide uppercase">
        {stats[1].title}
      </p>
    </div>

    <div className="text-slate-700">|</div>

    <div i={stats[2].id} className="flex items-center">
      <h3 className="text-white capitalize mr-5 text-4xl font-semibold">
        {stats[2].value}
      </h3>
      <p className="text-gradient text-xl tracking-wide uppercase">
        {stats[2].title}
      </p>
    </div>
  </div>
);

export default Stats;
