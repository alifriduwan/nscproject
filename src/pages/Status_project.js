import React from 'react'
import HeaderWLogin from '../components/HeaderWLogin'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Status_project() {
  return (
     <>
     <HeaderWLogin />
    <div style={{maxWidth:'1200px',margin:'25px auto'}}>
     <h1 style={{textAlign:'center'}}>สถานะโครงการ</h1>
    <CardGroup>
        <Card >  
          {/* <Card.Header>รอบที่ 1 </Card.Header> */}
          <Card.Body>
            <Card.Title style={{textAlign:'center'}}>ผ่านรอบที่ </Card.Title>
               <div style={{width:'50px',margin:'10px auto'}}>
                    <img src='../images/check.png' style={{width:'100%'}}/>
               </div>
          </Card.Body>
        </Card>
        <Card >  
          {/* <Card.Header>รอบที่ 2</Card.Header> */}
          <Card.Body>
            <Card.Title style={{textAlign:'center'}}>ได้รับทุน</Card.Title>
            <div style={{width:'50px',margin:'10px auto'}}>
                    <img src='../images/check.png' style={{width:'100%'}}/>
               </div>
          </Card.Body>
        </Card>
        <Card >  
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title style={{textAlign:'center'}}>ผ่ารอบที่ 2 และได้เข้าชิง</Card.Title>
            <div style={{width:'50px',margin:'10px auto'}}>
                    <img src='../images/check.png' style={{width:'100%'}}/>
               </div>
          </Card.Body>
        </Card>
    </CardGroup>
    </div> 
     </>
  )
}

export default Status_project
