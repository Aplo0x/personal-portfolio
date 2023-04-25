import React, { useState, useEffect, useRef } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null as any);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutsideMenu = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideMenu);
    return () => {
      window.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        Updates
        {isMenuOpen ? (
          <svg
            className="ml-2 h-5 w-5 transform transition-transform duration-300 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="ml-2 h-5 w-5 transform transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#111111] ring-1 ring-red ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <ul>
              <li className="mb-3">&gt; Add animations</li>
              <li className="mb-3">
                &gt; Create an Testimonial or Quotes section
              </li>
              <li className="mb-3">&gt; Make it mobile responsive</li>
              <li className="mb-3">&gt; add a background sound</li>
              <li className="mb-3">
                &gt; Keep updating with personal projects
              </li>
              <li className="mb-3">
                &gt; change this menu to be a sidebar (?)
              </li>
              <li className="mb-3">&gt; Make the contact section functional</li>
              <li className="mb-3">&gt; Add a footer</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
