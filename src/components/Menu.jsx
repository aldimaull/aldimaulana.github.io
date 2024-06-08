import React, { useState } from "react";
import { motion } from "framer-motion";
// import { ThemeIcon } from "./ThemeIcon.astro";

const Menu = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div onClick={handleNav} className="md:hidden px-4">
        {nav ? (
          <button
            className="material-symbols-rounded dark:text-on-surface-dark text-on-surface-light align-middle"
            size="25"
          >
            close
          </button>
        ) : (
          <button
            className="material-symbols-rounded dark:text-on-surface-dark text-on-surface-light align-middle"
            size="25"
          >
            menu
          </button>
        )}
      </div>
      <motion.div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] dark:bg-background-dark bg-background-light dark:text-on-surface-dark text-on-surface-light duration-500 z-10"
            : "fixed left-[-100%] top-0 duration-500 h-full"
        }
        initial={{ x: "-100%" }}
        animate={{ x: nav ? 0 : "-100%" }}
        transition={{ type: "tween" }}
      >
        <div onClick={handleNav} className="p-4">
          {nav ? (
            <button
              className="material-symbols-rounded dark:text-on-surface-dark text-on-surface-light"
              size="25"
            >
              close
            </button>
          ) : (
            <button
              className="material-symbols-rounded dark:text-on-surface-dark text-on-surface-light"
              size="25"
            >
              menu
            </button>
          )}
        </div>
        <div className="flex flex-col uppercase">
          <a href="/blog" className=" p-4 pt-4">
            <span>Blog</span>
          </a>
          <a href="/about" className=" p-4">
            <span>About</span>
          </a>
          <a href="/portfolio" className=" p-4">
            <span>Portfolio</span>
          </a>
          <a href="/project" className=" p-4">
            <span>Project</span>
          </a>
          <a href="/contact" className=" p-4 ">
            <span>Contact</span>
          </a>
          <span className="end:0 dark:inline m-4">{/* <ThemeIcon /> */}</span>
          <span className="dark:inline end:0 mx-4"></span>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
