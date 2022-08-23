import Link from "next/link";
import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="bg-green" expand="lg" variant="dark">
        <Container className="p-3 px-4" fluid>
          <Navbar.Brand href="#">Arklink</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Link href="/contact#get-quote">
                <Button variant="outline-success">Get Quote</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
