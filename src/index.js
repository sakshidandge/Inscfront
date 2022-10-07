import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Layout from './Component/Layout';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Login1 from './Component/Login';
import Viewdetails from './Component/Viewdetails';
import Loginclaim from './Component/Loginclaim';
import Claimdash from './Component/Claimdash';
import Claiminsc from './Component/Claiminsc';
import Uploaddoc from './Component/Uploaddoc';


 function App1()
{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="dash/:id" element={<Dashboard/>}/>
        <Route path="login1" element={<Login1/>}/>
        <Route path ="viewdetails/:id" element={<Viewdetails/>}/>
        <Route path ="loginclaim" element={<Loginclaim/>}/>
        <Route path="claimdash/:id" element={<Claimdash/>}/>
        <Route path="claiminsc/:id" element={<Claiminsc/>}/>
        <Route path="uploaddoc" element={<Uploaddoc/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App1 />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
