import React, {Component} from 'react';
import {  Navbar, Nav, Container, Button,Row , Col} from 'react-bootstrap';
import logo from './images/logo.jpg'
import bg from './images/bg.jpg'
import bg1 from './images/bg1.jpg'

class Home extends Component {
    render() {
        return (
            <div >
                <>
                

  
  <div  className = "content" style={{ 
    backgroundColor: "#d6f2ff",
      paddingBottom: "4rem",
       backgroundImage: 'url('+bg1+')'

    }}>
       <Container>
           <Row style={{padding: "200px"}}>
               <Col>
               <Button  style={{width: "180px",backgroundColor:"purple"}} href="/users">Users List</Button>{' '}
               </Col>
               <Col>
               <Button style={{width: "180px",backgroundColor:"green"}}  href="/transfer">Transfer</Button>{' '}
               </Col>
               <Col>
               <Button style={{width: "180px",backgroundColor:"red"}}  href="/transactions">Transaction History</Button>{' '}
               </Col>
           </Row>
           </Container> 
        
        
        
        
    </div>
</>
            </div>
        )
    }
}
export default Home

