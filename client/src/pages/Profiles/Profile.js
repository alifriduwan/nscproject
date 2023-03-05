import React, { useEffect, useState } from 'react'
import WarnLog from '../../components/Card/WarnLog';
import { userData } from '../../helper';

function Profile() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);

    useEffect(() => {
    const user = userData();
    if (user && user.jwt) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + user.jwt);
    }

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("http://localhost:1337/api/users/me?populate=*", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
        })
          .catch(error => console.log('error', error));
    }, [])

    const User = userData(); 
    if (!User) {
         return (
              <div>
                   <WarnLog />
              </div>
    )} 

    return (
        <div>
        <h1>Profile</h1>
        </div>
    )
}

export default Profile