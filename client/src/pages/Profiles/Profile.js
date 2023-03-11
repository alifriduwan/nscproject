import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import { userData } from '../../helper';
import "./Profile.css"
import conf from '../../conf';

function Profile() {
    const [data, setData] = useState(false);

    useEffect(() => {
    const user = userData();
    if (user && user.jwt) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + user.jwt);
    }
var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };


        fetch(`${conf.apiPrefix}/users/me?populate=*`, requestOptions)
        .then(response => response.json())
        .then(result => {
        console.log(result);

        if (result) {
            setData(result); //STORE DATA TO SHOW IN PAGE
          }
        })
        .catch(error => console.log('error', error));
    }, [])

    if (!data) {
        return (
          <div>
            <h1></h1>
          </div>
        )
      }

    const { username, usertable } = data; //CALL DATA USERNAME USERTABLE

    return ( 
        <div>
            <Header />
            <div className="container">
                <div className="card mt-5">
                    <div className="card-body">
                        <div className='ProfileA'>
                            <h3>ข้อมูลส่วนตัว</h3>
                        </div>

                        <div className='Username'>
                            <h6>รหัสโครงการ</h6>
                            <p>{usertable.Code}</p>
                        </div>

                        <div className='Username'>
                            <h6>โครงการ</h6>
                            <p>{usertable.Project}</p>
                        </div>

                        <div className='Username'>
                            <h6>หมวดโครงการ</h6> 
                            <p>{usertable.Class}</p>
                        </div>

                        <div className='Username'>
                            <h6>ระดับ</h6>
                            <p>{usertable.Level}</p>
                        </div>

                        <div className='Username'>
                            <h6>อาจารย์ที่ปรึกษา</h6>
                            <p>{usertable.Advisor}</p>
                        </div>

                        <div className='Username'>
                            <h6>สถาบัน</h6>
                            <p>{usertable.School}</p>
                        </div>
                        <div className='Username'>
                            <h6>ผู้พัฒนาคนที่ 1</h6>
                            <p>{usertable.Student1}</p>
                        </div>

                        <div className='Username'>
                            <h6>ผู้พัฒนาคนที่ 2</h6>
                            <p>{usertable.Student2}</p>
                        </div>

                        <div className='Username'>
                            <h6>ผู้พัฒนาคนที่ 3</h6>
                            <p>{usertable.Student3}</p>
                        </div>

                        <div className='Username'>
                            <h6>ภูมิภาค</h6>
                            <p>{usertable.Round1}</p>
                        </div>

                        <div className='Username'>
                            <h6>ทุน</h6>
                            <p>{usertable.Scholar}</p>
                        </div>

                        <div className='Username'>
                            <h6>เข้าชิง</h6>
                            <p>{usertable.Final}</p>
                        </div>
                        <div className='BotPDF'>
                            <a href="https://drive.google.com/drive/folders/1aTjhepEp4AUqHN3o9TNOBO5WJHQMyuY7?usp=sharing">
                                <Button className='FilePDF' variant="success">ดาวน์โหลดเกียรติบัตรและเอกสารรับทุน</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Profile