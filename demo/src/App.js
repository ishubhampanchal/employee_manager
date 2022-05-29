import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row} from 'reactstrap';

import { ToastContainer, toast } from 'react-toastify';
import Header from "./components/Header";
import Home from './components/Home';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployees from './components/ViewEmployees';
import Menus from './components/Menus';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import ViewEmployeesById from './components/ViewEmployeesById';
function App() {

  
  return (
    <div>
      <Router>
        <ToastContainer/>
      <Header/>
        <Container>
          <Row>
            <Col md="2">
              <Menus/>
            </Col>

            <Col md="10">

              <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/ViewEmployees" element={<ViewEmployees/>}/>
              <Route path="/ViewEmployees/:id" element={<ViewEmployeesById/>}/>
              <Route path="/AddEmployee" element={<AddEmployee/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/UpdateEmployee/:id" element={<UpdateEmployee/>} exact/>
              <Route path="/" element={<Home/>} exact/>
              </Routes>
              
            </Col>
          </Row>
        </Container>
      
      </Router>
      

    </div>
  );
}

export default App;
