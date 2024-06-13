import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { name:"Eat",id:"todo-0",completed:true},
  { name:"Sleep",id:"todo-1",completed:false},
  { name:"Repeat",id:"todo-2",completed:false}
]

const Buttons = [
  { name:"All",id:"button-0",pressed:true},
  { name:"Active",id:"button-1",pressed:false},
  { name:"Completed",id:"button-2",pressed:false}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} buttons={Buttons} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
