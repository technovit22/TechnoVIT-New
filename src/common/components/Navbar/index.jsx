import React from "react";
import { LinkedItem } from "../Element/LinkedItem";
import { pages } from "./pages";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const variants = {
  hidden: { opacity: 0, x: 0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

const Navbar = () => {
  return (
    <Popover className="w-full sticky md:top-2 z-50 ">
      <motion.header
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "keyframes", duration: 0.5 }}
        className="px-5 py-1 md:w-11/12 mx-auto bg-white/20 shadow-blur backdrop-blur-xl rounded-md"
      >
        <div className="flex justify-between items-center md:space-x-10">
          <LinkedItem href="/">
            <img src="/assets/TechnoVITLogo.webp" className="w-32 sm:w-40" />
          </LinkedItem>

          <div className="md:hidden">
            <Popover.Button className="flex items-center justify-center text-white focus:outline-none">
              <HiMenu className="h-7 w-7" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="gap-2 hidden md:flex">
            {pages.map(({ name, href, Icon }) => (
              <LinkedItem
                key={name}
                href={href}
                Icon={Icon}
                className="px-2 py-1 text-lg font-medium rounded-full transition-all bg-primary-600 text-white"
              >
                {name}
              </LinkedItem>
            ))}
          </div>
        </div>
      </motion.header>

      {/* <--- Mobile device starts ---> */}

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg bg-white/30 shadow-blur backdrop-blur-xl divide-y-2 divide-gray-50">
            <div className="pt-2 pb-6 px-5">
              <div className="flex items-center justify-between">
                <img
                  src="/assets/TechnoVITLogo.webp"
                  className="w-32 sm:w-40"
                />

                <div className="-mr-2 -mt-2">
                  <Popover.Button
                    id="navbar-close-btn"
                    className="flex items-center justify-center text-white focus:outline-none"
                  >
                    <AiOutlineCloseCircle
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>

              <nav className="mt-6 flex flex-col gap-y-5 items-center">
                {pages.map(({ name, href, Icon }) => (
                  <LinkedItem
                    key={name}
                    href={href}
                    Icon={Icon}
                    onClick={() => {
                      document.getElementById("navbar-close-btn").click();
                    }}
                    className="px-2 py-1 text-lg font-medium rounded-full transition-all bg-primary-600 text-white"
                  >
                    {name}
                  </LinkedItem>
                ))}
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

      {/* <--- Mobile device ends ---> */}
    </Popover>
  );
};

export default Navbar;
