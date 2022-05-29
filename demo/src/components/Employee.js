import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Card,
    CardBody,
    CardTitle,CardSubtitle
    ,CardText,
    CardFooter,Button,Container 
 } from "reactstrap";
import base_url from "../Springbootapi/api";


 const Employee=({employee,update})=>{


    const navigate=useNavigate();

const editEmployee=(id)=>{
       console.log(id);
    navigate(`/UpdateEmployee/${id}`);
};

    const deleteEmployee=(id)=>{
        axios.delete(`${base_url}/Employee/${id}`).then(
            (response)=>{
                console.log("success");
                toast.success("Employee Deleted");
                update(id);
            },
            (error)=>{
                console.log("error");
            }
        )
    }

     return(
         <div>
             <Card className="text-center">
                 <CardBody>
                 <CardText>{employee.id}</CardText>
                     <CardSubtitle><b>{employee.name}</b></CardSubtitle>
                     <CardText>{employee.dept}</CardText>
                     <Container>
                         <Button color="danger" onClick={()=>{deleteEmployee(employee.id);}}>Delete</Button> <Button onClick={(e)=>{editEmployee(employee.id)}} color="success">Update</Button>
                     </Container>
                 </CardBody>
             </Card>

         </div>
     );
 }

 export default Employee;