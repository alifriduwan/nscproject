import React from 'react'
import Table from 'react-bootstrap/Table';
import ButtonForSchedule from '../../components/ButtonForSchedule';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

function Scheddule_MTG1() {     
     const data = [
          { id: '1', group: '21.1', nameProject:'โครี่ พื้นฐานเกาหลีใน 4 สัปดาห์' },
          { id: '2', group: '21.1', nameProject:'ย้อนเวลาศึกษาธรณีกาล' },
          { id: '2', group: '21.1', nameProject:'อี เคอเรนซี่' },
        ];

        const thStyle = { textAlign: 'center' };
  return (
     <>
          <Header />
      <div style={{maxWidth:'960px',margin:"15px auto"}}>
          <div style={{textAlign:'center',backgroundColor:'#3C84AB',overflow:'hidden',borderRadius:'9px',color:'white'}}>
            <h6>ตารางเข้าร่วมประชุมออนไลน์</h6>
          </div>    
          <div style={{textAlign:'center',backgroundColor:'#C1AEFC', overflow:'hidden',borderRadius:'9px',color:'white'}}>
            <h6>
              วันจันทร์ที่ 9 กุมภาพันธ์ 2565
            </h6>
          </div>
          <Table striped bordered hover variant="dark" responsive="md" style={{width:'100%',borderRadius:'9px'}}> 
      <thead style={{borderRadius:'9px'}}>
        <tr>
          <th style={thStyle}>กลุ่ม</th>
          <th style={thStyle}>หมวด</th>
          <th style={thStyle}>ชื่อโครงการ</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} style={{overflow:'hidden'}}>
            <td style={thStyle}>1</td>
            <td style={thStyle}>{item.group}</td>
            <td>{item.nameProject}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <div style={{color:'black',paddingLeft:'10px'}}>
      <h6><a href='#'>ลิงก์การประชุม : https://meet.google.com/wma-xked-kor</a></h6>
    </div>
    <div style={{color:'red',paddingLeft:'10px'}}>
      <h6>เวลาการประชุม : ตั้งแต่ 15:00 น. เป็นต้นไป </h6>
    </div>
    </div>
    <div style={{height:'120px'}}></div>
    <ButtonForSchedule />
    <div style={{height:'110px'}}></div>
    <Footer />
     </>
  )
}

export default Scheddule_MTG1
