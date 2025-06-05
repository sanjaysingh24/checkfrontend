import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cookies from 'js-cookie';
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
const handleclick = ()=>{
Cookies.set('heytoken', 'ram', {
  path: '/',
  expires: 7,
  secure: true,           // IMPORTANT for HTTPS
  sameSite: 'None'        // IMPORTANT for cross-site cookie
});
}
const checkCookies = async()=>{
  try{
   const sendresponse = await axios.post('https://checkbackend-90i0.onrender.com/check',{},{
     withCredentials: true
   })
  }catch(err){
    console.log(err)
  }

}
  return (
    <>
      
     <div>
          <button onClick={handleclick}>set cookies</button>
          <button onClick={checkCookies}>checkcookies</button>
     </div>
    </>
  )
}

export default App
