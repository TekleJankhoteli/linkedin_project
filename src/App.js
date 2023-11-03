// import logo from "./logo.svg";
import Info from "./profile.page/ProfilePage";
import React from 'react';
import { initializeApp } from "firebase/app";
import { Routes, Route, Form } from 'react-router-dom';
import './App.css';
import "./index.css"
// import "./style.css";
import Login from './Login';
import Registration from './Registration';

import MainPage from "./MainPage";
import ProfilePage from "./profile.page/ProfilePage";



function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      
      </Routes>
      
     
     
    
    </div>
  );
}

export default App;