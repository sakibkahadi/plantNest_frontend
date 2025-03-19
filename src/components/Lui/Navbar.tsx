"use client";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import { usePathname } from "next/navigation";
import "remixicon/fonts/remixicon.css";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    if (isMenuOpen) {
      tl.to(menuRef.current, {
        x: 0,
        duration: 1,
        ease: "power2.out",
      }).from(
        ".navlink",
        {
          x: 150,
          opacity: 0,
          duration: 0.5,
          stagger: 0.24,
        },
        "-=0.5"
      );
      tl.play();
    } else {
      tl.to(menuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
      tl.play();
    }
  }, [isMenuOpen]);

  // close menu button clicking outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" px-2 py-4 flex items-center justify-between">
      <div className="text-4xl  sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
        Plant-Nest
      </div>
      {/* lg Links */}
      <ul className="lg:flex hidden space-x-4 text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-5xl">
        <li>
          <Link
            href="/"
            className={`${styles.navLink} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={`${styles.navLink} ${
              pathname === "/products" ? styles.active : ""
            }`}
          >
            Products
          </Link>
        </li>
      </ul>
      {/* menu button */}
      <RiMenuLine
        ref={menuButtonRef}
        className="lg:hidden mr-4 cursor-pointer"
        size={44}
        onClick={toggleMenu}
      />
      {/*  menu*/}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-64 bg-green-400 shadow-lg transform translate-x-full lg:hidden z-50"
      >
        {/* cancel button */}
        <div className="flex justify-end p-4">
          <RiCloseLine
            className="cursor-pointer"
            size={32}
            color="black"
            onClick={toggleMenu}
          />
        </div>
        {/* links for mobile and tablet*/}
        <ul className="flex flex-col space-y-4 p-4">
          <li className="navlink">
            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="navlink">
            <Link
              href="/products"
              className={`${styles.navLink} ${
                pathname === "/products" ? styles.active : ""
              }`}
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
