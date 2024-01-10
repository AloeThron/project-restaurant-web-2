import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUser, FaEnvelope } from "react-icons/fa";

export type Links = {
  path: string;
  name: string;
  offset1: number;
  offset2: number;
  icon?: JSX.Element;
};

export const links: Links[] = [
  {
    path: "hero",
    name: "Home",
    offset1: -50,
    offset2: 0,
    icon: <RiHomeFill />,
  },
  {
    path: "menu",
    name: "Menu",
    offset1: -50,
    offset2: 0,
    icon: <BiSolidFoodMenu />,
  },
  {
    path: "about",
    name: "About",
    offset1: -150,
    offset2: -50,
    icon: <FaUser />,
  },
  // {
  //   path: "contact",
  //   name: "Contact",
  //   offset1: 0,
  //   offset2: 0,
  //   icon: <FaEnvelope />,
  // },
];
