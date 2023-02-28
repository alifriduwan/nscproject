import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

function HeaderWLogin() {
  return (
     <Navbar expand="lg" bg="#333" style={{paddingBottom:'22.5px',alignItems:'center'}}>
      <Container>
        <Navbar.Brand href="/">
        <div style={{width:'50px',height:'40px'}}> 
          <img src='../images/LOGO-NSC.png' style={{width:'100%',borderRadius:'100%'}}/>
        </div>   
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{columnGap:'20px',alignItems:'center'}}>
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
            <div style={{width:'65px'}}>
                {/* <a src='#'><img src='../images/user.png'style={{width:'100%'}} /></a> */}
                  <Dropdown>
                    <Dropdown.Toggle variant='none' id="dropdown-basic">
                      <img src='../images/user.png' style={{width:'100%'}}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">ข้อมูลส่วนตัว</Dropdown.Item>
                      <hr />
                      <Dropdown.Item href="#/action-2">สถานะโครงการ</Dropdown.Item>
                      <hr />
                      <Dropdown.Item href="#/action-3">ออกจากระบบ</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
            </div> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default HeaderWLogin
