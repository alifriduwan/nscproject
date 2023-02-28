import React from 'react'
import HeaderWLogin from '../components/HeaderWLogin'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from '../components/Footer'; 


function Status_project() {
  return (
     <>
     <HeaderWLogin />
     <div style={{backgroundColor:'#F4F3EA',height:'605px'}}>
     <div style={{height:'120px'}}></div>
    <div style={{maxWidth:'1200px',margin:'25px auto'}}>
     <h1 style={{textAlign:'center',color:'#333'}}>สถานะโครงการ</h1>
    <CardGroup style={{marginTop:'45px'}}>
        <Card >  
          {/* <Card.Header>รอบที่ 1 </Card.Header> */}
          <Card.Body style={{padding:'25px'}}>
            <Card.Title style={{textAlign:'center'}}>ผ่านรอบที่ 1</Card.Title>
               <div style={{width:'50px',margin:'10px auto'}}>
                    <img src='../images/check.png' style={{width:'100%'}}/>
               </div>
          </Card.Body>
        </Card>
        <Card >  
          {/* <Card.Header>รอบที่ 2</Card.Header> */}
          <Card.Body style={{padding:'25px'}}>
            <Card.Title style={{textAlign:'center'}}>ได้รับทุน</Card.Title>
            <div style={{width:'50px',margin:'10px auto'}}>
                    <img src='../images/check.png' style={{width:'100%'}}/>
          </div>
          </Card.Body>
        </Card>
        <Card >  
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body style={{padding:'25px'}}>
            <Card.Title style={{textAlign:'center'}}>ผ่ารอบที่ 2 และได้เข้าชิง</Card.Title>
            <div style={{width:'50px',margin:'10px auto'}}>
                    <img src='../images/check.png' style={{width:'100%'}}/>
               </div>
          </Card.Body>
        </Card>
    </CardGroup>
    </div> 
    </div>
    <Footer />
     </>
  )
}

export default Status_project
