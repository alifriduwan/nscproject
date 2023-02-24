import React from 'react'
import './Main.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Main() {
  return (
     <>
          <div class="container-md">
               <div class="container-content" style={{marginTop:'25px'}}>
                    <div style={{marginLeft:'30px'}}>
                         <h1 className='display-6' style={{marginBottom:'0'}} >การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย</h1>
                         {/* <h1 style={{display:'inline-block',marginBottom:'0'}}>โปรแกรมคอมพิวเตอร์แห่งประเทศไทย</h1> */}
                         <p style={{paddingTop:'4.5px',fontSize:'19.5px'}}>The 24th National Software Contest:NSC 2022</p>
                    </div>
               </div>
          </div>
          <hr style={{margin:'35px auto',width:'90%', border:'1.5px solid #333'}}/>
          <div class="container-md">
               <div style={{marginTop:'25px'}}>
                    <div style={{marginLeft:'30px'}}>
                         <h5 style={{marginBottom:'0'}}>ขอเชิญชวนนักเรียน นิสิตและนักศึกษา</h5>
                         <p style={{paddingTop:'17px'}}>ที่มีความสามารถในการพัฒนาซอฟต์แวร์ส่งผลงานเข้าร่วมการแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ชิงถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี พร้อมรางวัลและเกียรติบัตร</p>     
                         <Button variant="outline-primary">รายละเอียดเพิ่มเติม...</Button>{' '}
                    </div>
               </div>
          </div>
     </> 
  )
}

export default Main
