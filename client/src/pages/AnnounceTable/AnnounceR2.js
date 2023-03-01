import React, { Component } from 'react';
import $ from 'jquery';
import Header from '../../components/Header/Header';

class AnnounceR2 extends Component {
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
                      <td>${data.Scholarship}</td>
                      <td>${data.ScholarshipChamp}</td>
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
            <h3 className="display-4">Table Mockup</h3>
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
                    <th scope="col">เข้าชิง</th>
                  </tr>
                </thead>
              <tbody id="tbody">

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