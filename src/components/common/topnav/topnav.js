
import Container from 'react-bootstrap/Container';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { delay, motion, scale } from "framer-motion";



const TopNav = () => {
    return (
        <>



<Navbar expand="lg" variant="light" sticky="top" className="blacknav cSmallNav">
      <Container fluid className="container-transition navpadd" id="myContainer">
        <Navbar.Brand href="/" aria-label="">
          <img
            src="https://wso2.cachefly.net/wso2/sites/all/image_resources/asgardeo-by-wso2-white.webp"
            alt="Asgardeo Logo"
            className="ls-is-cached lazyloaded"
            loading="lazy"
            style={{ height: '38px', width: '140px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" className="cnavbutton">
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="https://wso2.com/choreo/docs/" className='navpad' id="ChoreoDocs" target="_blank" aria-label="Home">
            Home 
            </Nav.Link>
            <NavDropdown title="Resources" className='navpad' id="navbarDropdownSolutions" >
            <div className="cSelectedChoreo"></div>
              <Row>
    <div className='cDropUse'>
    <Row>
   
   
                <Col sm={12} md={6} lg={6}>
                  <h5>Solutions</h5>
                 <ul>
                            <li><a class="dropdown-item" href="" aria-label="API Management">API Management</a></li>
                            <li><a class="dropdown-item" href="" aria-label="Automating ETL Tasks">Automating ETL Tasks</a></li>
                            <li><a class="dropdown-item" href="" aria-label="B2B EDI Integration">B2B EDI Integration</a></li>
                            <li><a class="dropdown-item" href="" aria-label="Deploy a Flask App">Deploy a Flask App</a></li>
                            <li><a class="dropdown-item" href="" aria-label="Deploy a Web App">Deploy a Web App</a></li>
                            <li><a class="dropdown-item" href="" aria-label="Event-driven GraphQL BFF">Event-driven GraphQL BFF</a></li>
                            <li><a class="dropdown-item" href="" aria-label="Generative AI">Generative AI</a></li>
                            <li><a class="dropdown-item" href="" aria-label="Integration">Integration</a></li>
                            <li><a class="dropdown-item" href="" aria-label="Microservices">Microservices</a></li>
                            <li><a class="dropdown-item" href="" aria-label="Observability and Monitoring">Observability and Monitoring</a></li>
                       
                    </ul>
 
                </Col>
                {/* <Col sm={12} md={6} lg={6}>
                <h5>Languages</h5>
                 <ul>
                   <li><a className="dropdown-item" href="/react" aria-label="React">React</a></li>
                   <li><a className="dropdown-item" href="/python" aria-label="React">Python</a></li>
                       
                    </ul>
                </Col> */}
                
                
                </Row>
    </div>
                
              </Row>
            </NavDropdown>
            {/* <Nav.Link href="https://medium.com/choreo-tech-blog" id="Blog" target="_blank" aria-label="Choreo Blog">
              Blog
            </Nav.Link> */}

            <Nav.Link href="" className='navpad' id="Pricing" target="_blank">
              Pricing
            </Nav.Link>

            {/* <Nav.Link href="https://discord.com/invite/wso2" id="Community" target="_blank" aria-label="Choreo Community">
            Community
            </Nav.Link> */}

            {/* <Nav.Link href="http://wso2.com/choreo" id="Enterprise" target="_blank" aria-label="Choreo Enterprise">
            Enterprise
            </Nav.Link> */}

            <Nav.Link className='cNavContact navpad' href="" id="ContactUs" target="_blank" aria-label="Contact Us">
            Contact
            </Nav.Link>

            <Nav.Link href="https://console.choreo.dev/?visitor_id=645a09031d3023.48602168&utm_source=site&utm_medium=organic" className='liginbtn' id="login" target="_blank" aria-label="Asgardeo login">
            Login / Register
            </Nav.Link>
           
           
           
     
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>







        </>
    )
}
export default TopNav;






