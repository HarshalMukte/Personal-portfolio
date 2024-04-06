"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    color: "from-red-300 to-blue-300",
    title: "E-commerce Website",
    desc: "An amazing e-commerce website build with the reactjs framework(library)",
    img: "/1.png",
    link: "https://harshal-footprint24.netlify.app",
  },
  {
    color: "from-blue-300 to-violet-300",
    title: "Next.js Website landing Page",
    desc: "I have developed this webbsite landing page for my freelancing client, a website landing page with beautiful loading animations",
    img: "/2.png",
    link: "https://growthkar-website-nine.vercel.app",
  },
  {
    color: "from-violet-300 to-purple-300",
    title: "React.js Keep note Application",
    desc: "Developed a personal web application for storing the notes using react js",
    img: "/3.png",
    link: "https://custom-keep-note.netlify.app",
  },
  {
    color: "from-purple-300 to-red-300",
    title: "Memory Game",
    desc: "Created a wonderfull memory game for the entertainment and motivation amound my juniors on the event of the freshers part",
    img: "/4.png",
    link: "https://harshal-memory-game.netlify.app",
  },
  {
    color: "from-red-300 to-orange-300",
    title: "My old Personal Portfolio",
    desc: "This is the my first personal portfolio website which I have created when I am in my begetting to the CS industry",
    img: "/5.png",
    link: "https://harshal-mukte.netlify.app/",
  },
  {
    color: "from-orange-300 to-yellow-300",
    title: "Apple Airpods Product Page",
    desc: "I am very facinated by the Apple Airpods landing o=pag, so tried to copy the same scrolling animation, and here is the output below...",
    img: "/6.png",
    link: "https://harshal-airpods-pro.netlify.app",
  },
  {
    color: "from-yellow-300 to-green-300",
    title: "Tic-Tac-Toe ",
    desc: "The two player Tic-Tac-Toe, the web game which I have created just for fun, it has the beautiful animations and music on the top",
    img: "/7.png",
    link: "https://harshal-tic-tac-toe.netlify.app",
  },
  {
    color: "from-green-300 to-cyan-300",
    title: "Santa Claus Game ",
    desc: "This is the game I have developed on the occasion of the merry christmas",
    img: "/8.png",
    link: "https://harshal-merry-christmas.netlify.app",
  },
  {
    color: "from-cyan-300 to-blue-300",
    title: "Todo Application ",
    desc: "This is my personal and simple width some nice and smooth animations todo application",
    img: "/9.png",
    link: "https://harshal-todos.netlify.app",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <motion.div
      className="h-full relative"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className={`h-[1100vh]  relative`} ref={ref}>
        <div className="w-screen relative h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-8xl text-center">
          My Works
          {/* portfolio SCROLL SVG */}
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
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }}  className="flex relative">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />

            {items.map((item, index) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={index}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 md:w-96  lg:w-[500px]  xl:w-[600px] aspect-video">
                    <Image 
                    src={item.img} 
                    alt="image" 
                    fill 
                    className="object-contain" 
                    sizes="(max-width: 767px) 80vw, (max-width: 1023px) 96vw, (max-width: 1279px) 500px, 600px"/>
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  {/* BUTTONS */}
                  <div className="relative z-10">
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="p-4 font-bold">
                      SEE LIVE →
                      <span className="AncharBtnAnimation portFolioLinkBtn"></span>
                    </Link>
                  </div>
                  {/* <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link> */}
                </div>
              </div>
            ))}

          </motion.div>
        </div>
      </div>
      <div className="w-screen relative h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl sm:text-6xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64  h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
