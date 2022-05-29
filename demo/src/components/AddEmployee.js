import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../Springbootapi/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEmployee=()=>{

    const [employee,setEmployee]=useState({});

    const navigate= useNavigate();

    const handleForm=(e)=>{
        console.log(employee);
        postDataToServer(employee);
        toast.success("Employee Added");
        e.preventDefault();
    }

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/Employee`,data).then(
            (response)=>{
                console.log(response);
                navigate(`/ViewEmployees`)
            },
            (error)=>{
                console.log(error);
            }
        )

    }

    
    return(

        <Fragment>
            <h4 className="text-center my-3">Fill Employee Details</h4>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="id">Employee Id</label>
                 <Input type="text" placeholder="Enter here" name="userId" id="id" onChange={(e)=>{setEmployee({...employee,id: e.target.value})}}></Input>
                </FormGroup>

                <FormGroup>
                    <label for="name">Employee Name</label>
                    <Input type="text" placeholder="Enter name here" id="name" onChange={(e)=>{setEmployee({...employee,name: e.target.value})}}></Input>
                </FormGroup>

                <FormGroup>
                    <label for="">Employee Department</label>
                 <Input type="text" placeholder="Enter Department here" id="dept" onChange={(e)=>{setEmployee({...employee,dept: e.target.value})}}></Input>
                </FormGroup>

                <Container className="text-center">
                    <Button color="primary" type="submit">Add</Button> <Button type="reset" color="primary">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddEmployee;