import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HeaderAdmin from './HeaderAdmin';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { userData } from '../../helper';
import { useParams } from 'react-router-dom';

export default function AnnUpdate() {
  const { id } = useParams();

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
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

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("http://localhost:1337/api/announces/"+id ,requestOptions)
        .then(res => res.json())
        .then(result => {
          console.log(result)
          if (result['id'] !== ""){
              setTitle(result['data']['attributes']['title'])
              setDescription(result['data']['attributes']['description'])
          }
            
        })
  }, [id])

const handleSubmit = event => {
    event.preventDefault();
    const user = userData();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.jwt);
    myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "data": {
    "title": title,
    "description": description,
    "relation": 2,
    "relations": [
      2,
      4
    ],
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

fetch("http://localhost:1337/api/announces/"+id, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    if (title && description !== "" ){
        window.location.href = 'adminann'
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
      <Container maxWidth="sm" sx={{ p: 2 }}>
            <Typography variant='h6' gutterBottom component='div'>
                Update Announcement
            </Typography>
            <form onSubmit={ handleSubmit }>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField id="title" label="หัวข้อเรื่อง" variant="outlined" 
                         fullWidth required 
                         onChange={(e) => setTitle(e.target.value)}
                         value={title}
                         />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="description" label="รายละเอียด" variant="outlined" 
                         fullWidth required 
                         onChange={(e) => setDescription(e.target.value)}
                         value={description}
                         />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth >แก้ไข</Button>
                    </Grid>
                </Grid>
            </form>
      </Container>
    </React.Fragment>
    </div>
  );
}