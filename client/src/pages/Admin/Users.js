import React,{useState,useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ButtonGroup, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import { userData } from '../../helper';
import HeaderAdmin from './HeaderAdmin';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WarnLog from '../../components/Card/WarnLog';
import conf from '../../conf';

export default function Users() {
  const [items,setItems] = useState([]);
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
        
    UsersGet()
  }, [])

    const UsersGet = () => {
        fetch(`${conf.apiPrefix}/usertables?pagination[page]=1&pagination[pageSize]=50`)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.data)
            }
        )
    }

    const UpdateUser = id => {
        window.location = '/Adminupdate/'+id
      }

    


  const UserDelete = id => {
    const user = userData();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.jwt);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch(`${conf.apiPrefix}/usertables/`+id, requestOptions)
    .then(response => response.json())
    .then(result => {
    console.log(result)
            if (id !== ""){ 
                UsersGet();
            }
        }
    )
        .catch(error => console.log('error', error));

    }

    if (!isAuthenticated) {
        return (
            <h1></h1>
        )
      }

  return (
    <div>
        <HeaderAdmin />
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{p:2}}>
            <Paper sx = {{p:2}}>
            <Box display={'flex'}>
            <Box sx={{ flexGrow:1  }}>
                <Typography variant='h6' gutterBottom component='div'>
                    ข้อมูลโครงการ
                </Typography>
            </Box> 
            <Box>
            <Link href="/admincreate">
                <Button variant="contained" color="success"  style={{marginBottom: '20px'}}>เพิ่มโครงการ <PersonAddIcon style={{paddingLeft : '5px'}}/></Button>
            </Link>
            </Box>
            </Box>

            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">รหัสโครงการ</TableCell>
                <TableCell align="center">โครงการ</TableCell>
                <TableCell align="center">หมวดโครงการ</TableCell>
                <TableCell align="center">ระดับ</TableCell>
                <TableCell align="center">สถาบัน</TableCell>
                <TableCell align="center">อาจารย์ที่ปรึกษา</TableCell>
                <TableCell align="center">ผู้พัฒนาคนที่ 1</TableCell>
                <TableCell align="center">ผู้พัฒนาคนที่ 2</TableCell>
                <TableCell align="center">ผู้พัฒนาคนที่ 3</TableCell>
                <TableCell align="center">ภูมิภาค</TableCell>
                <TableCell align="center">ทุน</TableCell>
                <TableCell align="center">เข้าชิง</TableCell>
                <TableCell align="center">ตั้งค่า</TableCell>



            </TableRow>
            </TableHead>
            <TableBody>
            {items.map((item) => (
                <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {item.id}
                </TableCell>
                <TableCell align="center">{item.attributes.Code}</TableCell>
                <TableCell align="center">{item.attributes.Project}</TableCell>
                <TableCell align="center">{item.attributes.Class}</TableCell>
                <TableCell align="center">{item.attributes.Level}</TableCell>
                <TableCell align="center">{item.attributes.School}</TableCell>
                <TableCell align="center">{item.attributes.Advisor}</TableCell>
                <TableCell align="center">{item.attributes.Student1}</TableCell>
                <TableCell align="center">{item.attributes.Student2}</TableCell>
                <TableCell align="center">{item.attributes.Student3}</TableCell>
                <TableCell align="center">{item.attributes.Round1}</TableCell>
                <TableCell align="center">{item.attributes.Scholar}</TableCell>
                <TableCell align="center">{item.attributes.Final}</TableCell>
                <TableCell align="center">
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => UpdateUser(item.id)}>แก้ไข  <EditOutlinedIcon /></Button>
                    <Button onClick={() => UserDelete(item.id)} color="error">ลบ <DeleteOutlinedIcon /></Button>

                </ButtonGroup>
                </TableCell>


                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

            </Paper>
            
        </Container>
        </React.Fragment>
    </div>
  );
}