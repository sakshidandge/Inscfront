import React from "react";
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import  Button from "react-bootstrap/button";


const Loginclaim = () =>{
    const [id, setId]=useState(1);
  const [password, setPassword]=useState("aditya1");

  const [emp, setemp]=useState({

    "empid":0,
    "username":"",
    "password":"",

});

useEffect(() => {

    
  fetch(`http://localhost:60457/api/logins/${id}`)
  .then(res => res.json())
  .then(res => {
      setemp(res);
  });
})

  /*const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");*/
 
  const navigate=useNavigate();
  
  const Claimdash=()=>
  {
      if(emp.empid==id && emp.password==password)
    {
        navigate(`/claimdash/${id}`);
    }

    else{
      alert('You are not authorized');
    }

    
}
 

  const handleChange=(event )=>{
    setId(event.target.value);

       
  }

  const handleChangee=(event )=>{
    setPassword(event.target.value);

       
  }

  const Home = () =>{
    navigate('/');
}

  return (

    <div align="center">
      <img src = {require('../Image/4.jpg')}/>
  
      <div >
        <div className="input-number">
                <label>UserId</label>
                    <input type="number" onChange={handleChange}  name="Id"  />
                    </div>
                    <div className="input-text">
                <label>Password</label>
                    <input type="password" onChange={handleChangee} name="password"  /><br></br><br></br>

                    
                   
                    
                </div>
                    <div className="button">
                    
                    <Button type="submit" onClick={Claimdash} variant="dark">Login</Button>
                    <Button type="submit" onClick={Home} variant="dark" style={{marginLeft:"0.5cm"}}>Back</Button>
                    
                </div>    
                  </div>
                  </div>
  );
  
}


export default Loginclaim;
