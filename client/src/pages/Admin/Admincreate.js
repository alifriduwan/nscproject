import React, { useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid,TextField,Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import { Button } from 'reactstrap';
import { userData } from '../../helper';



export default function Admincreate() {
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
        fetch("http://localhost:1337/api/usertables")
        .then(res => res.json())
        .then(
            (result) => {
            setItems(result.data);
            },

        )
  }, [])
  const handleSubmit = event => {
    event.preventDefault();
    const user = userData();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.jwt);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(

      {
        "data": {
          "Code": Code,
          "Project": Project,
          "Class": Class,
          "Level": Level,
          "Advisor": Advisor,
          "School": School,
          "Student1": Student1,
          "Student2": Student2,
          "Student3": Student3,
          "Scholar": Scholar,
          "Final": Final,
          "Round1": Round1,
          "relation": 2,
          "relations": [2, 4],
          "link": {
            "id": 1,
            "type": "abc"
          }
        }
      }

  );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
};

  fetch("http://localhost:1337/api/usertables", requestOptions)
    .then(response => response.json())
    .then(
      (result) => {
      
      if (Code && Project && Class && Level && School && Advisor && Student1 && Student2 && Student3 && Round1 && Scholar && Final  !== "" ){
        window.location.href = 'Admin'
      }
    })
    .catch(error => console.log('error', error));
  }
  
  const [Code,setCode] = useState('');
  const [Project,setProject] = useState('');
  const [Class,setClass] = useState('');
  const [Level,setLevel] = useState('');
  const [School,setSchool] = useState('');
  const [Advisor,setAdvisor] = useState('');
  const [Student1,setStudent1] = useState('');
  const [Student2,setStudent2] = useState('');
  const [Student3,setStudent3] = useState('');
  const [Round1,setRound1] = useState('');
  const [Scholar,setScholar] = useState('');
  const [Final,setFinal] = useState('');
  const [items,setItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

 

  return (
    <div>
    <Header/>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" sx={{p:2}}>
          <Typography variant='h6' gutterBootom component='div'>
            Create user
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField id="Code" label="รหัสโครงการ" variant="outlined" 
                fullWidth required
                onChange={(e) => setCode(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Project" label="โครงการ" variant="outlined" 
                fullWidth required 
                onChange={(e) => setProject(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Class" label="หมวดโครงการ" variant="outlined" 
                fullWidth required 
                onChange={(e) => setClass(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Level" label="ระดับ" variant="outlined" 
                fullWidth required 
                onChange={(e) => setLevel(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="School" label="สถาบัน" variant="outlined" 
                fullWidth required 
                onChange={(e) => setSchool(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Advisor" label="อาจาร์ยที่ปรึกษา" variant="outlined" 
                fullWidth required 
                onChange={(e) => setAdvisor(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Student1" label="ผู้พัฒนาคนที่ 1" variant="outlined" 
                fullWidth required 
                onChange={(e) => setStudent1(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Student2" label="ผู้พัฒนาคนที่ 2" variant="outlined" 
                fullWidth required 
                onChange={(e) => setStudent2(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Student3" label="ผู้พัฒนาคนที่ 3" variant="outlined" 
                fullWidth required 
                onChange={(e) => setStudent3(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Scholar" label="เข้ารอบได้รับเกียรติบัตร" variant="outlined" 
                fullWidth required 
                onChange={(e) => setScholar(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Final" label="ผ่านเข้าชิง" variant="outlined" 
                fullWidth required 
                onChange={(e) => setFinal(e.target.value)} />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Round1" label="ภาค" variant="outlined" 
                fullWidth required 
                onChange={(e) => setRound1(e.target.value)} />

              </Grid>
              <Grid item xs={12} >
                <Button type="submit" 
                variant="contained" 
                fullWidth >Create</Button>

              </Grid>
            </Grid>
          </form>
        </Container>
      </React.Fragment>
    </div>  
  );
}