
import React from "react";
import { Navbar,Container,Nav } from 'react-bootstrap';
import Blog from "./Blog";
import Slider from "./Slider";
function Header(){
  return(
    <div>
    <Navbar className="Nav p-1">
    <Container>

   <div>
     <a className="text" href="" >HAVE ANY QUESTION ? +91 90333 16003</a>
   </div>
  </Container>
  </Navbar>

  <Navbar bg="light" variant="light">
    <Container>
    <a class="navbar-brand main_logo" href="" title="Best web design class in surat">
                <img class="logo_dark" src={require('../image/logo1.png')} height="60px" width="60px"></img>
       </a>
    <Nav className="ms-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Blog">Courses</Nav.Link>
      <Nav.Link href="/activities">Activities</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
  <Slider/>
  <Blog/>
    </div>
  )
}
export default Header;