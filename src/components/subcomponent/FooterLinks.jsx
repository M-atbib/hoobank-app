import React from "react";
import { footerLinks } from "../../constants";

const FooterLinks = () =>
  footerLinks.map(({ title, links }) => (
    <div>
      <h3 className="text-white text-lg mb-5">{title}</h3>
      <ul>
        {links.map(({ link, name }) => (
          <li className="mb-2">
            <a className="text-zinc-500" href={link}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ));

export default FooterLinks;
