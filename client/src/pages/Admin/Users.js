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

export default function Users() {
  const [items,setItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    UsersGet()
  }, [])

    const UsersGet = () => {
        fetch("http://localhost:1337/api/users/me?populate=*")
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result)
            }
        )
    }

    const UpdateUser = id => {
        window.location = '/update/'+id
      }

    const user = userData();
    if (user && user.jwt) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + user.jwt);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("http://localhost:1337/api/users/me?populate=*", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result && result.role && result.role.name === "Authenticated") {
          setIsAuthenticated(true);
        }
      })
      .catch(error => console.log('error', error));
    }
        fetch("http://localhost:1337/api/usertables?pagination[page]=1&pagination[pageSize]=50")
        .then(res => res.json())
        .then(
            (result) => {
            setItems(result.data);
            },
            
        )


  const UserDelete = id => {
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": id
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:1337/api/usertables"+id, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result['message' ])
            if (result['status'] === 'ok') {
                UsersGet();
            }
        }
    )
        .catch(error => console.log('error', error));

    }


  return (
    <div>
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{p:2}}>
            <Paper sx = {{p:2}}>
            <Box display={'flex'}>
            <Box sx={{ flexGrow:1  }}>
                <Typography variant='h6' gutterBottom component='div'>
                Users
                </Typography>
            </Box> 
            <Box>
            <Link href="/admincreate">
                <Button variant="contained">Create</Button>
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
                <TableCell align="center">แก้ไข</TableCell>



            </TableRow>
            </TableHead>
            <TableBody>
            {items.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="center">{row.attributes.Code}</TableCell>
                <TableCell align="center">{row.attributes.Project}</TableCell>
                <TableCell align="center">{row.attributes.Class}</TableCell>
                <TableCell align="center">{row.attributes.Level}</TableCell>
                <TableCell align="center">{row.attributes.School}</TableCell>
                <TableCell align="center">{row.attributes.Advisor}</TableCell>
                <TableCell align="center">{row.attributes.Student1}</TableCell>
                <TableCell align="center">{row.attributes.Student2}</TableCell>
                <TableCell align="center">{row.attributes.Student3}</TableCell>
                <TableCell align="center">{row.attributes.Round1}</TableCell>
                <TableCell align="center">{row.attributes.Scholar}</TableCell>
                <TableCell align="center">{row.attributes.Final}</TableCell>
                <TableCell align="center">
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => UpdateUser(items.id)}>EDIT</Button>
                    <Button onClick={() => UserDelete(items.id)}>DELETE</Button>

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