import React ,{ useEffect,useParams,useState} from "react";
import Employee from "./Employee";
import axios from "axios";
import base_url from "../Springbootapi/api";
import { toast } from "react-toastify";
const ViewEmployeesById=()=>{

    
    // const {id}  = useParams();
     var id=2;
    const [employee,setEmployee]=useState([]);

    useEffect(()=>{
        ViewDataById();
    },[]);

   const ViewDataById=()=>{

    console.log(id);
    axios.get(`${base_url}/Employee/${id}`).then(
        (response)=>{
            console.log(id);
            console.log(response.data);            
            setEmployee(response.data);
            toast.success("Employees Loaded");
        },

        (error)=>{
            console.log("-----------------id-------------"+id);
            console.log(error);
            //toast.error("Something went wrong");
        }
    );
}

 return(


     <div>
         <h4 className="text-center my-3">All Employees Details</h4>  

         

        {employee.length>0
        ? employee.map((item)=><Employee key={item.id} employee={item} />)
        :"No Employees"}
        
        </div>
 );
}

export default ViewEmployeesById;
