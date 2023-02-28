import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom';

function HeaderWLogin() {
  const navigate = useNavigate();
  const Swal = require('sweetalert2')

  function logoutClick() {

    Swal.fire({
        icon: "warning",
        title: 'คุณต้องการออกจากระบบหรือไม่?',
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
            localStorage.removeItem('user')
        }
        else if (
            result.dismiss === Swal.DismissReason.cancel) {
                navigate('/mainlog');
          }
      })
  
  }

  return (
     <Navbar expand="lg" style={{paddingBottom:'22.5px', alignItems: 'center'}}>
      <Container>
        <Navbar.Brand href="/mainlog"><img className='NavLogo' src='https://www.nectec.or.th/sectionImage/1339' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{columnGap:'20px'}}>
            <Nav.Link className='nav_link' href="/">หน้าหลัก</Nav.Link>
            <NavDropdown className='bar1' title="การแข่งขัน" id="basic-nav-dropdown" variant="seconddary">
              <NavDropdown.Item href="/topic">หัวข้อการแข่งขัน</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="">กำหนดการ</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="">คุณสมบัติ</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="placecontac">สถานที่ติดต่อ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='bar2' title="ผลการแข่งขัน" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/announceR1">รอบที่ 1</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="/announceR2">รอบที่ 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className='bar1' title="โครงงานของฉัน" id="basic-nav-dropdown" variant="seconddary">
              <NavDropdown.Item href="#">ข้อมูลส่วนตัว</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="#">สถานะโครงการ</NavDropdown.Item>
            </NavDropdown>
            <Button className="confirm-dialog-button" /*variant="outline-primary"*/  onClick={logoutClick}>ออกจากระบบ</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default HeaderWLogin
