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
      <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
              {/*{*/}
              {/*    !data ? "Loading..." : data*/}
              {/*}*/}
              <Routes>
                  <Route path="/profile"
                         element={<Profile
                             profilaPage = {props.state.profilePage}
                             addPost = {props.addPost}
                             updateNewPostText = {props.updateNewPostText}/>}/>
                  <Route  path="/dialogs/*"
                          element={<DialogItem state = {props.state.dialogsPage} messages = {props.state.dialogsPage}/>}/>
              </Routes>
          </div>

          {/*<Profile />*/}


      </div>
  );
}

export default App;