import React from "react";
import { Link } from "react-router-dom";
import { ListGroup,List } from "reactstrap";

const Menus=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item" tag="a" to="/">Home</Link>
            <Link className="list-group-item list-group-item" tag="a" to="/ViewEmployees"> View Employees</Link>
         
            <Link className="list-group-item list-group-item" tag="a" to="/AddEmployee"> Add Employee</Link>          
            {/* <Link className="list-group-item list-group-item" tag="a" to="/UpdateEmployee/:id">Update Employee</Link> */}
            <Link className="list-group-item list-group-item" tag="a" to="/"> About</Link>
            <Link className="list-group-item list-group-item" tag="a" to="/Contact"> Contact</Link>
           
        </ListGroup>
        

    );
}

export default Menus;