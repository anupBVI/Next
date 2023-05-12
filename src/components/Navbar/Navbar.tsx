import React, { FormEvent } from "react";
import * as style from "./Navbar.style";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import CustomModal from "../Modal/Modal";

import { Form } from "react-bootstrap";
import useLoginModal from "../../Hooks/useLoginModal";

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
  const { showLogin, handleLogin, handleCloseLogin } = useLoginModal();

  const [showSignup, setShowSignup] = useState(false);

  const handleSignUp = () => {
    setShowSignup(true);
  };
  const handleCloseSignUp = () => {
    setShowSignup(false);
  };
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("form Submitting");
  };

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "News",
      href: "/news",
    },
  ];

  return (
    <ul>
      {links.map((item) => {
        return (
          <Link
            className={activeLink === `${item.href}` ? "active" : ""}
            href={`${item.href}`}
          >
            {item.name}
          </Link>
        );
      })}

      <div>
        <Button onClick={handleLogin} primary label="Login" />
      </div>
      <div>
        <Button onClick={handleSignUp} tertiary label="Sign up" />
      </div>

      {/* LOGIN MODAL */}
      <CustomModal
        handleClose={handleCloseLogin}
        show={showLogin}
        header="Login header"
      >
        Login Modal
      </CustomModal>

      {/* SIGN UP MODAL */}
      <CustomModal handleClose={handleCloseSignUp} show={showSignup} haveFooter>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button label="Submit" />
        </Form>
      </CustomModal>
    </ul>
  );
};

export default Navbar;
