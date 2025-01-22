import React, { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
   let [login,setLogin]=useState({username:"",password:""})
   let {username,password}=login
   let navigate=useNavigate()

   let handleLogin=(e)=>{
      if (username=="" && password=="")
         {
            alert("Please enter username and password")
            navigate('/')
         }
         else{
       navigate('/home')
      console.log("hello")
         }
   }
   let handleChange=(e)=>{
      let {name,value}=e.target;
      setLogin({...login,[name]: value })
   }
   if (username=="" && password=="")
   {
      alert("Please enter username and password")
   }
   return (
      <div className={styles.head}>
         <div className={styles.container}>
            <div className={styles.greet}>
               <h1>Hey 👋 </h1>
               <h1>Login Now</h1>
            </div>
            <div className={styles.int}>
               <input type="text"  name="username" value={username} className={styles.inside} placeholder='Username' onChange={handleChange}/>
               <input type="password" className={styles.inside} placeholder='Password' />
            </div>
            <div >
               
               <button onClick={handleLogin}
               className={styles.but}>Log In</button>
            </div>
            {/* <div className={styles.or}> */}
               {/* <h1>OR</h1> */}
            {/* </div> */}
            {/* <div > */}
               {/* <button className={styles.google}>Sign In with Google</button> */}
            {/* </div> */}

         </div>
      </div>


   )
}

export default Login
