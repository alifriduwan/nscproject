import React, { useState } from 'react'
import { Button, Col, FormGroup, Input, Row,} from 'reactstrap';
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const initialUser = { password: "", identifier: ""};
function Login () {
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();
    const handleChange = ({ target }) => {
        const { name, value } = target
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,  
        }));
    };

    const handleLogin = async () => {
        const url = `http://localhost:1337/api/auth/local`;
        const Swal = require('sweetalert2')
            try {
                if (user.identifier && user.password){
                    const res = await axios.post(url, user);
                    console.log({ res })
                        Swal.fire({
                            icon: "success",
                            title: 'เข้าสู่ระบบสำเร็จ!',
                            text: "ยินดีต้อนรับเข้าสู่เว็บไซต์",
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'ตกลง'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                setUser(initialUser);
                                navigate('/');
                            }
                          })
                            
                        }
            }
            catch (error) {
                Swal.fire({
                    icon: "error",
                    title: 'มีบางอย่างผิดพลาด!',
                    text: "กรุณาลองใหม่อีกครั้ง โปรดตรวจสอบชื่อผู้ใช้หรือรหัสผ่านของท่าน",
                    confirmButtonText: 'ตกลง'
                })
                console.log({ error });
                toast.error(error.message, {
                    hideProgressBar: true
                });
        }
    }
    return  (
        <div className='mainLog'>
                <div className='container'>
                <div className='item'>
                    <div className='form'>
                        <h3>ยินดีต้อนรับเข้าสู่เว็บไซต์ประชาสัมพันธ์ข่าวสาร NSC</h3>
                        <span>สำหรับนักเรียน และอาจารย์ที่ปรึกษาเท่านั้น</span>
                        <FormGroup>
                        <h6>Enter Username</h6>
                            <Input 
                                type="email" 
                                name="identifier" 
                                value={user.identifier} 
                                onChange={handleChange}  />
                        </FormGroup>
                        <FormGroup>
                        <h6>Enter Password</h6>
                            <Input 
                                type="password" 
                                name="password" 
                                value={user.password} 
                                onChange={handleChange} />
                        </FormGroup>
                        <Button className='logbtn' color='primary' onClick={handleLogin} >Sign In</Button>
                        <p>Copy right &copy; 2023</p>
                    </div>
                    <div className='imgLog'>
                        <img src='https://www.nectec.or.th/sectionImage/1339' alt='logo' />
                    </div>
                </div>
                </div>
            <div className='footerLog'>
                <p>&copy; NSC - Sounthern Thailand Web เว็บศูนย์ประสานงานโครงการ NSC ภาคใต้</p>
            </div>
        </div>

   );
};
export default Login;
