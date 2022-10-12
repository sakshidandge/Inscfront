import React from "react";
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import  Button  from "react-bootstrap/button";

const Register = () =>{

    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});
    
    
    const navigate= useNavigate();
    



    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Username: inputs.username,
                Password : inputs.password,
               
            })

        };
        console.log(inputs.username);
         const name  = inputs.username;

        fetch('http://localhost:60457/api/logins/', requestOptions)
            .then(response => response.json())
            .then(response => {navigate(`/details/${name}`)})
            .then(data => setSubmit(data.id))
            .catch(error => alert ("You have register succesfully"));
      

    }

    const Home = () =>{
        navigate('/');
    }



    return(

        <div align="center">
      <img src = {require('../Image/4.jpg')}/>
  
      <div  >

       
        <div className="input-text" >
                <label>Username</label>
                    <input id="username" type="text" name="username" onChange={handleChange} />
                    </div>
                    <div className="input-text" >
                <label>Password</label>
                    <input id="password" type="password" name="password" onChange={handleChange} /><br></br><br></br>
                </div>
                    <div className="button">
                    
                    <Button type="submit" variant="dark" onClick={handleSubmit} >Register</Button>
                    <Button type="submit" onClick={Home} variant="dark" style={{marginLeft:"0.5cm"}}>Back</Button>
                    
                    </div>
                    </div>
                    </div>
                
    );
}

export default Register;