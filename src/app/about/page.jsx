"use client";
import CvDownloadBtn from "@/components/CvDownloadBtn";
import Brain from "@/components/brain";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  //for framtion motion Stagerred children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-8 md:p-12 lg:p-20 xl:py-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48  lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col items-center gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <div className="w-60 h-60 md:w-80 md:h-80 bioImage relative">
              <Image
                src="/bioImage.png"
                alt="bioImage"
                fill
                className="object-cover"
                sizes="(max-width: 767px) 60vw, 80vw"
              />
            </div>
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg text-justify">
            Hi there, <span className="italic font-bold">I&apos;m Harshal Mukte</span>, and I&apos;m on a mission to create extraordinary user experiences as a front-end developer.
            </p>
            <p className="text-lg text-justify">
              Always at the forefront of web development, I continuously explore the latest technologies and methodologies, from cutting-edge frameworks to the finer details of HTML, CSS, and JavaScript. My ultimate aim? To deliver exceptional solutions that go above and beyond my client&apos;s expectations.
            </p>
            <p className="italic">
              Let&apos;s work together to create something extraordinary!
            </p>
             {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/contact" className="p-4 font-bold">
              Let&apos;s collaborate →
              <span className="AncharBtnAnimation"></span>
            </Link>
          </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{  y: 0 }}
              animate={{ y: "20px" }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" >
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              whileInView={{x : 0}}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              className="flex gap-4 flex-wrap"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REACT ROUTER
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REACT QUERY
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML5
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS3
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                BOOTSTRAP
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ANTDESIGN
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MUI
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                STRAPI
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                POSTMAN
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </motion.div>
              <motion.div variants={item} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </motion.div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{  y: 0 }}
              animate={{ y: "20px" }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              whileInView={{ x: "0" }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              whileInView={{ x: "0" }}
              viewport={{ once: true }}
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-full sm:h-48">
                {/* LEFT */}
                <div className="w-1/2 sm:w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Revolutionizing Web Interactions: Driving a 50% Increase in Engagement through Next.js and React.js, with a Specialization in Dynamic Animations
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  IGNITION NEST LABS
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 sm:w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-full sm:h-48">
                {/* LEFT */}
                <div className="w-1/2 sm:w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 sm:w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Developer Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Boosting Website Performance by 30%: Leveraging WordPress and React.js to Enhance Speed and User Experience.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Orion Innovation
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-full sm:h-48">
                {/* LEFT */}
                <div className="w-1/2 sm:w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - current
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2 sm:w-1/3"></div>
              </div>
            </motion.div>
            {/* CV download Button */}
            <div className=" w-full flex justify-center items-center my-4">
              <CvDownloadBtn />
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
