import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { graphCMSImageLoader } from '../util';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../services';

const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);


  return (
    <div className="flex items-center lg:hidden px-6 justify-between border-b border-gray-400 py-8">
        {<div className="items-center w-32">
      <Link href="/">
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt='logo'
        className="shadow-lg rounded-t-lg lg:rounded-lg cursor-pointer"
        layout=""
        src={logo}
      />
      </Link>
      </div>}
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div onClick={() => setIsNavOpen(false)}>
            {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="cursor-pointer w-80 bg-gray-100 font-semibold transition duration-700 lg:m-4 m-2 hover:bg-pink-200 lg:p-4 p-4 flex flex-col">{category.name}</span>
            </Link>
          ))}
            </div>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 2;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Hamburger;