import React from "react";
import { links } from "@/data/link";

import { Link } from "react-scroll";

type Props = {
  containnerStyles: string;
  linkStyles: string;
};

export default function Nav({ containnerStyles, linkStyles }: Props) {
  return (
    <div className={`${containnerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset1}
            duration={500}
            className={`${linkStyles}`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
