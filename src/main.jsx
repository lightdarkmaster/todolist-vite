import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import SignUp from './signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Form from './Form.jsx'

function Main() {
  // const [users] = useState([{ username: "chan", password: "chan123" }]);
  // const [clicked, setClicked] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);


  // function clickedTrigger() {
  //   setClicked(!clicked)
  // }


  // if (clicked) {
  //   return <SignUp click={clickedTrigger} users={users} />
  // }

  // if (!clicked) {
  //   return <Login loggedIn={loggedIn}  click={clickedTrigger} users={users} setLoggedIn={setLoggedIn} />
  // }

// if(loggedIn){
//   return <App loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
// }

}
// const [users] = useState([{ username: "chan", password: "chan123" }]);
// const [clicked, setClicked] = useState(false);
// const [loggedIn, setLoggedIn] = useState(false);


// function clickedTrigger() {
//   setClicked(!clicked)
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/app" element={<App />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)