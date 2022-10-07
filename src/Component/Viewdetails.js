import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


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

     return(

        <div className="card" style={{
            //marginTop: "100px",
            marginLeft: 450,
            marginRight: 450,
            backgroundColor:"darkgrey",
            height: "400px"
    
            }}   >
            <div className="card-header" style={{backgroundColor:"darkgrey"}}><h3>Employee Details</h3></div>
            <div className="card-body" style={{backgroundColor:"#eeeeee"}}>
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
                    </tr>
                </table>
                </div>
                <div style={{paddingTop:"10px"}}>
                
                               
                </div>
            </div>
            
           
            </div>
            
                
    
    

        
               
    
 

    );

}

export default Viewdetails;