import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, messege: "Hello", like: 10},
    {id: 2, messege: "Hi you hi", like: 12},
    {id: 3, messege: "Hi you hi", like: 20},
    {id: 4, messege: "Hi you hi", like: 80},
    {id: 5, messege: "Hi you hi", like: 1000}
]

let messegeData = [
    {id: 1, messege: "Hi"},
    {id: 2, messege: "My name"},
    {id: 3, messege: "Good"},
    {id: 4, messege: "Good"},
    {id: 5, messege: "Good"}
]

let dialogData = [
    {id: 1, name: "Sasha"},
    {id: 2, name: "Artem"},
    {id: 3, name: "Lena"},
    {id: 4, name: "Vika"},
    {id: 5, name: "Gordey"},
    {id: 6, name: "Ivan"}
]

ReactDOM.render(
  <React.StrictMode>

    <App postData={postData} messegeData={messegeData} dialogData={dialogData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
