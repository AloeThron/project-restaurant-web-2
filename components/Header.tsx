"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Link as ScrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "@/components/ui/button";

type Props = {};

export default function Header({}: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // detect scroll
      setActive(window.scrollY > 100);
    }

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // clear event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? `bg-black py-4` : `bg-none py-8`
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/* logo, nav, button */}
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            {/* logo */}
            <Image src={"/logo.svg"} width={75} height={30} alt="" />
          </Link>
          {/* nav */}
          <Nav
            containnerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitallize"
          />
          {/* button */}
          <ScrollLink to="reservation" smooth={true}>
            <Button variant={"orange"} size={"sm"}>
              Book a table
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile
            containnerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
}
