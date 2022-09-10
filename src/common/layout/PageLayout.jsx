import React from "react";
import Head from "next/head";
import clsx from "clsx";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import SocialNavLinks from "../components/SocialNavLinks";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const PageLayout = ({ title = "", className = "", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="bg-[#111] p-2 md:p-0 text-white min-h-screen flex flex-col items-center overflow-x-hidden">
        <Navbar />

        <motion.div
          // variants={variants}
          // initial="hidden"
          // animate="enter"
          // exit="exit"
          // transition={{ type: "keyframes", duration: 0.5 }}
          className={clsx(
            "pt-16 md:w-11/12 flex-1  flex flex-col items-center overflow-x-hidden",
            className
          )}
        >
          {children}
        </motion.div>
      </main>

      <SocialNavLinks />
    </>
  );
};

export default PageLayout;
