import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {

const [data, setData] = useState(null);


  useEffect(() => {
    fetch('/api')
        .then(response => response.json())
        .then(response => setData(response.msg))
  }, [])


  return (
      <div className="app-wrapper">
          {
              !data ? "Loading..." : data
          }
          <Header />
          <Navbar />
          <Profile />

      </div>
  );
}

export default App;