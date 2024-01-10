"use client";

import React, { lazy } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useMediaQuery } from "react-responsive";

import "leaflet/dist/leaflet.css";

import { markers } from "@/data/markers";

const EditMap = lazy(() => import("./EditMap"));

type Props = {};

export default function Map({}: Props) {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
    >
      <EditMap isMobile={isMobile} />
    </motion.section>
  );
}
