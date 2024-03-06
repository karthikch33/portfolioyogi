"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../../sub/gradient-component";
import img from "./ace.png";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { FaLink } from "react-icons/fa";

export function Cert3() {
  return (
    <div >
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 align-middle">
        <Image
          src={img}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />

        <center>
          <div className="mt-8 ">
            <Link href="https://google.accredible.com/61da6a85-2aea-4b1a-9731-07f58e28278c#gs.141gw6">

              <Button radius="md" className="text-[15px] font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 ">
                View Credentials <FaLink className="text-[15px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"></FaLink>
              </Button>
            </Link>
          </div>

        </center>

      </BackgroundGradient>
    </div>
  );
}
