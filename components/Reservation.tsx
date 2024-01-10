"use client";

import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "@/variants";
import ReservationForm from "./ReservationForm";

type Props = {};

export default function Reservation({}: Props) {
  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="reservation"
      className="xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col xl:justify-end xl:items-end"
    >
      <div className="bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:m-14 xl:p-16">
        <h2 className="text-white mb-9 capitalize">Book a table</h2>
        <ReservationForm />
      </div>
    </motion.section>
  );
}
