import React from 'react'
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import ButtonForSchedule from '../components/ButtonForSchedule';
import Footer from '../components/Footer';

function ScheduleG4() {     
     const data = [
          { id: '1', group: '22', timePresent: '09.00-09.20', IdProject: '24p14s00034', nameProject:'ระบบตรวจวัดและควบคุมการเกิดวัชพืชด้วยเทคโนโลยี LoRaWAN' },
          { id: '2', group: '22', timePresent: '09.20-09.40', IdProject: '24p14s0010', nameProject:'เครื่องตรวจสอบสภาพดินสำหรับการปลูกทุเรียน' },
          { id: '2', group: '22', timePresent: '09.40-10.00', IdProject: '24p14s0111', nameProject:'การตรวจหาโรคในทุเรียนจากภาพถ่ายทางอากาศ' },
        ];

        const thStyle = { textAlign: 'center' };
  return (
     <>
          <Header />
          <div style={{maxWidth:'960px',margin:"15px auto"}}>
          <div style={{textAlign:'center',backgroundColor:'#3C84AB',overflow:'hidden',borderRadius:'9px',color:'white',display:'flex',justifyContent:'center',alignContent:'center'}}>
            <h6>ตารางการแข่งขัน</h6>
          </div>    
          <div style={{textAlign:'center',backgroundColor:'#1699E1', overflow:'hidden',borderRadius:'9px',color:'white'}}>
            <h6>
              รอบ 2 พิจารณาผลงาน (รูปแบบออนไลน์)
            </h6>
          </div>
          <div style={{textAlign:'center',backgroundColor:'#C1AEFC', overflow:'hidden',borderRadius:'9px',color:'white'}}>
            <h6>
              วันจันทร์ที่ 9 กุมภาพันธ์ 2565
            </h6>
          </div>
          <div style={{textAlign:'center',backgroundColor:'#C1AEFC',overflow:'hidden',borderRadius:'9px',color:'white'}}>
            <h6>
              การนำเสนอผลงาน แต่ละโครงการใช้เวลา 20 นาที (นำเสนอ 15 นาที + ตอบคำถามกรรมการ 5 นาที)
            </h6>
          </div>  
          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th style={thStyle}>กลุ่ม</th>
          <th style={thStyle}>หมวด</th>
          <th style={thStyle}>เวลานำเสนอ</th>
          <th style={thStyle}>รหัสโครงการ</th>
          <th style={thStyle}>ชื่อโครงการ</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={thStyle}>4</td>
            <td style={thStyle}>{item.group}</td>
            <td style={thStyle}>{item.timePresent}</td>
            <td style={thStyle}>{item.IdProject}</td>
            <td>{item.nameProject}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <div style={{color:'black',paddingLeft:'10px'}}>
      <h6>ลิงก์การแข่งขัน : https://meet.google.com/wma-xked-kor</h6>
    </div>
    <div style={{color:'red',paddingLeft:'10px'}}>
      <h6>โปรดรักษาวลามาให้ตรงตามเวลาที่กำหนด * </h6>
    </div>
    </div>
    <br />
    <ButtonForSchedule />
    <div style={{height:'105px'}}></div>
    <Footer />
     </>
  )
}

export default ScheduleG4
