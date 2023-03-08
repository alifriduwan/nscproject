import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const WarnLog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: 'คุณไม่มีสิทธิ์เข้าถึง',
      text: 'โปรดทำการเข้าสู่ระบบเพื่อเข้าชมเว็บไซต์',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  }, [navigate]);

  return (
    <div>
    </div>
  );
};

export default WarnLog;
