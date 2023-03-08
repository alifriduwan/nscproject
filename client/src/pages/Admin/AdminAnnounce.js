import React,{useState,useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, ButtonGroup, Typography } from '@mui/material';
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

export default function AdminAnnounce() {
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
        RePage()
  }, [])

  const RePage = () =>{
    fetch("http://localhost:1337/api/announces")
        .then(res => res.json())
        .then(
            (result) => {
            setItems(result.data);
            },
            
        )
  }

  const AnnEdit = id => {
    window.location = '/annupdate/'+id
  }

  const AnnDel = id => {
    const user = userData();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.jwt);
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://localhost:1337/api/announces/"+id , requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (id !== ""){
          RePage()
        }
      })
      .catch(error => console.log('error', error));

  }

  if (!isAuthenticated) {
    return (
        <h1>You must be authenticated to view this page.</h1>
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
                    Announcement
                </Typography>
            </Box> 
            <Box>
            <Link href="anncreate">
                <Button variant="contained">Create</Button>
            </Link>
            </Box>
            </Box>

            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">เรื่อง</TableCell>
                <TableCell align="center">รายละเอียด</TableCell>
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
                <TableCell align="center">{item.attributes.title}</TableCell>
                <TableCell align="center">{item.attributes.description}</TableCell>
                <TableCell align="center">
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => AnnEdit(item.id)}>แก้ไข</Button>
                    <Button onClick={() => AnnDel(item.id)}>ลบ</Button>
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