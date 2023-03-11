import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { userData } from "../../helper";
import { CssBaseline } from "@mui/material";
import HeaderAdmin from "./HeaderAdmin";
import conf from '../../conf';

export default function UserUpdate() {  

  const { id } = useParams();
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

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

    fetch(`${conf.apiPrefix}/usertables/`+id)
      .then(res => res.json())
      .then(
        (result) => {
          if (result['id'] !== ""){
            setCode(result['data']['attributes']['Code'])
            setProject(result['data']['attributes']['Project'])
            setClass(result['data']['attributes']['Class'])
            setLevel(result['data']['attributes']['Level'])
            setSchool(result['data']['attributes']['School'])
            setAdvisor(result['data']['attributes']['Advisor'])
            setStudent1(result['data']['attributes']['Student1'])
            setStudent2(result['data']['attributes']['Student2'])
            setStudent3(result['data']['attributes']['Student3'])
            setRound1(result['data']['attributes']['Round1'])
            setScholar(result['data']['attributes']['Scholar'])
            setFinal(result['data']['attributes']['Final'])
          }
        }
      )
  }, [id])

  const handleSubmit = event => {
    event.preventDefault();
    const user = userData();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.jwt);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({

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
      });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${conf.apiPrefix}/usertables/`+id, requestOptions)
    .then(response => response.json())
    .then(result => {
    console.log(result)
        if (id !== "" ){ 
          window.location.href = '/Admin';
        }
      }
    )
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
        <Container maxWidth="sm" sx={{ p: 2 }}>    
          <div>
            <Typography component="h1" variant="h5" style={{marginBottom: '1rem', textAlign: 'center'}}>
              แก้ไขข้อมูลโครงการ
            </Typography>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField id="Code" label="รหัสโครงการ" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setCode(e.target.value)}
                  value={Code}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Project" label="โครงการ" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setProject(e.target.value)}
                  value={Project}/>
              </Grid>
              <Grid item xs={12}>
                <TextField id="Class" label="หมวดโครงการ" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setClass(e.target.value)}
                  value={Class}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Level" label="ระดับ" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setLevel(e.target.value)}
                  value={Level}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="School" label="สถาบัน" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setSchool(e.target.value)}
                  value={School}/>
              </Grid>
              <Grid item xs={12} >
                <TextField id="Advisor" label="อาจารย์ที่ปรึกษา" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setAdvisor(e.target.value)}
                  value={Advisor}/>
              </Grid>
              <Grid item xs={12} >
                <TextField id="Student1" label="ผู้พัฒนาคนที่ 1" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setStudent1(e.target.value)}
                  value={Student1}/>
              </Grid>
              <Grid item xs={12}>
                <TextField id="Student2" label="ผู้พัฒนาคนที่ 2" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setStudent2(e.target.value)}
                  value={Student2}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Student3" label="ผู้พัฒนาคนที่ 3" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setStudent3(e.target.value)}
                  value={Student3}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Round1" label="ภูมิภาค" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setRound1(e.target.value)}
                  value={Round1}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Scholar" label="ได้รับทุน" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setScholar(e.target.value)}
                  value={Scholar}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="Final" label="เข้าชิง" variant="outlined" 
                  fullWidth required 
                  onChange={(e) => setFinal(e.target.value)}
                  value={Final}/>
              </Grid>
              
              <Grid item xs={12}>
                  <Button type="submit" variant="contained" style={{width: '100%'}} fullWidth>แก้ไข</Button>
              </Grid>
            </Grid> 
            </form>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
}