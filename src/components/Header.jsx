import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap/Button"
import  Container  from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
        <Container fluid>
        <Navbar.Brand>
            
        </Navbar.Brand>

        </Container>

    </Navbar>
  )
}

export default Header
