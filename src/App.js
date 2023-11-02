// import logo from "./logo.svg";
import Info from "../src/profile.page/Profile-page";
import React from 'react';
import { initializeApp } from "firebase/app";
import { Routes, Route, Form } from 'react-router-dom';
import './App.css';
import "./index.css"
import "./style.css";
import Login from './Login';
import Registration from './Registration';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LittleFooter from "./components/LittleFooter";
import MainPage from "./MainPage";



function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/MainPage" element={<MainPage />} />
      
      </Routes>
      
     
     
    
    </div>
  );
}

export default App;