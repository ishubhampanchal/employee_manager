import React, { Fragment,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../Springbootapi/api";
import { toast } from "react-toastify";

const UpdateEmployee=()=>{

    const navigate=useNavigate();
    const {id}  = useParams();
    const [employee,setEmployee]=useState({id:id});

    const navigateForm=()=>{
        navigate(`/ViewEmployees`);
    }

    const handleformupdate=(e)=>{
        console.log("EmpID"+id);
        console.log(employee);
        updateDataToServer(employee);
        
        e.preventDefault();
    }


    const updateDataToServer=(data)=>{
        axios.put(`${base_url}/Employee/${id}`,data).then(
            (response)=>{
                console.log(response);
                toast.success('Employee Updated')
                navigate(`/ViewEmployees`)
            },
            (error)=>{
                console.log("EmpID"+id);
                console.log(error);
            }
        )

    }
    
    return(

        <Fragment>
            <h4 className="text-center my-3">Update Employee Details</h4>
            <Form onSubmit={handleformupdate}>
                {/* <FormGroup>
                    <label for="id">Employee Id</label>
                 <Input type="text" placeholder="Enter here" name="userId" id="id" onChange={(e)=>{setEmployee({...employee,id: e.value})}}></Input>
                </FormGroup> */}

                <FormGroup>
                    <label for="name">Employee Title</label>
                    <Input type="text" placeholder="Enter title here" id="name" onChange={(e)=>{setEmployee({...employee,name: e.target.value})}}></Input>
                </FormGroup>

                <FormGroup>
                    <label for="">Employee Department</label>
                 <Input type="text" placeholder="Enter Department here" id="dept" onChange={(e)=>{setEmployee({...employee,dept: e.target.value})}}></Input>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit"color="primary">Update</Button> <Button color="primary" onClick={navigateForm}>Cancel</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default UpdateEmployee;