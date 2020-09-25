import React from 'react';

import {Navbar,Nav,Button,Form,Link,FormControl,Carousel} from 'react-bootstrap';
import './Home.css';
import logo from '../../Logo.png';
import image1 from '../../Image/sundorbon.png';
import image2 from '../../Image/Sajek.png';
import image3 from '../../Image/Sreemongol.png';
import { NavLink } from 'react-router-dom';




const Home = () => {
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
           
           
           </div>
           
           </div>

           <br/>
                <Carousel className="Carousel">
                <Carousel.Item interval={1000}>
                    <img src={image1} alt=""/>
                    <Carousel.Caption>
                    <h3>Sundorban</h3>
                   
                       
                     
                     <NavLink to="/sundorban" activeClassName="selected">
                     <Button variant="primary" size="sm">
                       Book Now
                     </Button>
                    </NavLink>
                    
                 </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={image2} alt=""/>
                    
                    <Carousel.Caption>
                    <h3>Sajek</h3>
                    <NavLink to="/sajek" activeClassName="selected">
                     <Button variant="primary" size="sm">
                       Book Now
                     </Button>
                    </NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                      <img src={image3} alt=""/>
                    <Carousel.Caption>
                    <h3>Sreemongol</h3>
                    <NavLink to="/sreemongol" activeClassName="selected">
                     <Button variant="primary" size="sm">
                       Book Now
                     </Button>
                    </NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
           
          </div>
      
    );
};

export default Home;