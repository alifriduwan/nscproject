import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function UserUpdate() {  
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:1337/api/usertables"+id)
      .then(res => res.json())
      .then(
        (result) => {

            setCode(result.attributes.Code)
            setProject(result.attributes.Project)
            setSchool(result.attributes.School)
            setAdvisor(result.attributes.Advisor)
            setStudent1(result.attributes.Student1)
            setStudent2(result.attributes.Student2)
            setStudent3(result.attributes.Student3)
            setRound1(result.attributes.Round1)
            setScholar(result.attributes.Scholar)
            setFinal(result.attributes.Final)
         
        }
      )
  }, [id])

  const handleSubmit = event => {
    event.preventDefault();
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
    fetch('http://localhost:1337/api/usertables', {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          window.location.href = '/';
        }
      }
    )
  }

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  return (
    <Container sx={{ p:2 }} maxWidth="sm">    
      <div>
        <Typography component="h1" variant="h5">
          User
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt:2 }} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="avatar"
                label="Avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
            </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}