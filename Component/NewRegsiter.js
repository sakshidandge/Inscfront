import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Navigate, useNavigate,useParams} from 'react-router-dom';
import { useState,useEffect } from "react";

const Claiminsc = ()=>{

    const {id}= useParams();
    const cors = require('cors');
    const [submit, setSubmit]=useState(false);
    const [form ,setForm]=useState({});
    const [errors,setErrors]= useState({});
    const[emp,setEmp]=useState({});
    //const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({

        "insuranceid":0,
        "empid":0,
        "name":"",
        "age":0,
        "email":"",
        "gender":"",
        "insurancefor":"",
        "instatus":"pending",
        "history":""
    })

    
useEffect(() => {
    fetch(`http://localhost:60457/api/Insurances/details/${id}`)
        .then(res => res.json())
        .then(res => {
            setEmp(res);
        })
        .catch(err => console.log(err));})

        const handleChange = (n)=>(event) => {
            setInputs({...inputs,[n]:event.target.value});
            console.log({inputs});
        }
            
            const handleSubmit = (event) => {
               console.log('sucess')
                event.preventDefault();
                setInputs({...inputs,"empid":id,"name":emp.name,"gender":emp.gender,"email":emp.email,"instatus":emp.instatus});

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(inputs)
                };
            
                fetch('http://localhost:60457/api/Insurances/', requestOptions)
                    .then(response => response.json())
                    .then(response => {
                        alert("Submitted for approval.Please Upload the Documents!!")
                        console.log(response);
                    })
                    
                        .catch(err => console.log(err));
                    
                
            }

            const navigate = useNavigate();
            const dashboard = () =>{
                navigate(`/newdash/${id}`)
            }
        

    return(
        <div style={{
            display: 'block',
            width: 700,
            padding: 30, margin: 'auto'
        }} >
            <form  style={{border:"1px solid #9C9C9C",padding:"20px",borderRadius:"5px"}}>
                


                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Employee Id</Form.Label>
                    <Form.Control type="number"
                        id="empid" onChange={handleChange("empid")} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text"
                        id="name" onChange={handleChange("name")} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control type="text"
                        id="gender" onChange={handleChange("gender")} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Age:</Form.Label>
                    <Form.Control type="number"
                        id="age" onChange={handleChange("age")} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>History:</Form.Label>
                    <Form.Control type="text"
                         id="history" onChange={handleChange("history")} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Insurance For:</Form.Label>
                    <select id="insurancefor" onChange={handleChange("insurancefor")}>
                    <option value=""></option>
                        <option value="Medicine">Medicine</option>
                        <option value="Car Insurance">Car Insurance</option>
                        <option value="Bike Insurance">Bike Insurance</option>
                        <option value="Son/Daughter">Three-wheeler</option>
                        <option value="Parents/In-Laws">Transport Vehicles</option>
                    </select>
                </Form.Group>


                <Button  onClick={handleSubmit} variant="dark">Submit your Form</Button>
                <Button variant="dark"  style={{marginLeft:"4%"}} onclick={dashboard}>Back</Button>
                {submit &&
                    <label>Response Submitted</label>
                }
            </form>
        </div>
    );
            
            }       
        
                
        
export default Claiminsc;
