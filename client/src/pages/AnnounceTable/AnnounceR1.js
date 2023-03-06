import React, { Component } from 'react';
import $ from 'jquery';
import Header from '../../components/Header/Header';
import './Announce.css';

class AnnounceR1 extends Component {
  componentDidMount() {
    $(document).ready(() => {
      $.ajax({
        method: 'get',
        url: 'http://localhost:1337/api/usertables',
        success: (response) => {
          console.log(response);
          if (response.data.length > 0) {
            let html = '';
            for (let i = 0; i < response.data.length; i++) {
              const data = response.data[i].attributes;
              console.log(data.Code);
              html += `
                <tr style="font-size: 0.7rem; text-align: center;">
                  <th scope="row">${i + 1}</th> 
                  <td>${data.Code}</td>
                  <td>${data.Project}</td>
                  <td>${data.Class}</td>
                  <td>${data.Level}</td>
                  <td>${data.School}</td>
                  <td>${data.Advisor}</td>
                  <td>${data.Student1}</td>
                  <td>${data.Student2}</td>
                  <td>${data.Student3}</td>
                  <td>${data.Round1}</td>
                </tr>`;
            }
            $('#tbody').html(html);
            $('#myTable').DataTable();
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

  render() {
    return (
      <>
<Header />
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <div className='Htable'>
              <img className='NSC' src='https://www.nectec.or.th/sectionImage/1339' alt='logo'></img>
              <h6 className="display-4">การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 24 (NSC 2022)<br/><br/>
                                        รายชื่อโครงการที่ผ่านเข้าแข่งขันรอบที่ 2 ศูนย์ประสานงานภูมิภาค ภาคใต้</h6>
              <img classname='nstda5' src='https://www.nstda.or.th/archives/wp-content/uploads/2021/08/logo-nstda-202010.png' alt='logo2'></img>
            </div>
              <table className="table table-striped table-hover table-bordered pt-3 align-middle" id="myTable">
                <thead>
                  <tr className="align-middle" >
                    <th scope="col">ID</th>
                    <th scope="col">รหัสโครงการ</th>
                    <th scope="col">โครงการ</th>
                    <th scope="col">หมวดโครงการ</th>
                    <th scope="col">ระดับ</th>
                    <th scope="col">สถาบัน</th>
                    <th scope="col">อาจารย์ที่ปรึกษา</th>
                    <th scope="col">ผู้พัฒนาคนที่ 1</th>
                    <th scope="col">ผู้พัฒนาคนที่ 2</th>
                    <th scope="col">ผู้พัฒนาคนที่ 3</th>
                    <th scope="col">รับทุน</th>
                  </tr>
                </thead>
              <tbody className='bodyR2' id="tbody">

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
    );
  }
}
export default AnnounceR1;