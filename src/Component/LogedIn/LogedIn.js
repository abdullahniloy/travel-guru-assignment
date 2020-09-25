import React from 'react';
import {Navbar,Nav,Button,Form,Link,FormControl,Carousel} from 'react-bootstrap';
import logo from '../../Logo.png';
import image1 from '../../Image/Rectangle 26.png';
import image2 from '../../Image/Rectangle 27.png';
import image3 from '../../Image/Rectangle 28.png';
import './LogedIn.css';


const LogedIn = () => {
    return (
        <div className = "logIn"> 

            <Navbar bg="light" variant="light" className="navbar">
              <Navbar.Brand href="#home">
              <img src={logo} alt=""/>
                </Navbar.Brand>
              <Form inline className="mr-auto">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              
              </Form>
             
              <Nav className="nav" >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#features">Destination</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
              </Nav>
              
          </Navbar>

          <br/>

          <div className ="image">
                <img src={image1} alt=""/>
          </div>

          <div className ="image"> 
          <img src={image2} alt=""/>
                    
          </div>

          <div className ="image"> 
        <img src={image3} alt=""/>
          </div>
        </div>
        

       
        

    );
};

export default LogedIn;
