import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    let handler = () => {
      setNav(false);
    };

    document.addEventListener('mousedown', handler);
  });

  return (
    <div>
      <div className="">
        <div onClick={() => setNav(true)} className="cursor-pointer">
          <FaBars className="ml-4" size={20} />
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[500px] h-full bg-solid p-10 ease-in duration-200"
            : "fixed top-0 right-[-100%] h-full p-10 duration-500 ease-in"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            {/* ==================== Logo ==================== */}
            <h2 className="text-2xl hover:text-red cursor-pointer">Ale</h2>

            {/* ==================== Close Icon ==================== */}
            <div onClick={() => setNav(false)} className="p-3">
              <FaTimes className="cursor-pointer" size={30} />
            </div>
          </div>
        </div>

        {/* ==================== Content ==================== */}
        <div className="text-center space-y-8">
          <h1 className="text-2xl">Updates</h1>
          <p>
            A list of things that I want to add in this project in the future
          </p>
          <ul className="text-left">
            <li>&gt; Add a background sound</li>
            <li>&gt; Make it mobile responsive</li>
            <li>&gt; Update with personal projects</li>
            <li>&gt; Make the contact section functional</li>
            <li>&gt; Add a footer</li>
            <li>&gt; Create a testimonial or quotes section</li>
            <li>&gt; Add animations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
