import React from 'react'
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';

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
     </>
  )
}

export default ScheduleG4
