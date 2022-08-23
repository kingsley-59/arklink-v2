import Link from 'next/link'
import React from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar className="bg-green" bg="dark" expand="lg" variant="dark">
  <Container className="p-3 px-4" fluid>
    <Navbar.Brand href="#">Arklink</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '150px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
        <Nav.Link href="/gallery">Gallery</Nav.Link>
        {/* <NavDropdown title="Categories" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Tiles</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Marbles</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Sanitary ware</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            See all categories
          </NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <Nav>
        <Link href='/contact#get-quote'><Button variant="outline-success">Get Quote</Button></Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header