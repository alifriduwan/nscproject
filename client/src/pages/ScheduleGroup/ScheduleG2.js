import React from 'react'
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ButtonForSchedule from '../../components/Button/ButtonForSchedule';
import WarnLog from '../../components/Card/WarnLog';
import { userData } from '../../helper';
import './TimeG.css'

function ScheduleG2() {     
     const data = [
          { id: '1', group: '14', timePresent: '09.00-09.20', IdProject: '24p14s0001', nameProject:'ลองดู-ระบบทดลองสินค้าและบริการสำหรับผู้ประกอบการเพื่อการวิจัยตลาดภายใต้สถานการณ์ Covid-19' },
          { id: '1', group: '14', timePresent: '09.20-09.40', IdProject: '24p14s0066', nameProject:'พีคอด' },
          { id: '1', group: '14', timePresent: '09.40-10.00', IdProject: '24p14s0103', nameProject:'GermyJunk:บริการค้นหาและวิเคราะห์จุดรับขยะปนเปื้อนโรคติดเชื้อไวรัสโคโรนา 2019(COVID-19)' },
        ];

        const thStyle = { textAlign: 'center' };
        const user = userData(); 

  if (!user) {
    return (
            <div>
              <WarnLog />
            </div>
          )
  }

  return (
    <>
     <Header />
       <div className='container'>
         <div className="card mt-5">
           <div className="card-body">
             <div style={{maxWidth:'960px',margin:"15px auto"}}>
                 <div className='HeadTable' style={{backgroundColor:'#006ebc',overflow:'hidden',borderRadius:'9px',color:'white'}}>
                   <h6>ตารางการแข่งขัน</h6>
                 </div>    
                 <div className='SecTable' style={{textAlign:'center',backgroundColor:'#1699E1', overflow:'hidden',borderRadius:'9px',color:'white'}}>
                   <h6>
                     รอบ 2 พิจารณาผลงาน (รูปแบบออนไลน์)
                   </h6>
                 </div>
                 <div className='ThdTable' style={{textAlign:'center',backgroundColor:'#C1AEFC', overflow:'hidden',borderRadius:'9px',color:'white'}}>
                   <h6>
                     วันจันทร์ที่ 9 กุมภาพันธ์ 2565
                   </h6>
                 </div>
                 <div style={{textAlign:'center',backgroundColor:'#C1AEFC',overflow:'hidden',borderRadius:'9px',color:'white'}}>
                   <h6>
                     การนำเสนอผลงาน แต่ละโครงการใช้เวลา 20 นาที (นำเสนอ 15 นาที + ตอบคำถามกรรมการ 5 นาที)
                   </h6>
                 </div>
                 <Table striped bordered hover variant="white" responsive="md" style={{width:'100%',borderRadius:'9px'}}> 
                   <thead style={{borderRadius:'9px'}}>
                     <tr className='TableHeader'>
                       <th style={thStyle}>กลุ่ม</th>
                       <th style={thStyle}>หมวด</th>
                       <th style={thStyle}>เวลานำเสนอ</th>
                       <th style={thStyle}>รหัสโครงการ</th>
                       <th style={thStyle}>ชื่อโครงการ</th>
                     </tr>
                   </thead>
                   <tbody>
                     {data.map((item) => (
                       <tr className='TableSec' key={item.id} style={{overflow:'hidden'}}>
                         <td style={thStyle}>1</td>
                         <td style={thStyle}>{item.group}</td>
                         <td style={thStyle}>{item.timePresent}</td>
                         <td style={thStyle}>{item.IdProject}</td>
                         <td style={thStyle}>{item.nameProject}</td>
                       </tr>
                     ))}
                   </tbody>
                 </Table>
             <div className='Meeting' style={{color:'black',paddingLeft:'10px'}}>
               <h6>ลิงก์การแข่งขัน : https://meet.google.com/wma-xked-kor</h6>
             </div>
             <div className='Warnning' style={{color:'red',paddingLeft:'10px'}}>
               <h6>โปรดรักษาวลามาให้ตรงตามเวลาที่กำหนด * </h6>
             </div>
           </div>
           <br />
           <ButtonForSchedule />
         </div>
       </div>
     </div>
    </>
 )
}

export default ScheduleG2