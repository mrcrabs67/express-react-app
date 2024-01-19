import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const [data, setData] = useState(null);


  useEffect(() => {
    fetch('/api')
        .then(response => response.json())
        .then(response => setData(response.msg))
  }, [])


  return (
      <div className="app-wrapper">
        <header className="header">
          <p>
            {
                !data ? "Loading..." : data
            }
          </p>
            <img src="https://styleall.ru/wp-content/uploads/2023/02/4eebee67599783.y3jvccwymzyxlde4ndcsntcyldmxnq.jpg" title="logo"></img>
        </header>
          <nav className="nav">
              <div>Profile</div>
              <div>Message</div>
              <div>News</div>
              <div>Music</div>
              <div>Settings</div>
          </nav>
          <div className="content">
              <div>
                <img src= 'https://greednews.su/wp-content/uploads/2023/09/content-marketing-tools.jpg' title='content'></img>
              </div>
              <div>ava + description</div>
              <div>
                  My posts
                  <div>New post</div>
                  <div>
                      <div>post1</div>
                      <div>post2</div>
                      <div>post3</div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;