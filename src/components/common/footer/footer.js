import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';






const Footer = () => {
  return (
    <>


<div className="cFooter cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12} className='footerflex'>

            <Col sm={12} md={12} lg={5}>
            
            
            <img src="https://wso2.cachefly.net/wso2/sites/all/image_resources/asgardeo-by-wso2-white.webp" alt="Asgardeo Logo" className="ls-is-cached lazyloaded fimgleft theme-aslogo" loading="lazy" style={{ height: '38px', width: '140px' }} />
            
            <p className="footerp">Work together seamlessly with secure your applications with ease.</p>

            <a href=''><p className="footerpsmall">Team Conditional & Policy</p></a>
            
            
            
            </Col>

            <Col sm={6} md={6} lg={2}>
            
            <h6 className="linktitle">Pages</h6>

            <a href=''><p className="linksfooter">Home</p></a>
            <a href=''><p className="linksfooter">Services</p></a>
            <a href=''><p className="linksfooter">Achievement</p></a>
            <a href=''><p className="linksfooter">About Us</p></a>
          
            </Col>


            <Col sm={6} md={6} lg={2}>
            
            <h6 className="linktitle">Company</h6>

            <a href=''><p className="linksfooter">Customer</p></a>
            <a href=''><p className="linksfooter">Enterprise</p></a>
            <a href=''><p className="linksfooter">Partners</p></a>
            <a href=''><p className="linksfooter">Job</p></a>

            </Col>
            
           

            <Col sm={12} md={12} lg={3} className='flexend'>
            
            <Button variant="primary" className="me-2 btnstyle1 text-white glow-button-wrapper">Start building for FREE</Button>
          
            </Col>



            {/* <ul class="cFooterLinks">
                    <li class="cCopyright">©2025 WSO2 LLC </li>
                    <li class="cLeft"><a href="https://wso2.com/legal/" id="iFooterTxtTracking_Mobile_Legal"
                            class="cFooterLinkTracking" aria-label="WSO2 Legal">WSO2 Legal</a></li>
                    <li><a href="https://wso2.com/choreo/legal/" id="iFooterTxtTracking_Mobile_Privacyc1"
                            class="cFooterLinkTracking" aria-label="Choreo Legal">Choreo Legal</a></li>
                    <li><a href="https://wso2.com/california-privacy/#opt-out" id="iFooterTxtTracking_Privacy"
                            class="cFooterLinkTracking" aria-label="Do Not Sell My Personal Information">Do Not Sell My
                            Personal Information</a></li>
                    <li><a href="https://wso2.com/modern-slavery-statement/"
                            id="iFooterTxtTracking_Mobile_modern_slavery_statement" class="cFooterLinkTracking"
                            aria-label="Modern Slavery Statement">Modern Slavery Statement</a></li>
                    <li><a href="mailto:human-response@wso2.com" id="iFooterTxtTracking_Mobile_Report"
                            class="cFooterLinkTracking" aria-label="Report a Problem With This Page">Report a Problem
                            With This Page</a></li>
            </ul> */}
   
   



            
            </Col>
            
          </Row>


          <Row>

          <Col sm={12} md={12} lg={12}>
            
          <p className="copyright">© WSO2 LLC. All right reserve</p>
            
          
            </Col>


          </Row>





        
        


        </Container>

      </div>



    </>
  )
}
export default Footer;