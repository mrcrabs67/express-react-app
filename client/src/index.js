import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 12},
    {id: 2, message: "It's my second post", likesCount: 11},
    {id: 2, message: "Blabla", likesCount: 5},
    {id: 2, message: "gagaga", likesCount: 4},
];

let dialogs = [
    {id: 1, name: 'Viktor'},
    {id: 2, name: 'Yana'},
    {id: 3, name: 'Vova'},
    {id: 4, name: 'Roma'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Привет'},
    {id: 4, message: 'guten tag'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
