import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Viewdetails = () =>{

    const[emp,setEmp]= useState({

        "insuranceid":0,
        "empid":0,
        "name":"",
        "age":0,
        "email":"",
        "gender":"",
        "insurancefor":"",
        "instatus":"",
        "history":""
    })

    const{username}=useParams();
    const{id}=useParams();

    useEffect(() => {
        fetch(`http://localhost:60457/api/insurances/details/${id}`)
            .then(res => res.json())
            .then(res => {
                setEmp(res);
            })
            .catch(err => console.log(err));

        
     }, [])

     const navigate=useNavigate();
     const Dash = () =>{
         navigate(`/dash/${id}`)
     }

     return(

        <div className="card" style={{
            marginTop: "75px",
            marginLeft: 450,
            marginRight: 450,
            backgroundColor:"#5373b5",
            height: "300px"
    
            }}   >
            <div className="card-header" style={{backgroundColor:"#5373b5"}}><h3>Your Details</h3></div>
            <div className="card-body" style={{backgroundColor:"rgb(179 201 221)"}}>
                <div >
                <table style={{marginTop:"3px"}}>
                 
                 <tbody></tbody>

                   
    
                    <tr>
                    <td style={{paddingLeft:"50px"}}>Name: </td>
                    <td style={{ textAlign:"center" , paddingLeft:"120px"}}>{emp.name}</td>
                    </tr>
                    
                    <tr>
                    <td style={{paddingLeft:"50px"}} >Email:</td>
                    <td style={{ textAlign:"center", paddingLeft:"120px"}}>{emp.email}</td>
                    </tr>

                    <tr>
                    <td style={{paddingLeft:"50px"}}>Age:</td>
                    <td style={{ textAlign:"center" , paddingLeft:"120px"}}>{emp.age}</td>
                    </tr>

                    <tr>
                    <td style={{paddingLeft:"50px"}}>Gender: </td>
                    <td style={{ textAlign:"center" , paddingLeft:"120px"}}>{emp.gender}</td>
                    </tr><br></br>
                    <tr><Button variant="dark" onClick={Dash}>Back</Button></tr>
                </table>
                </div>
                <div style={{paddingTop:"10px"}}>
                
                               
                </div>
            </div>
            
           
            </div>
            
                
    
    

        
               
    
 

    );

}

export default Viewdetails;