import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import LoginUser from './Login.jsx'
import SignUp from './signup.jsx'

function Main() {

  // const [clicked, setClicked] = useState(false);

  // function clickedTrigger() {
  //   setClicked(!clicked)
  // }


  // if (clicked) {
  //   return <SignUp click={clickedTrigger} />
  // }

  // if (!clicked) {
  //   return <LoginUser click={clickedTrigger} />
  // }

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)