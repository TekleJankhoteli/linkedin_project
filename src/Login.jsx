import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseconfiguration.js";

import loginPageLogo from './assets/Logo.png';
import loginPhotoOne from './assets/loginPhotoOne.png';
import loginPhotoTwo from './assets/loginPhotoTwo.png';
import { Link, useNavigate } from 'react-router-dom';
import LittleFooter from "./components/LittleFooter.jsx";

const Login=()=>{
    const navigate = useNavigate();
    const redirectToRegistration = () => {
        navigate('/registration'); // This will navigate to the Registration component
      };

      const [loginEmail,setLoginEmail]=useState('');
      const [loginPassword,setLoginPassword]=useState('');
      const [loginError, setLoginError] = useState('');
      


      const userLogin=async(e)=>{
        e.preventDefault();
        try{
          const userCredential=await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
          const user=userCredential.user;
          console.log(user)
          navigate("/MainPage")
        }catch(error){
          setLoginError("Invalid email or password. Please try again."); // Display an error message
          console.error("Error signing in: ", error);
        }

      }


      
    return(
      <>
        <div className="containerForLogin">
       <header>
        <img src={loginPageLogo} alt="/"/>
       </header>

       <main>

        <div className="loginPhotoOne">
        <img className="loginPhotoOneImg" src={loginPhotoOne} alt="/"/>
        </div>

        <div className="ContainerForLoginForm">
        <h1 className="loginH1">Make the most of your professional life</h1>

        <form className="loginForm" action="">

        <input type="email" className="loginEmail" id="loginEmail" placeholder="Email or telephone number"
        onChange={(e)=>{setLoginEmail(e.target.value)}}
        required/>
         <p className="loginEmailError">{loginError}</p>

        <input className="loginPassword" type="Password" id="loginPassword" 
        onChange={(e)=>{setLoginPassword(e.target.value)}}
        placeholder="Password (6 or more characters)" required/>
         <p className="PasswordError"></p>

        <p className="loginTerms">By clicking Agree & Join, you agree to the LinkedIn <span className="loginTermsSpan"> User Agreement, Privacy Policy,</span> and Cookie Policy.</p>

        <input onClick={userLogin} className="loginSubmitButton" type="submit" id="loginSubmitButton" value="Login"/>
        <p className="PasswordError"></p>
      
      
       
        </form>

        <input onClick={redirectToRegistration}  className="redirectToRegistration" type="submit" id="redirectToRegistration" value="Registration" />
       
        </div>


        <div className="loginPhotoTwo">
        <img className="loginPhotoOneTwoImg" src={loginPhotoTwo} alt="/"/>
        </div>

        
       </main>
       </div>
              <LittleFooter/>
</>
    )
}
export default Login;