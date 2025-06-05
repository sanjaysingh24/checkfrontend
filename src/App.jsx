import { useState } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);

  const handleclick = () => {
    Cookies.set('heytoken', 'ram', {
      path: '/',
      expires: 7,
      secure: true,
      sameSite: 'None'
    });
    alert('Cookie set');
  };

  const checkCookies = async () => {
    try {
      const sendresponse = await axios.get(
        'https://checkbackend-90i0.onrender.com/',
        {
          withCredentials: true
        }
      );
      console.log(sendresponse.data);
      alert(sendresponse.data.message || 'Cookie checked');
    } catch (err) {
      console.log(err);
      alert('Error checking cookie');
    }
  };

  return (
    <>
      <div>
        <button onClick={handleclick}>Set Cookie</button>
        <button onClick={checkCookies}>Check Cookie</button>
      </div>
    </>
  );
}

export default App;
