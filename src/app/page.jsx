"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
          Innovative Web Crafter
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Hi I&apos;m Harshal Mukte. A passinate Front End <br /> Developer based in the India
          </p>
          {/* BUTTONS */}
          <div className="w-full">
            <Link href="/portfolio" className="p-4 font-bold">
              SEE MY WORKS →
              <span className="AncharBtnAnimation"></span>
            </Link>
          </div>
                {/* SOCIAL */}
          <div className="flex gap-4  ">
            <Link href="https://github.com/HarshalMukte" className="flex gap-3" target="_blank">
              <Image src="/github.png" alt="" width={24} height={24} />
              GitHub  
            </Link>
            <span>  /  </span>
            <Link href="https://www.linkedin.com/in/harshalmukte/" className="flex gap-3" target="_blank">
              <Image src="/linkedin.png" alt="" width={24} height={24} />
              LinkedIn
            </Link>
          </div>
        </div>
         {/* IMAGE CONTAINER */}
         <div className="h-1/2 lg:h-full lg:w-1/2 relative flex items-end justify-center">
          <div className="h-5/6 relative w-full">
            <Image src="/hero1.png" sizes="(max-width: 1023px) 100vw, 50vw" alt="hero Image" fill className="object-contain drop-shadow-2xl heroImage" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
