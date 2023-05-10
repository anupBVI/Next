import React, { FormEvent } from "react";
import * as style from "./Navbar.style";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import CustomModal from "../Modal/Modal";

import { Form } from "react-bootstrap";

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
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleSignUp = () => {
    setShowSignup(true);
  };
  const handleCloseSignUp = () => {
    setShowSignup(false);
  };
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("form Submitting")
  };

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
      <div>
        <Button rounded onClick={handleLogin} primary label="Login" />
      </div>

      <Button rounded onClick={handleSignUp} tertiary label="Sign up" />

      <CustomModal handleClose={handleCloseLogin} show={showLogin}>
        Login Modal
      </CustomModal>

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
