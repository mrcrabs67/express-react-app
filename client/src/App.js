import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

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
          <div className="app-wrapper-content">
              <Dialogs />
          </div>

          {/*<Profile />*/}


      </div>
  );
}

export default App;