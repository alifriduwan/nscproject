import React from 'react'
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ButtonForSchedule from '../../components/ButtonForSchedule';

function ScheduleG6() {     
     const data = [
          { id: '1', group: '24', timePresent: '09.00-09.20', IdProject: '24p14s00034', nameProject:'ต้นแบบระบบควบคุมการฆ่าเชื้อด้วยแสง UV และพ่นน้ำยาฆ่าเชื้อผ่าน' },
          { id: '2', group: '24', timePresent: '09.20-09.40', IdProject: '24p14s0010', nameProject:'หุ่นยนต์ขนส่งเวชภัณฑ์ในสถานพยาบาล' },
          { id: '2', group: '24', timePresent: '09.40-10.00', IdProject: '24p14s0111', nameProject:'ระบบตรวจสอบและติดตามโรคออฟฟิศซินโดรม' },
        ];

        const thStyle = { textAlign: 'center' };
  return (
     <>
          <Header />

          <div style={{maxWidth:'960px',margin:"15px auto"}}>
          <div style={{textAlign:'center',backgroundColor:'#3C84AB',overflow:'hidden',borderRadius:'9px',color:'white'}}>
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
          <Table striped bordered hover variant="dark" className='table-rd'>
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
            <td style={thStyle}>6</td>
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
    <div style={{height:'100px'}}></div>
    <Footer />
    {/* </div> */}
     </>
  )
}

export default ScheduleG6
