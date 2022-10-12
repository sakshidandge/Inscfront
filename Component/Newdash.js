import  Button  from "react-bootstrap/Button";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Dashboard = ()=>{
     
    const [emp, setemp]=useState({

        "empid":0,
        "username":"",
        "password":"",

    });

    const{username}=useParams();
    const{id}=useParams();

    useEffect(() => {

    
            fetch(`http://localhost:60457/api/logins/${id}`)
            .then(res => res.json())
            .then(res => {
                setemp(res);
            });
        })

        
    const navigate=useNavigate();
   

    const Claimins=()=>{
        navigate(`/newregister/${id}`);
    }

    return(
        <div align="center">
        <h3 style={{marginTop:"1cm"}}><b>Hello,{emp.username}</b></h3>
       
        <img src={require('../Image/3.jpg')} style={{width:"30%"}}/>
        <div style={{marginTop:"1%"}}>
        
        <Button onClick={Claimins} variant="dark" style={{marginLeft:"1cm"}}>Claim Insurance</Button></div>
        <a href="/login">Logout</a>
        </div>

    );

}

   


export default Dashboard;