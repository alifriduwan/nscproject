import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Header.css';

function Header() {

  function loginClick() {
    const confirmBox = window.confirm('คุณต้องการที่จะเข้าสู่ระบบหรือไม่? ฟังชั่นนี้มีไว้สำหรับผู้ที่เข้าร่วมแข่งขันเท่านั้น');
    if (confirmBox === true) {
      window.location.href = "/announceR1";
    }
  }

  return (
    <Navbar expand="lg" bg="navbar navbar-dark bg-dark" style={{paddingBottom:'22.5px'}}>
      <Container>
        <Navbar.Brand href="/">
        <div style={{width:'50px',height:'40px'}}> 
          <img src='../images/LOGO-NSC.png' style={{width:'100%',borderRadius:'100%'}}/>
        </div>   
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{columnGap:'20px'}}>
            <Nav.Link className='nav_link' href="/" style={{color:'white'}}>หน้าหลัก</Nav.Link>
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
            <Button className="confirm-dialog-button" variant="outline-primary"  onClick={loginClick}>เข้าสู่ระบบ</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
