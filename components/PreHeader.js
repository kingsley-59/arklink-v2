import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const PreHeader = ({ content }) => {
  const defaultEmail = 'ebykaima@gmail.com'
  const defaultWhatsapp = '+2349084760012'

  const email = content?.email ?? defaultEmail
  return (
    <>
      <Navbar className="bg-dark" style={{ maxHeight: '25px' }} >
        <Container className="" fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Nav>
            <Nav
              className="me-auto text-right my-lg-0"
              style={{ fontSize: 12 }}
              navbarScroll
            >
              <Nav.Link className='text-secondary' href={`mailto:${email}`}>{email}</Nav.Link>
              <a href="mailto:"></a>
              <Nav.Link className='text-secondary' href="#">{content?.whatsapp_no ?? defaultWhatsapp}</Nav.Link>
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