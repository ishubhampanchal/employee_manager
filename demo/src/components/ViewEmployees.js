import React, { useEffect, useState } from "react";
import base_url from "../Springbootapi/api";
import axios from "axios";
import { toast } from "react-toastify";
import Employee from "./Employee";
import { Button, Input,InputGroup } from "reactstrap";



const ViewEmployees=()=>{


    const UpdateEmployee=(id)=>{
        setEmployee(employee.filter(c=>c.id!=id));
    }
const getViewEmployeesFromServer=()=>{
    axios.get(`${base_url}/Employee`).then(
        (response)=>{
            console.log(response.data);            
            setEmployee(response.data);
            toast.success("Employees Loaded");
        },

        (error)=>{
            console.log(error);
            //toast.error("Something went wrong");
        }
    );
};


useEffect(()=>{
     getViewEmployeesFromServer();
},[]);


const [employee,setEmployee]=useState([])


    return(

        <div>

            

<h4 className="text-center my-3">All Employees Details</h4>
         {/* <InputGroup>  <Input type="text" placeholder="Enter Employee ID"  id="id"/>
    <Button onClick={searchEmp}>
      Search
    </Button></InputGroup>   
   */}
   
        

 

 
            

            {employee.length>0
            ? employee.map((item)=><Employee key={item.id} employee={item} update={UpdateEmployee}/>)
            :"No Employees"}


        </div>
    );

}

export default ViewEmployees;