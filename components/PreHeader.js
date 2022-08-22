import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const PreHeader = ({content}) => {
  const defaultEmail = 'ebykaima@gmail.com'
  const defaultWhatsapp = '+2349084760012'

  const email = content?.email ?? defaultEmail
  return (
    <>
    <Navbar className="bg-secondary" style={{ maxHeight: '20px' }} bg="dark" expand="lg" variant="dark">
  <Container className="" fluid>
    <Navbar.Brand href="#"></Navbar.Brand>
    <Nav>
      <Nav
        className="me-auto text-right my-lg-0"
        style={{ fontSize: 12 }}
        navbarScroll
      >
        <Nav.Link href={`mailto:${email}`}>{email}</Nav.Link>
        <a href="mailto:"></a>
        <Nav.Link href="#">{content?.whatsapp_no ?? defaultWhatsapp}</Nav.Link>
      </Nav>
      <Nav>
        
      </Nav>
    </Nav>
  </Container>
</Navbar>
    </>
  )
}

export default PreHeader