"use client";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import { usePathname } from "next/navigation";
import "remixicon/fonts/remixicon.css";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { RiUserLine, RiCloseLine, RiShoppingCart2Fill } from "react-icons/ri";
import { RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<SVGSVGElement>(null);

  // Logo animation (runs only once on mount)
  useEffect(() => {
    const tl = gsap.timeline();
    const logoAnimation = tl.from(logoRef.current, {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
    const linksAnimation = tl.from(
      "li",
      {
        x: 150,
        opacity: 0,
        duration: 1,
        stagger: 0.24,
      },
      "<"
    );
    return () => {
      logoAnimation.kill();
      linksAnimation.kill();
    };
  }, []);

  // Menu animation (runs when isMenuOpen changes)
  useEffect(() => {
    const menuAnimation = gsap.timeline({ paused: true });

    if (isMenuOpen) {
      menuAnimation
        .to(menuRef.current, {
          x: 0,
          duration: 1,
          ease: "power2.out",
        })
        .from(
          ".navlink",
          {
            x: 150,
            opacity: 0,
            duration: 0.5,
            stagger: 0.24,
          },
          "-=0.5"
        );
      menuAnimation.play();
    } else {
      menuAnimation.to(menuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
      menuAnimation.play();
    }

    return () => {
      menuAnimation.kill();
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside
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

  const navLinks = (
    <>
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
    </>
  );

  return (
    <nav className="bg-green-900 px-2 md:px-10 py-4 flex items-center justify-between">
      {/* 1st part */}
      <figure ref={logoRef}>
        <div className="text-4xl lg:text-7xl 2xl:text-9xl">Plant-Nest</div>
      </figure>

      {/* center part */}
      <div ref={centerRef}>
        <ul className="lg:flex lg:gap-7 xl:gap-20 hidden text-md xl:text-xl">
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
      </div>

      {/* last part */}
      <div className="flex items-center gap-2">
        {/* login icon */}
        <div className="relative lg:mb-4">
          <Link href={"/login"}>
            <RiUserLine className="lg:mr-4 cursor-pointer" size={32} />
          </Link>
          <span className="lg:absolute hidden lg:block">Login</span>
        </div>

        {/* cart */}
        <div className="relative flex gap-1 items-center bg-green-950 p-2">
          <div className="relative bg-green-950 py-1 px-1 text-white">
            <RiShoppingCart2Fill
              className="cursor-pointer text-green-200 hover:text-white"
              size={32}
            />
            <span className="absolute bg-green-600 rounded-full text-xs w-6 h-6 flex items-center justify-center -top-2 -right-1">
              0
            </span>
          </div>
          <span className="lg:block hidden text-white">Cart</span>
        </div>

        {/* menu button */}
        <RiMenu2Line
          ref={menuButtonRef}
          className="lg:hidden cursor-pointer"
          size={32}
          onClick={toggleMenu}
        />

        {/* menu */}
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

          {/* links for mobile and tablet */}
          <ul className="flex flex-col space-y-4 p-4">{navLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
