"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";

type Props = {};

export default function StyleGuide({}: Props) {
  const [date, setDate] = useState<Date>();

  return (
    <section>
      {/* typography */}
      <div className=" flex flex-col gap-y-4 p-24">
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          aspernatur dignissimos, cupiditate eos quidem labore quo repudiandae
          vitae sunt impedit voluptates ab sapiente quam sed, provident ipsam
          quaerat id minus.
        </p>
      </div>
      <div className="bg-black p-24 flex flex-col gap-y-4">
        <Link href={"/"}>Link</Link>
        {/* buttons */}
        <Button variant={"default"}>Button 1</Button>
        <Button variant={"orange"}>Button 2</Button>
        <Button variant={"input"}>Button 3</Button>
        <Button variant={"orange"} size={"sm"}>
          Button 2
        </Button>
        {/* label & input */}
        <div>
          <label htmlFor="firstname">First Name</label>
          <Input type="firstname" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">First Name</label>
          <Input type="lastname" id="lastname" />
        </div>
        {/* calendar */}
        <div>
          <label>date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"input"}
                className={cn("w-full justify-start text-left font-normal")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* select */}
        <div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
