import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { FaBars, FaTimes, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-red absolute left-0 -bottom-1.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="w-screen h-20 z-20 fixed"
    >
      <div className="px-20 py-10 flex items-center justify-between w-full h-full">
        {/* ==================== Logo ==================== */}
        <div className="flex items-center">
          <Link href="/" className="hover:text-red text-3xl cursor-pointer">
            Ale
          </Link>
        </div>

        {/* ==================== Updates Menu ==================== */}
        <div className="hidden 2xl:flex mr-4 absolute left-[50%] top-2 translate-x-[-50%]">
          Menu
        </div>

        {/* ==================== Links ==================== */}
        <nav style={{ color: `${textColor}` }} className="hidden md:flex">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>

        {/* ==================== Burger Icon ==================== */}
        <div className="md:hidden">
          <div onClick={() => setNav(true)} className="cursor-pointer">
            <FaBars size={30} />
          </div>
        </div>
      </div>

      {/* ==================== Mobile Menu ==================== */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-4/5 h-full bg-solid p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] h-full p-10 duration-300 ease-in"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {/* ==================== Logo ==================== */}
              <h2 onClick={() => setNav(false)} className="text-2xl">
                Ale
              </h2>

              {/* ==================== Close Icon ==================== */}
              <div onClick={() => setNav(false)} className="p-3">
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          {/* ==================== Mobile Links ==================== */}
          <nav className="mt-24 flex flex-col h-fit gap-8">
            <CustomLink href="/" title="Home" />
            <CustomLink href="/about" title="About" />
            <CustomLink href="/projects" title="Projects" />
            <CustomLink href="/contact" title="Contact" className="" />
          </nav>

          {/* ==================== Mobile Social Icons ==================== */}
          <div className="absolute left-[50%] bottom-80 translate-x-[-50%] grid grid-cols-3 mx-auto w-4/5 gap-10 ">
            <Link
              href="https://github.com/Aplo0x"
              className="flex items-center justify-center"
            >
              <AiOutlineGithub size={30} />
            </Link>
            <Link
              href="https://www.instagram.com/aplo0x/"
              className="flex items-center justify-center"
            >
              <AiOutlineInstagram size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alexandre-fortunato-ribeiro/"
              className="flex items-center justify-center"
            >
              <FaLinkedinIn size={30} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
