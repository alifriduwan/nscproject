import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Logout = () => {
    const navigate = useNavigate()
    const Swal = require('sweetalert2')
    useEffect(() => {
        localStorage.removeItem('user')
        Swal.fire({
            icon: "warning",
            title: 'คุณต้องการออกจากระบบหรือไม่?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ตกลง',
            cancelButtonText: 'ยกเลิก',
            confirmButtonWidth: 2000
        }).then((result) => {
            if (result.isConfirmed) {;
                navigate('/login');
            }
            else if (
                result.dismiss === Swal.DismissReason.cancel) {
                    navigate('/mainlog');
              }
          })
    })
    return (
        <div className="bgLogout">
        </div>
    )
}

export default Logout

