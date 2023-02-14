import React from 'react'
import { Container, Nav, Navbar,  } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className='text-decoration-none text-white'>Dororo</NavLink>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className={({isActive})=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/Pcb">Pcb</NavLink>
            <NavLink className={({isActive})=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/Keycaps">Keycaps</NavLink>
            <NavLink className={({isActive})=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/Plate">Plates</NavLink>
            <NavLink className={({isActive})=> isActive ? "btn btn-success" : "btn btn-dark"} to="/categoria/Teclado">Keyboards</NavLink>
          </Nav>
        
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
        
    </>
  )
}
