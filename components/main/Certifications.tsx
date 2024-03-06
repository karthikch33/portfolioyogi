"use client";
import React from "react";
import { Cert1 } from "./Certifications/Cert1";
import { Cert2 } from "./Certifications/Cert2";
import { Cert3 } from "./Certifications/Cert3";
import { Cert4 } from "./Certifications/Cert4";
import { Cert5 } from "./Certifications/Cert5";
import { Cert6 } from "./Certifications/Cert6";


const Certifications = () => {
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center"
            className="flex flex-col items-center justify-center py-10"
            id="certifications"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                My Certifications
            </h1>
            <div className="h-full w-full flex justify-center flex-wrap gap-20">

                <Cert1 />
                <Cert2 />
                <Cert3 />
                <Cert4 />
                <Cert5 />
                <Cert6 />

            </div>
        </div>
    );
};

export default Certifications;
