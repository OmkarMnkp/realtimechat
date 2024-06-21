
import React from 'react';
import { useRef, useState } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from "universal-cookie";
import { Chat } from './components/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const cookies = new Cookies();
function App() {
  const [isAuth, setIsauth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);


  const signUserOut = async ()=>{
    await signOut(auth);
    cookies.remove("auth-token")
    setIsauth(false);
    setRoom(null);

  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsauth={setIsauth} />
      </div>
    );
  }

  return <>
    {room ? (
      <Chat room={room} />
    ) : (
      <div className='room'>
        <label>Enter Room Name:</label>
        <input ref={roomInputRef} />
        <button onClick={() => setRoom(roomInputRef.current.value)} >Enter Chat</button>
      </div>

    )} 
    
    <div className='sign-out'>
      <button className='btn' onClick={signUserOut} >Sign out</button>

    </div>
    
    
    </>
}

export default App;
