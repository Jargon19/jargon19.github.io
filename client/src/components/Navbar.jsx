import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-1 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[10vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center relative group py-1"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          {/* Portfolio text replacing logo images */}
          <span className="text-[28px] sm:text-[32px] font-bold font-mova text-battleGray tracking-wider transition-colors duration-300 group-hover:text-french">
            Portfolio
          </span>
          
          {/* Animated underline effect on hover */}
          <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-french transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[20px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links py-1`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close || "/placeholder.svg"}
                  alt="close"
                  className="w-[26px] h-[26px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu || "/placeholder.svg"}
              alt="menu"
              className="w-[32px] h-[32px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;