import  Button from 'react-bootstrap/Button';
import React from "react";
import { useNavigate } from 'react-router-dom';
import Login from './Login';


function Home()
{
    const navigate=useNavigate();
    const Logintoclaim=()=>{
        navigate('/login1');
    }

    const Loginclaim=()=>{
        navigate('/loginclaim');
    }
 return(
     <div align="center">
         <h1 className="fs-4" marginTop="1cm">Welcome</h1>
    <Button variant='dark'>View Details</Button><br></br><br></br>
    <Button variant='dark' onClick={Logintoclaim}>Login to claim</Button><br></br><br></br>
    <Button variant='dark'onClick={Loginclaim}>Login to Approve/Reject </Button><br></br><br></br>
        
     </div>
     
     
 );   
}

export default Home;