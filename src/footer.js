import React, {Component} from 'react';

import {  Navbar, Nav, Container, Button,Row,Col} from 'react-bootstrap';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import mailIcon from '@iconify-icons/ci/mail';
// import phoneIcon from '@iconify-icons/ci/phone';





class Footer extends Component {
    render() {
    return(
        <footer>
            <div className="footer">
            <Container >
            <Row>
                <Col>
                <h4 style={{color: 'white'}}>Spark Bank<small style={{fontSize: "15px",color:"orange"}}>    Online Banking System</small></h4>
                <ul className="list-unstyled" style={{color: "white"}}>
                    <li>123 road,</li>
                    <li>xyz street,</li>
                    <li>243-432-33 Mumbai</li>
                </ul>
                
                </Col>
                <Col>
                <h4 style={{color: "white"}}>Follow us on</h4>
                <ul className="list-unstyled" >
                    <li>
                <a href="https://github.com/pranavpatil745" target="_blank"><FontAwesomeIcon style={{paddingRight: "10px", color: "orange"}} icon={faFacebook} size="3x"  /></a>
                <a href="https://github.com/pranavpatil745" target="_blank"><FontAwesomeIcon style={{paddingRight: "10px",color: "orange"}} icon={faTwitter} size="3x"  /></a>
                <a href="https://github.com/pranavpatil745" target="_blank"><FontAwesomeIcon style={{paddingRight: "10px",color: "orange"}} icon={faInstagram} size="3x"  /></a>
                </li>
                </ul>
                </Col>

                <Col>
                <h4 style={{color: "white"}} >Have Any Questions?</h4>
               <ul className="list-unstyled" style={{color: "white"}}>
                   <li>
                       support.spark.Bank@gmail.com
                   </li>
                   <li>
                    8888888888
                   </li>
               </ul>
               

                </Col>
            </Row>
            <div className="footer-copyright text-center py-3" style={{color: "orange"}}>
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> pranavpatil745@gmail.com | https://github.com/pranavpatil745</a>
        </Container>
      </div>

            </Container>  
            </div>  
        </footer>
    )
};
    }

  export default Footer