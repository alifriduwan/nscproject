import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header/Header';
import conf from '../../conf';

function CompetitionTopics() {
  return (
    <div>
    <Header />
    <div className='container'>
    <div className="card mt-5">
      <div className="card-body">
          <h3 className='CompetitionTopics'>หัวข้อการแข่งขัน</h3>
          <Table striped>
          <thead>
            <tr className='CompetitionTopicshead'>
              <th>นิสิตและนักศึกษา</th>
              <th>นักเรียน</th>
              <th>หมวดการแข่งขัน</th>
            </tr>
          </thead>
          <tbody>
            <tr className='Coll1'>
              <td>11</td>
              <td>21</td>
              <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
            </tr>
            <tr className='Coll2'>
              <td>12</td>
              <td>22</td>
              <td>โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
            </tr>
            <tr className='Coll1'>
              <td>13</td>
              <td>23</td>
              <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
            </tr>
            <tr className='Coll2'>
              <td>14</td>
              <td>24</td>
              <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19และโรคติดเชื้ออุบัติใหม่</td>
            </tr>
          </tbody>
        </Table>
        <p className='specialtext'>* รางวัลพิเศษ รางวัลละ 10,000 บาท สำหรับหมวด 13 และ 23 หากใช้แพลตฟอร์ม Traffy Fondue *</p>
        </div>
    </div>
    </div>
    </div>
  );
}

export default CompetitionTopics;