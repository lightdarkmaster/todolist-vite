import React from 'react'
import Login from './Login.jsx';
import SignUp from './signup.jsx';
import { useState } from 'react';

export default function Form() {
  const [users] = useState([{ username: "chan", password: "chan123" }]);
  const [clicked, setClicked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);


  function clickedTrigger() {
    setClicked(!clicked)
  }
  
return (
<div>
    {
        clicked && <SignUp click={clickedTrigger} users={users}/>

    }
    {
        !clicked && <Login loggedIn={loggedIn}  click={clickedTrigger} users={users} setLoggedIn={setLoggedIn}/>
    }
</div>


)
}