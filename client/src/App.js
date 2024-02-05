import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogItem from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {


    const [data, setData] = useState(null);


  useEffect(() => {
    fetch('/api')
        .then(response => response.json())
        .then(response => setData(response.msg))
  }, [])


  return (
      <BrowserRouter>
      <div className="app-wrapper">
          {
              !data ? "Loading..." : data
          }
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
              <Routes>
                  <Route path="/profile" element={<Profile posts = {props.posts}/>}/>
                  <Route  path="/dialogs/*" element={<DialogItem dialogs = {props.dialogs} messages = {props.messages}/>}/>
              </Routes>
          </div>

          {/*<Profile />*/}


      </div>
      </BrowserRouter>
  );
}

export default App;