import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
<<<<<<< HEAD
=======
import './PlaceContact.css'
>>>>>>> 38b69476a6510b032d409b510d03da4cd0e9e201

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
<<<<<<< HEAD
                <p>อีเมลล์: wimon@coe.psu.ac.th</p>
                <p>เฟซบุ๊ก: NSC Thailand Southern Region-(PSU)</p>
=======
                <a href='mailto: wimon@coe.psu.ac.th' target={'_blank'} className='link-email'><p>อีเมลล์: wimon@coe.psu.ac.th</p></a>
                <a href='https://web.facebook.com/nsc.th' target={'_blank'} className='link-facebook'><p>เฟซบุ๊ก: NSC Thailand Southern Region-(PSU)</p></a>
>>>>>>> 38b69476a6510b032d409b510d03da4cd0e9e201
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