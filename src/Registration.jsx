import React, { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import {createUserWithEmailAndPassword}from "firebase/auth";
import { auth, db } from "./firebaseconfiguration.js";


import { Link, useNavigate } from 'react-router-dom';
import registrationPageLogo from './assets/Logo.png';
import LittleFooter from "./components/LittleFooter.jsx";


const Registration=()=>{


  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [name, setName] = useState('');
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

//   const [birthday, setBirthday] = useState('');



  
    const navigate = useNavigate();
    const redirectToRegistration = () => {
        navigate('/'); 
      };



    const handleDayChange = (e) => {
        setDay(e.target.value);
    };

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const userRegistration=async(e)=>{
      e.preventDefault();
      try{
        const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        const user=userCredential.user;
     console.log(user);

     const userFirestoreData = {
      name:name,
      email: registerEmail,
      password: registerPassword,
    };

    await addDoc(collection(db, "users"), userFirestoreData);

 
      }catch(error){
        console.log("error.message")
      }
    }

   

    return(
       <div className="registrationContainer">
        <header>
        <img src={registrationPageLogo} alt="/" />
        </header>

        <div className="registrationPageForFlex">
        <main>
            <div className="ContainerForRegistrationForm">
                <h1 className="registrationH1">Tell us about you</h1>

                <form className="registrationForm" action="">
                        <input type="text"
                         className="registrationName"
                          id="registrationName" 
                          placeholder="Name" 
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                          required />

                        <input type="email" 
                        className="registrationEmail" 
                        id="registrationEmail" 
                        placeholder="Email"
                        value={registerEmail}
                        onChange={(e)=>setRegisterEmail(e.target.value)}
                        required />
                        


                        <div className="birthdateFields">
                            <input type="number" className="registrationBirthdate" id="registrationBirthdateDay" placeholder="Day" value={day} onChange={handleDayChange} required />
                            <input type="number" className="registrationBirthdate" id="registrationBirthdateMonth" placeholder="Month" value={month} onChange={handleMonthChange} required />
                            <input type="number" className="registrationBirthdate" id="registrationBirthdateYear" placeholder="Year" value={year} onChange={handleYearChange} required />
                        </div>
                        <input type="password"
                         className="registrationPassword"
                          id="registrationPassword"
                           placeholder="Password"
                           value={registerPassword}
                           onChange={(e)=>setRegisterPassword(e.target.value)}
                            required />

                        <p className="registrationTerms">By clicking Join Now, you agree to the LinkedIn <span className="registrationTermsSpan">User Agreement, Privacy Policy,</span> and Cookie Policy.</p>

                        <input onClick={(e)=>userRegistration(e)} className="registrationSubmitButton" type="submit" id="registrationSubmitButton" value="Agree & Join" />
                    </form>

                    <input onClick={redirectToRegistration} className="redirectToLogin" type="submit" id="redirectToLogin" value="Back to Login" />
            </div>

           


        </main>
       
        <div className="registrationContainerForBG">
                <div className="radial1"></div>
                <div className="radial2"></div>
                <div className="radial3"></div>
            </div>

            </div>
            <LittleFooter/>
       </div>
    
    )
}
export default Registration;