import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header/Header';

function Activity() {
  return (
    <div>
    <Header />
    <div className='container'>
      <h3 className='Activity'>กำหนดการแข่งขัน</h3>
      <Table striped>
      <thead>
        <tr className='Activityhead'>
          <th>กิจกรรม</th>
          <th>วัน/เดือน/ปี</th>
        </tr>
      </thead>
      <tbody>
        <tr className='column1'>
          <td>รับเสนอโครงงาน</td>
          <td>16 สิงหาคม - 30 กันยายน 2564(วันสุดท้ายระบบปิดภายในเวลา 17.00น.)</td>
        </tr>
        <tr className='column2'>
          <td>ตรวจผลงานรอบข้อเสนอโครงงาน</td>
          <td>4-15 ตุลาคม</td>
        </tr>
        <tr className='column1'>
          <td>ประกาศผลรอบนำเสนอผลงาน</td>
          <td>18 ตุลาคม 2564</td>
        </tr>
        <tr className='column2'>
          <td>ส่งมอบผลงานรอบนำเสนอผลงาน</td>
          <td>31 มกราคม 2565 (ระบบปิดภายในเวลา 17.00 น.)</td>
        </tr>
        <tr className='column1'>
          <td>ตรวจผลงานรอบนำเสนอผลงาน</td>
          <td>3-14 กุมภาพันธ์</td>  
        </tr>
        <tr className='column2'>
          <td>ประกาศผลโครงการที่ได้รับทุนสนับสนุนและโครงการผ่านเข้ารอบชิงชนะเลิศ</td>
          <td>17 กุมภาพันธ์</td>  
        </tr>
        <tr className='column1'>
          <td>รอบชิงชนะเลิศ</td>
          <td>มีนาคม 2565</td>  
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  );
}

export default Activity;