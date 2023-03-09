import React from 'react'
import Table from 'react-bootstrap/Table';
import ButtonForMeet from '../../components/Button/ButtonForMeeting';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WarnLog from '../../components/Card/WarnLog';
import { userData } from '../../helper';
import './MTG.css'

function Scheddule_MTG3() {     
     const data = [
          { id: '1', group: '21.2', nameProject:'เกมเพื่อช่วยในการจดจำตารางธาตุ' },
          { id: '2', group: '21.2', nameProject:'แอปพลิเคชั่นสำหรับการเรียนรู้ภาษาญี่ปุ่น' },
          { id: '2', group: '21.2', nameProject:'สื่อการเรียนรู้ตารางธาตุ' },
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
                 <div className='HeadMT' style={{textAlign:'center',backgroundColor:'#006ebc',overflow:'hidden',borderRadius:'9px',color:'white'}}>
                   <h6>ตารางเข้าร่วมประชุมออนไลน์</h6>
                 </div>    
                 <div className='SecMT' style={{textAlign:'center',backgroundColor:'#C1AEFC', overflow:'hidden',borderRadius:'9px',color:'white'}}>
                   <h6>
                     วันจันทร์ที่ 9 กุมภาพันธ์ 2565
                   </h6>
                 </div>
                 <Table striped bordered hover variant="white" responsive="md" style={{width:'100%',borderRadius:'9px'}}> 
                    <thead style={{borderRadius:'9px'}}>
                       <tr className='HeadTab'>
                         <th style={thStyle}>กลุ่ม</th>
                         <th style={thStyle}>หมวด</th>
                         <th style={thStyle}>ชื่อโครงการ</th>
                       </tr>
                     </thead>
                     <tbody>
                       {data.map((item) => (
                         <tr className='SecTab' key={item.id} style={{overflow:'hidden'}}>
                           <td style={thStyle}>1</td>
                           <td style={thStyle}>{item.group}</td>
                           <td style={thStyle}>{item.nameProject}</td>
                         </tr>
                       ))}
                     </tbody>
                   </Table>
                     <div className='meetlink' style={{color:'black',paddingLeft:'10px'}}>
                       <h6>ลิงก์การประชุม : https://meet.google.com/wma-xked-kor</h6>
                     </div>
                     <div className='meettime' style={{color:'red',paddingLeft:'10px'}}>
                       <h6>เวลาการประชุม : ตั้งแต่ 15:00 น. เป็นต้นไป </h6>
                     </div>
                 </div>
               <ButtonForMeet />
         </div>
       </div>
     </div>
    </>
 )
}

export default Scheddule_MTG3
