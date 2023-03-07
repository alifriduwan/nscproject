import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

function PlaceContact() {
  return (
    <div>
    <Header />
    <div className='container'>
    <div className="card mt-5">
      <div className="card-body">
          <h3 className='PlaceContact'>สถานที่ติดต่อ</h3>
          <Table striped>
          <thead>
            <tr className='PlaceContacthead'>
              <th>ข้อมูลติดต่อ</th>
            </tr>
          </thead>
          <tbody>
            <tr className='contact1'>
              <div>
                <p>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์</p>
                <p>โทร: 074-287-076</p>
                <p>อีเมลล์: wimon@coe.psu.ac.th</p>
                <p>เฟซบุ๊ก: NSC Thailand Southern Region-(PSU)</p>
              </div>
            </tr>
          </tbody>
        </Table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PlaceContact;