import React, { Component } from 'react';
import $ from 'jquery';
import jQuery from "jquery";
import Header from '../../components/Header/Header';
import './AnnounceR2.css';
import DataTable from 'datatables.net-bs5';
class AnnounceR2 extends Component {
  componentDidMount() {
    $(document).ready(() => {
        $.ajax({
          method: 'get',
          url: 'http://localhost:1337/api/r2s',
          success: (response) => {
            console.log(response);
            if (response.data.length > 0) {
                let html = '';
              for (let i = 0; i < response.data.length; i++) {
                const data = response.data[i].attributes;
                console.log(data.Code);
                html += `
                    <tr class="childT" style="font-size: 0.5rem; text-align: center;">
                      <td scope="row">${i + 1}</td> 
                      <td>${data.Code}</td>
                      <td>${data.Project}</td>
                      <th>${data.Class}</th>
                      <th>${data.Level}</th>
                      <th>${data.School}</th>
                      <th>${data.Advisor}</th>
                      <th>${data.Student1}</th>
                      <th>${data.Student2}</th>
                      <th>${data.Student3}</th>
                      <td>${data.Scholar}</td>
                      <td>${data.Final}</td>
                    </tr>`;
              }
              $('#tbody').html(html);
              if ($.fn.DataTable.isDataTable('#myTable')) {
                $('#myTable').DataTable().destroy();
              }
              $('#myTable').DataTable({
                "searching": true, // enable search feature
                "paging": true, // enable page feature
                "pagingType": "full_numbers",
                "lengthMenu": [ [10, 20, -1], [10, 20, "All"] ], // set page length options
                "func": {
                  "lengthMenu": "แสดง _MENU_ รายการ",
                  "search": "ค้นหา:",
                  "searchPlaceholder": "พิมพ์ที่นี่ . . .",
                  "paginate": {
                    "first": "หน้าแรก",
                    "last": "หน้าสุดท้าย",
                    "next": "ถัดไป",
                    "previous": "ก่อนหน้า"
                  }
                }
              });
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
                                        รายชื่อโครงการที่ผ่านรับทุนรอบนำเสนอผลงาน ศูนย์ประสานงานภูมิภาค ภาคใต้</h6>
              <img classname='nstda5' src='https://www.nstda.or.th/archives/wp-content/uploads/2021/08/logo-nstda-202010.png' alt='logo2'></img>
            </div>
              <table className="table table-striped table-hover table-bordered pt-3 align-middle" id="myTable">
                <thead>
                  <tr className="align-middle" >
                    <th scope="col">ID</th>
                    <th scope="col">รหัสโครงการ</th>
                    <th scope="col">โครงการ</th>
                    <th className='Hide' scope="col">หมวดโครงการ</th>
                    <th className='Hide' scope="col">ระดับ</th>
                    <th className='Hide' scope="col">สถาบัน</th>
                    <th className='Hide' scope="col">อาจารย์ที่ปรึกษา</th>
                    <th className='Hide' scope="col">ผู้พัฒนาคนที่ 1</th>
                    <th className='Hide' scope="col">ผู้พัฒนาคนที่ 2</th>
                    <th className='Hide' scope="col">ผู้พัฒนาคนที่ 3</th>
                    <th scope="col">รับทุน</th>
                    <th scope="col">เข้าชิง</th>
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

export default AnnounceR2;