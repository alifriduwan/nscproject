import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer'

function AnnouncementR1() {
  return (
    <>
    <Header />
    <div className="container-anm" style={{marginTop:'50px'}} id="announceR1">
      <div className="container-lg">
      <h3>ผลการแข่งขันรอบที่ 1</h3>
      <Row xs={1} md={2} className="g-4">
      <Col>
        <Card bg="primary" text="white"  
    style={{
    border: '1px solid gray',
    boxShadow: '5px 5px 5px gray',
  }}>
          <Card.Img variant="top" src="../images/AR1_1.png" />
        </Card>
      </Col>
      <Col>
        <Card bg="primary" text="white" 
    style={{
    border: '1px solid gray',
    boxShadow: '5px 5px 5px gray',
  }}>
          <Card.Img variant="top" src="../images/AR1_2.png" />
        </Card>
      </Col>
      <Col>
        <Card bg="primary" text="white"  
    style={{
    border: '1px solid gray',
    boxShadow: '5px 5px 5px gray',
  }}>
          <Card.Img variant="top" src="../images/AR1_3.png" />
        </Card>
      </Col>
      <Col>
        <Card bg="primary" text="white"  
    style={{
    border: '1px solid gray',
    boxShadow: '5px 5px 5px gray',
  }}>
          <Card.Img variant="top" src="../images/AR1_4.png" />
        </Card>
      </Col>
    </Row>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default AnnouncementR1
