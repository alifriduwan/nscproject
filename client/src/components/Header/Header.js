import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const Swal = require('sweetalert2')

  function loginClick() {
      localStorage.removeItem('user')
      Swal.fire({
          icon: "warning",
          title: 'คุณต้องการเข้าสู่ระบบหรือไม่?',
          text: 'สำหรับผู้เข้าแข่งขัน NSC เท่านั้น',
          showCancelButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ตกลง',
          cancelButtonText: 'ยกเลิก',
          confirmButtonWidth: 2000
      }).then((result) => {
          if (result.isConfirmed) {;
              navigate('/login');
          }
          else if (
              result.dismiss === Swal.DismissReason.cancel) {
                  navigate('/');
            }
        })
  
  }

  return (
    <Navbar expand="lg" style={{paddingLeft:'22.5px', paddingRight: '22.5px'}}>
      <Container>
        <Navbar.Brand href="/"><img className='NavLogo' src='https://www.nectec.or.th/sectionImage/1339' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{columnGap:'20px'}}>
            <Nav.Link className='nav_link' href="/main">หน้าหลัก</Nav.Link>
            <NavDropdown className="bar1" title="การแข่งขัน" id="basic-nav-dropdown" variant="seconddary">
              <NavDropdown.Item className="bar1_1" href="/topic">หัวข้อการแข่งขัน</NavDropdown.Item>
              <hr />
              <NavDropdown.Item className="bar1_2" href="">กำหนดการ</NavDropdown.Item>
              <hr />
              <NavDropdown.Item className="bar1_3"href="">คุณสมบัติ</NavDropdown.Item>
              <hr />
              <NavDropdown.Item className="bar1_4" href="placecontac">สถานที่ติดต่อ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="bar2" title="ผลการแข่งขัน" id="basic-nav-dropdown" >
              <NavDropdown.Item className="bar2_1" href="/announceR1">รอบที่ 1</NavDropdown.Item>
              <hr />
              <NavDropdown.Item className="bar2_2" href="/announceR2">รอบที่ 2</NavDropdown.Item>
            </NavDropdown>
            <Button className="confirm-dialog-button" /*variant="outline-primary"*/  onClick={loginClick}>เข้าสู่ระบบ</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;