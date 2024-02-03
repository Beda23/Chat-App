import React, { useState } from 'react';
import axios from 'axios';

const LoginForm=()=>{
    const[username,setusername]= useState('');
    const[password,setpassword]=useState('');
    const[error,seterror]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const authObject={'Project-ID':"fd095b90-b8fe-4401-a939-ee7c11351541",'User-Name':username,'User-Secret':password}
        try{
            await axios.get('https://api.chatengine.io/chats',{headers: authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
            seterror('');

        }catch(error){
            seterror('Oops, incorrect credentials!');

        }
    }
    return(
        <>
          <div className="wrapper">
            <div className="form">
              <h1 className="title">Chat Application</h1>
              <form onSubmit={handleSubmit}>
                  <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className="input" placeholder="Username" required />
                  <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input" placeholder="Password" required />
                  <div align="center">
                    <button type="submit" className="button">
                       <span>Start chatting</span>
                    </button>
                 </div>
              </form>
              <h1>{error}</h1>
            </div>
          </div>

        </>
    );
};
export default LoginForm;