import React from 'react'
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';

function ScheduleG3() {     
     const data = [
          { id: '1', group: '21.2', timePresent: '09.00-09.20', IdProject: '24p14s00034', nameProject:'เกมเพื่อช่วยในการจดจำตารางธาตุ' },
          { id: '2', group: '21.2', timePresent: '09.20-09.40', IdProject: '24p14s0010', nameProject:'แอปพลิเคชั่นสำหรับการเรียนรู้ภาษาญี่ปุ่น' },
          { id: '2', group: '21.2', timePresent: '09.40-10.00', IdProject: '24p14s0111', nameProject:'สื่อการเรียนรู้ตารางธาตุ' },
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
            <td style={thStyle}>3</td>
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

export default ScheduleG3
