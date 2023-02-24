import React from 'react'
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';

function ScheduleG5() {     
     const data = [
          { id: '1', group: '13', timePresent: '09.00-09.20', IdProject: '24p14s00034', nameProject:'PillTrack:ระบบติดตามการรับประทานยาเม็ดสำหรับผู้สูงอายุ' },
          { id: '2', group: '13', timePresent: '09.20-09.40', IdProject: '24p14s0010', nameProject:'เสียงสู่มือ' },
          { id: '2', group: '13', timePresent: '09.40-10.00', IdProject: '24p14s0111', nameProject:'สายรัดข้อมือเพื่อให้ความช่วยเหลือผู้สูงอายุและผู้พิการ' },
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
            <td style={thStyle}>5</td>
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

export default ScheduleG5
