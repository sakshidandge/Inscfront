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
    const Viewdetails=()=>{
        navigate(`/viewdetails/${id}`);
    }

    const Claimins=()=>{
        navigate(`/claiminsc/${id}`);
    }

    return(
        <>
        <h3>Hello,{emp.username}</h3>
        <Button onClick={Viewdetails}> View your Details</Button><br></br>
        <Button onClick={Claimins}>Claim Insurance</Button>
        </>

    );

}

   


export default Dashboard;