import React from 'react'
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';

function ScheduleG2() {     
     const data = [
          { id: '1', group: '14', timePresent: '09.00-09.20', IdProject: '24p14s0001', nameProject:'ลองดู-ระบบทดลองสินค้าและบริการสำหรับผู้ประกอบการเพื่อการวิจัยตลาดภายใต้สถานการ์ณ Covid-19' },
          { id: '1', group: '14', timePresent: '09.20-09.40', IdProject: '24p14s0066', nameProject:'พีคอด' },
          { id: '1', group: '14', timePresent: '09.40-10.00', IdProject: '24p14s0103', nameProject:'GermyJunk:บริการค้นหาและวิเคราะห์จุดรับขยะปนเปื้อนโรคติดเชื้อไวรัสโคโรนา 2019(COVID-19)' },
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
            <td style={thStyle}>1</td>
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

export default ScheduleG2
