import React, {Component} from 'react';
import {  Navbar, Nav, Container, Button} from 'react-bootstrap';
import logo from './images/logo.jpg'
class Header extends Component {
    render() {
        return (
            <div>
                
  <Navbar style={{backgroundColor: "grey"}}>
    <Container >
      <Navbar.Brand href="/" style={{color:"white"}}>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          
          className="d-inline-block align-top"
        />{' '}
      Spark Bank
      <small style={{padding: "10px", color: "orange"}}>Online Banking system</small>
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
        )}
    }

  export default Header