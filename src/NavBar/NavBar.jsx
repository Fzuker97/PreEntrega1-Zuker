import React from 'react'
import { Container, Nav, Navbar,  } from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dororo</Navbar.Brand>
        <CartWidget />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Pcb</Nav.Link>
            <Nav.Link href="#pricing">Keyboards</Nav.Link>
            
          </Nav>
          
          <Nav>
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </>
  )
}
