import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header/Header';

function Qualifications() {
  return (
    <div>
    <Header />
    <div className='container'>
    <div className="card mt-5">
      <div className="card-body">
          <h3 className='Quality'>คุณสมบัติผู้สมัคร</h3>
          <Table>
          <tbody>
            <tr className='CollQ1'>
              <td>กำลังศึกษาอยู่ในสถาบันการศึกษาในประเทศไทย</td>
            </tr>
            <tr className='CollQ2'>
              <td style={{color:'red'}} className="Secc">- ระดับนักเรียน: ประถมศึกษา มัธยมศึกษา อาชีวศึกษา หรือเทียบเท่า (ปวช.)</td>
            </tr>
            <tr className='CollQ2'>
              <td style={{color:'red'}} className="Secc">- ระดับนิสิตและนักศึกษา: อาชีวศึกษา หรือเทียบเท่า (ปวส.) และอุดมศึกษา (ไม่เกินปริญญาตรี)</td>
            </tr>
            <tr className='CollQ1'>
              <td>สมาชิก จำนวน 1-3 คน (ชื่อไม่ซ้ำในทีมอื่น) และที่ปรึกษาโครงการ 1 คน สังกัดสถาบันเดียวกัน</td>
            </tr>
            <tr className='CollQ2'>
              <td>ส่งผลงานเข้าแข่งขันได้ 1 ผลงานเท่านั้น</td>
            </tr>
            <tr className='CollQ1'>
              <td>ผลงานที่เข้าร่วมการแข่งขัน ผ่านการรับรองจากที่ปรึกษาโครงการและหัวหน้าสถาบันการศึกษา</td>
            </tr>
            <tr className='CollQ2'>
              <td>หากร่วมแข่งขัน YSC 2022 แล้ว ไม่สามารถสมัคร NSC 2022 ได้</td>
            </tr>
          </tbody>
        </Table>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Qualifications;