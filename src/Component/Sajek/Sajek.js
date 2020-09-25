import React from 'react';
import {Navbar,Nav,Button,Form,Link,FormControl,Carousel} from 'react-bootstrap';
import './Sajek.css';
import logo from '../../Logo.png';
import { NavLink } from 'react-router-dom';

const Sajek = () => {
    return (
        <div className="container"> 
        
        <div className="row"> 
        <div className="colum"> 
        <Navbar bg="light" variant="light" className="navbar">
              <Navbar.Brand href="#home">
              <img src={logo} alt=""/>
                </Navbar.Brand>
              <Form inline className="mr-auto">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              
              </Form>
             
              <Nav >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#features">Destination</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
              </Nav>
              
          </Navbar>
           
            <br/>
           <div className="sajekClass"> 
           <h1> Sajek</h1>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>

            <br/>
            <form >
                    <h4>Login</h4>
                <input name = "name" type="text" placeholder="your name"  />
                <br/>
                 <input placeholder="Enter Your Email" name="Email" type="text"  required/>
                 <br/>
                 <input placeholder="Enter Your Password" name = "Password" type="text" required/>
                 <br/>
                 <NavLink to="/logedIn" activeClassName="selected">
                     <Button variant="primary" size="sm">
                       Submit
                     </Button>
                    </NavLink>
                 </form>
           </div>

        </div>
        </div>
        </div>
    );
};

export default Sajek;