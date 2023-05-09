import React from "react";
import * as style from "./Navbar.style";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const { Nav } = style;

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <Nav>
      <div className="logo">Navbar</div>
      <RightNav activeLink={activeLink} />
    </Nav>
  );
};

const RightNav = ({ activeLink }: any) => {
  return (
    <ul>
      <Link className={activeLink === "/" ? "active" : ""} href={"/"}>
        Home
      </Link>
      <Link className={activeLink === "/about" ? "active" : ""} href={"/about"}>
        About
      </Link>
      <Link
        className={activeLink === "/contact" ? "active" : ""}
        href={"/contact"}
      >
        Contact
      </Link>
      <Link
        className={activeLink === "/services" ? "active" : ""}
        href={"/services"}
      >
        Services
      </Link>
      <Link className={activeLink === "/news" ? "active" : ""} href={"/news"}>
        News
      </Link>
    </ul>
  );
};

export default Navbar;
