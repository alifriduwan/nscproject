import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header/Header';

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
              <th>ภูมิภาค</th>
              <th>ข้อมูลติดต่อ</th>
            </tr>
          </thead>
          <tbody>
            <tr className='column1'>
              <th>ภาคเหนือ</th>
              <div className='contact1'>
              <td>
                <p>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</p>
                <p>โทร: 053-942-023</p>
                <p>อีเมลล์: northernNSC@gmail.com</p>
                <p>เฟซบุ๊ก: NSC Thailand Northern Region-CMU</p>
              </td>
              </div>
            </tr>
            <tr className='column1'>
              <th>ภาคตะวันออกเฉียงเหนือ</th>
              <div className='contact1'>
              <td>
                <p>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</p>
                <p>โทร: 043-048-048, 095-778-7518</p>
                <p>อีเมลล์: nsc.isan.kkuusp@gmail.com</p>
                <p>เฟซบุ๊ก: NSC E-Saan</p>
              </td>
              </div>
            </tr>
            <tr className='column1'>
              <th>ภาคใต้</th>
              <div className='contact1'>
              <td>
                <p>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์</p>
                <p>โทร: 074-287-076</p>
                <p>อีเมลล์: wimon@coe.psu.ac.th</p>
                <p>เฟซบุ๊ก: NSC Thailand Southern Region-(PSU)</p>
              </td>
              </div>
            </tr>
            <tr className='column1'>
              <th>ตะวันออก</th>
              <div className='contact1'>
              <td>
                <p>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา</p>
                <p>โทร: 038 103061</p>
                <p>อีเมลล์: krisana@it.buu.ac.th</p>
                <p>เฟซบุ๊ก: -</p>
              </td>
              </div>
            </tr>
            <tr className='column1'>
              <th>ภาคตะวันตก</th>
              <div className='contact1'>
              <td>
                <p>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศิลปากร วิทยาเขตพระราชวังสนามจันทร์</p>
                <p>โทร: 034 272923</p>
                <p>อีเมลล์: oatcomster@gmail.com</p>
                <p>เฟซบุ๊ก: NSC Thailand Western Region (CPSU)</p>
              </td>
              </div>
            </tr>
            <tr className='column1'>
              <th>ภาคกลาง</th>
              <div className='contact1'>
              <td>
                <p>สถาบันเทคโนโลยีนานาชาติสิรินธร มหาวิยาลัยธรรมศาตร์(ศูนย์บางกะปิ)</p>
                <p>โทร: 02 5013505-20 ต่อ 5037,5039</p>
                <p>อีเมลล์: siitnsc@gmail.com</p>
                <p>เฟซบุ๊ก: Nsc Siit Central Coordinator</p>
              </td>
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