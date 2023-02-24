import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Header.css'


function Header() {
    return (
      <Navbar expand="lg" bg="light" style={{paddingBottom:'22.5px'}}>
        <Container>
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{columnGap:'20px'}}>
              <Nav.Link className='nav_link' href="/">หน้าหลัก</Nav.Link>
              <NavDropdown title="การแข่งขัน" id="basic-nav-dropdown" variant="seconddary">
                <NavDropdown.Item href="/topic">หัวข้อการแข่งขัน</NavDropdown.Item>
                <hr />
                <NavDropdown.Item href="">กำหนดการ</NavDropdown.Item>
                <hr />
                <NavDropdown.Item href="">คุณสมบัติ</NavDropdown.Item>
                <hr />
                <NavDropdown.Item href="placecontac">สถานที่ติดต่อ</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ผลการแข่งขัน" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/announceR1">รอบที่ 1</NavDropdown.Item>
                <hr />
                <NavDropdown.Item href="/announceR2">รอบที่ 2</NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-primary" style={{ marginTop: '2.5px',padding:"0 25px"}}>Login</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
   

export default Header
