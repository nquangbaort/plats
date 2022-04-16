import React, { useEffect, useState } from "react"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Button from "react-bootstrap/Button"

import LogoSVG from "@src/images/logo.svg"

import "./Header.scss"
import { navigate } from "gatsby"
import useDevice from "../../hooks/useDevice"

const Header = () => {
  const [lastScroll, setLastScroll] = useState(0)
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const { isMobile, isTablet } = useDevice()

  const controlNavbar = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll < window.innerHeight) {
      setScrollUp(false);
      return;
    }

    if (currentScroll > lastScroll && !scrollDown) {
      setScrollUp(false)
      setScrollDown(true)
    } else if (currentScroll < lastScroll && scrollDown) {
      setScrollUp(true)
      setScrollDown(false)
    }
    setLastScroll(currentScroll)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)

    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  })


  const onConnectWallet = () => {
    navigate("https://demo.plats.network/")
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      className={`navbar ${(!scrollUp && scrollDown) && "navbar--disappear"}`}
      fixed="top"
      style={(isMobile || isTablet) ? { paddingLeft: '2rem', paddingRight: '2rem' }: null}
    >
      <Navbar.Brand
        href="#overview"
        className="mr-100"
        style={{ marginRight: "10%" }}
      >
        <LogoSVG />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#overview" color="white">
            Overview
          </Nav.Link>
          <Nav.Link href="#features" color="white">
            Features
          </Nav.Link>
          <Nav.Link href="#roadmap" color="white">
            Roadmap
          </Nav.Link>
          <Nav.Link href="#team" color="white">
            Team
          </Nav.Link>
          <NavDropdown id="collasible-nav-dropdown" title="Resource" active={false} color="white" menuVariant="light"
            show={showDropdown}
            onMouseEnter={() => setShowDropdown(!showDropdown)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <NavDropdown.Item href="#white-paper">White paper</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Button
            className="btn__connect"
            onClick={onConnectWallet}
          >
            Connect Wallet
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
