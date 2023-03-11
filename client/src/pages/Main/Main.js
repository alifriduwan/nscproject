import React, { useEffect, useState } from 'react'
import './Main.css'
// import Button from 'react-bootstrap/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { userData } from '../../helper';
import HeaderAdmin from '../Admin/HeaderAdmin';
import conf from '../../conf';

function Main() {
     const [isAuthenticated, setIsAuthenticated] = useState(false);
     useEffect(() => {
          const user = userData();
          if (user && user.jwt) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + user.jwt);
      
            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
      
            fetch(`${conf.apiPrefix}/users/me?populate=*`, requestOptions)
            .then(response => response.json())
            .then(result => {
              console.log(result);
              if (result && result.role && result.role.name === "Authenticated") {
                setIsAuthenticated(true);
              }
            })
            .catch(error => console.log('error', error));
          }
              
        }, [])

     if(isAuthenticated){
        return (
          <> 
               <HeaderAdmin />
                    <div className='container'>
                         <div style={{maxHeight:'100px'}} className='space-top'></div>
                         <div class="container-md">
                              <div class="container-content" style={{marginTop:'25px'}}>
                                   <div style={{marginLeft:'30px'}}>
                                        <h1 className='display-6' style={{marginBottom:'0',paddingTop:'25px'}} >ศูนย์ประสานงานการแข่งขัน NSC ระดับภาคใต้</h1>
                                        {/* <h1 style={{display:'inline-block',marginBottom:'0'}}>โปรแกรมคอมพิวเตอร์แห่งประเทศไทย</h1> */}
                                        <p style={{paddingTop:'4.5px'}} className='p-head'>The 24th National Software Contest:NSC 2022</p>
                                   </div>
                              </div>
                         </div>
                         <hr style={{margin:'35px auto',width:'90%', border:'1.5px solid #333'}}/>
                         <div class="container-md">
                              <div style={{marginTop:'25px'}} className='detailMain'>
                                   <div style={{marginLeft:'30px'}} className='Ps'>
                                        <h5 style={{marginBottom:'0'}} className='title2'>ขอเชิญชวนนักเรียน นิสิตและนักศึกษา</h5>
                                        <p style={{paddingTop:'5px'}} className='p-bot'>ที่มีความสามารถในการพัฒนาซอฟต์แวร์ส่งผลงานเข้าร่วมการแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ชิงถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี พร้อมรางวัลและเกียรติบัตร</p>     
                                        <a href='/announcement' className='btn-ข่าวสารและประชาสัมพันธ์'>ข่าวสารและประชาสัมพันธ์</a>
                                   </div>
                              </div>
                         </div>
                    </div>
               <Footer />
          </> 
       )
     }

  return (
     <> 
          <Header />
               <div className='container'>
                    <div style={{maxHeight:'100px'}} className='space-top'></div>
                    <div class="container-md">
                         <div class="container-content" style={{marginTop:'25px'}}>
                              <div style={{marginLeft:'30px'}}>
                                   <h1 className='display-6' style={{marginBottom:'0',paddingTop:'25px'}} >ศูนย์ประสานงานการแข่งขัน NSC ระดับภาคใต้</h1>
                                   {/* <h1 style={{display:'inline-block',marginBottom:'0'}}>โปรแกรมคอมพิวเตอร์แห่งประเทศไทย</h1> */}
                                   <p style={{paddingTop:'4.5px'}} className='p-head'>The 24th National Software Contest:NSC 2022</p>
                              </div>
                         </div>
                    </div>
                    <hr style={{margin:'35px auto',width:'90%', border:'1.5px solid #333'}}/>
                    <div class="container-md">
                         <div style={{marginTop:'25px'}} className='detailMain'>
                              <div style={{marginLeft:'30px'}} className='Ps'>
                                   <h5 style={{marginBottom:'0'}} className='title2'>ขอเชิญชวนนักเรียน นิสิตและนักศึกษา</h5>
                                   <p style={{paddingTop:'5px'}} className='p-bot'>ที่มีความสามารถในการพัฒนาซอฟต์แวร์ส่งผลงานเข้าร่วมการแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ชิงถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี พร้อมรางวัลและเกียรติบัตร</p>     
                                   <a href='/announcement' className='btn-ข่าวสารและประชาสัมพันธ์'>ข่าวสารและประชาสัมพันธ์</a>
                              </div>
                         </div>
                    </div>
               </div>
          <Footer />
     </> 
  )
}

export default Main
