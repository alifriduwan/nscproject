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

  function userData() {
    // get user data from local storage or API
    const user = localStorage.getItem('user');
    return user;
  }

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
                    navigate('/');
              }
          })
      
      }
  const user = userData(); 
     if (!user) {
          return (
  <Navbar expand="lg" style={{paddingBottom:'22.5px', alignItems: 'center'}}>
      <Container>
        <Navbar.Brand href="/"><img className='NavLogo' src='https://www.nectec.or.th/sectionImage/1339' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{columnGap:'20px'}}>
            <Nav.Link className='bar1' href="/main">หน้าหลัก</Nav.Link>
            <NavDropdown className='bar1' title="การแข่งขัน" id="basic-nav-dropdown" variant="seconddary">
              <NavDropdown.Item href="/competitiontopics">หัวข้อการแข่งขัน</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="/activity">กำหนดการ</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="/qualification">คุณสมบัติ</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="/PlaceContact">สถานที่ติดต่อ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='bar2' title="ผลการแข่งขัน" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/announceR1">รอบที่ 1</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="/announceR2">รอบที่ 2</NavDropdown.Item>
            </NavDropdown>
            <Button className="confirm-dialog-button"  onClick={loginClick}>เข้าสู่ระบบ</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  return (
    <Navbar expand="lg" style={{paddingLeft:'22.5px', paddingRight: '22.5px'}}>
      <Container>
        <Navbar.Brand href="/"><img className='NavLogo' src='https://www.nectec.or.th/sectionImage/1339' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{columnGap:'20px'}}>
          <Nav.Link className='bar1' href="/main">หน้าหลัก</Nav.Link>
            <NavDropdown className="bar1" title="การแข่งขัน" id="basic-nav-dropdown" variant="seconddary">
              <NavDropdown.Item className="bar1_1" href="/competitiontopics">หัวข้อการแข่งขัน</NavDropdown.Item>
              <hr />
              <NavDropdown.Item className="bar1_2" href="/activity">กำหนดการ</NavDropdown.Item>
              <hr />
              <NavDropdown.Item className="bar1_3"href="/qualification">คุณสมบัติ</NavDropdown.Item>
              <hr />
              <NavDropdown.Item className="bar1_4" href="/PlaceContact">สถานที่ติดต่อ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="bar2" title="ผลการแข่งขัน" id="basic-nav-dropdown" >
              <NavDropdown.Item className="bar2_1" href="/announceR1">รอบที่ 1</NavDropdown.Item>
              <hr />
              <NavDropdown.Item className="bar2_2" href="/announceR2">รอบที่ 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='bar1' title="ตารางกิจกรรม" id="basic-nav-dropdown" variant="seconddary">
              <NavDropdown.Item href="meeting1">ตารางการประชุม</NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="scheduleG1">ตารางการนำเสนอ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='bar1' title="โครงงานของฉัน" id="basic-nav-dropdown" variant="seconddary">
              <NavDropdown.Item href="Profile">ข้อมูลส่วนตัว</NavDropdown.Item>
            </NavDropdown>
            <Button className="confirm-dialog-button" /*variant="outline-primary"*/  onClick={logoutClick}>ออกจากระบบ</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;