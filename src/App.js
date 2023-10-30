import logo from "./logo.svg";
import Info from "../src/profile.page/Profile-page";
import React from 'react';
import { initializeApp } from "firebase/app";
import { Routes, Route, Form } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Registration from './Registration';

function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App; 