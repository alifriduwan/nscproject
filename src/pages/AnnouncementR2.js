import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer'

function AnnouncementR2() {
  return (
    <>
      <Header />
      <div className="container-anm" >
      <div className="container-lg" style={{marginTop:'50px'}}>
      <h3>ผลการแข่งขันรอบที่ 2</h3>
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
          <Card.Img variant="top" src="../images/AR2_2.png" />
        </Card>
      </Col>
      <Col>
        <Card bg="primary" text="white"  
    style={{
    border: '1px solid gray',
    boxShadow: '5px 5px 5px gray',
  }}>
          <Card.Img variant="top" src="../images/AR3_3.png" />
        </Card>
      </Col>
    </Row>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default AnnouncementR2
