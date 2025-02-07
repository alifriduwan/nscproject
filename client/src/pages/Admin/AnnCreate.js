import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HeaderAdmin from './HeaderAdmin';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { userData } from '../../helper';
import conf from '../../conf';

export default function AnnCreate() {
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
        fetch(`${conf.apiPrefix}/announces`)
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
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${conf.apiPrefix}/announces`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    if (title && description !== "" ){
        window.location.href = '/adminann'
    }
  })
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
      <Container maxWidth="sm" sx={{ p: 2 }}>
            <Typography variant='h6' gutterBottom component='div' style={{marginBottom: '1rem', textAlign: 'center'}}>
                เพิ่มประกาศ
            </Typography>
            <form onSubmit={ handleSubmit }>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField id="title" label="หัวข้อเรื่อง" variant="outlined" 
                         fullWidth required
                         onChange={(e) => setTitle(e.target.value)}
                         />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="description outlined-multiline-static" label="รายละเอียด" variant="outlined" 
                         fullWidth required multiline maxRows={4}
                         onChange={(e) => setDescription(e.target.value)}
                         />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth >เพิ่ม</Button>
                    </Grid>
                </Grid>
            </form>
      </Container>
    </React.Fragment>
    </div>
  );
}<TextField
id="filled-multiline-static"
label="Multiline"
multiline
rows={4}
defaultValue="Default Value"
variant="filled"
/>