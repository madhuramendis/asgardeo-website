import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Layout from '../layouts/LayoutHome';
// import slider from '../components/slider';
import Slider from '../components/common/slider/slider';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Modal } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { delay, motion, scale } from "framer-motion";
import { Button } from 'react-bootstrap';
export default function Home() {


const [showModal, setShowModal] = useState(false);
        const [selectedVideoId, setSelectedVideoId] = useState(null);
        // Array of video objects with ID and title
        const videos = [
        {
        id: 'hte82nUVOZ4',
                title: 'University of Edinburgh: WSO2 Customer Spotlight',
                // width: 600,
                // height: 600,
                // duration: '3:45'
                thumbnail: 'https://wso2.cachefly.net/wso2/sites/all/image_resources/university-of-edinburgh-wso2-customer-spotlight.webp',
        },
        {
        id: 'zdJU606084w',
                title: 'Linqura: WSO2 Customer Spotlight',
                // width: 600,
                // height: 600,
                // duration: '4:15'
                thumbnail: 'https://wso2.cachefly.net/wso2/sites/all/image_resources/linqura-wso2-customer-spotlight.webp',
        },
        ];
        const videos2 = [
        {
        id: '_dxku1x96Yw',
                title: 'Mastering Choreo: A Comprehensive In-Depth Demo',
                // width: 600,
                // height: 600,
                // duration: '3:45'
                start: 301
        },
        ];
        const handleClose = () => {
setShowModal(false);
        setSelectedVideoId(null);
};
        const handleShow = (videoId) => {
setSelectedVideoId(videoId);
        setShowModal(true);
};
        const [activeTab, setActiveTab] = useState('tab1');
        const [activeTab2, setactiveTab2] = useState('cComp2');
        const router = useRouter();
        const { query } = router;
        let baseIframeUrl = "";
        const appendQueryParameters = (originalUrl, queryParams) => {
const url = new URL(originalUrl);
        Object.keys(queryParams).forEach((key) => {
url.searchParams.append(key, queryParams[key]);
        });
        return url.toString();
        };
        if (Object.keys(query).length > 0) {

        const baseDestinationUrl = "https://console.choreo.dev/signup_embedded";
// const baseDestinationUrl = "https://console.st.choreo.dev/signup_embedded";
        baseIframeUrl = appendQueryParameters(baseDestinationUrl, query);
        
} else {
baseIframeUrl = "https://console.choreo.dev/signup_embedded?utm_source=direct&utm_medium=website&utm_campaign=direct";
// baseIframeUrl = "https://console.st.choreo.dev/signup_embedded?utm_source=direct&utm_medium=website&utm_campaign=direct";
        }
return (
        
<>
        <Layout>


                <div className="herosection cGrayBackground">
                        <Container>
                                <Row>
                                        <Col sm={12} md={12}>

                                                <motion.h1
                                                        initial={{ opacity: 0 }} // starting state
                                                        animate={{ opacity: 1 }} // ending state
                                                        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }} // animation settings
                                                        className="text-4xl font-bold text-white"
                                                >
                                                        Auth for Modern Apps
                                                </motion.h1>


                                                <motion.p
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.9, duration: 1.5, ease: "easeInOut" }}
                                                        className="text-4xl font-bold marbot"
                                                >

                                                        Drop-in components for <span className='highlightspn'>React.js</span> and more<br />
                                                        Add secure login with SSO and MFA, user management, Role-Based Access Control (RBAC), and much more — get your app up and running in minutes.

                                                </motion.p>

                                        </Col>

                                </Row>


                                <Row className='btncenter'>
                                        <Col sm={12} md={6}>
                                                <motion.Button
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 1.4, duration: 1.5, ease: "easeInOut" }}
                                                        whileHover={{
                                                                rotate: 2,
                                                                boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.51)",
                                                                transition: { duration: 0.1 }
                                                        }}

                                                        variant="primary" className="me-2 btnstyle1 animationbtn2 text-white glow-button-wrapper">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        Start building for FREE</motion.Button>

                                        </Col>

                                        <Col sm={12} md={6}>
                                                <motion.Button
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
                                                        whileHover={{
                                                                rotate: -2,
                                                                boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.3)",
                                                                transition: { duration: 0.1 }
                                                        }}
                                                        variant="secondary" className='btnstyle2 animationbtn2 mobilebtn text-white glow-button-wrapper-second'>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                                
                                                        Build with your AI Helper</motion.Button>

                                        </Col>

                                </Row>
                        </Container>
                </div>




                <div className="cSection cWhiteBG cTransparentBg secsection">
                        <Container>
                                <Row>
                                        <Col sm={12} md={12}>
                                                <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
                                                        className="card-container">

                                                        <motion.div
                                                                initial={{ y: 120 }}
                                                                animate={{ y: 0 }}
                                                                transition={{ delay: 0.9, duration: 1.7, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        x: -40,
                                                                        transition: { duration: 0.5 }
                                                                }}
                                                                className="card secondcards">
                                                                <motion.div
                                                                        initial={{ rotate: 360 }}
                                                                        animate={{ rotate: 0 }}
                                                                        transition={{ delay: 1.8, duration: 3.5, ease: "easeInOut" }}
                                                                        whileHover={{
                                                                                transition: { duration: 1.5 },
                                                                                rotate: -30,
                                                                        }}

                                                                >
                                                                        <Image
                                                                                src="https://wso2.cachefly.net/wso2/sites/all/image_resources/asgardeo-icon-white-v5.webp"
                                                                                alt="asgardeo icon"
                                                                                width={30}
                                                                                height={25} />
                                                                </motion.div>

                                                                <h5 className='cardtitles'>Welcome to the Blamer</h5>
                                                                <p className='cardpsecond'>Log in to continue.</p>
                                                                <input type="text" placeholder="Your username/email address" />
                                                                <button>Continue</button>
                                                                <p className='cardp'>Don’t have an account? <a href="#">Sign up</a></p>
                                                        </motion.div>





                                                        <motion.div
                                                                initial={{ y: 100 }}
                                                                animate={{ y: 0 }}
                                                                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.1 },
                                                                }}

                                                                className="card">
                                                                <motion.div
                                                                        initial={{ rotate: 360 }}
                                                                        animate={{ rotate: 0 }}
                                                                        transition={{ delay: 1.8, duration: 3.5, ease: "easeInOut" }}
                                                                        whileHover={{
                                                                                transition: { duration: 2.5 },
                                                                                rotate: 360,
                                                                        }}

                                                                >
                                                                        <Image
                                                                                src="https://wso2.cachefly.net/wso2/sites/all/image_resources/asgardeo-icon-v5.webp"
                                                                                alt="asgardeo icon"
                                                                                width={30}
                                                                                height={25} />
                                                                </motion.div>

                                                                <h5 className='cardtitles'>Sign in to Asgardeo</h5>
                                                                <input type="text" placeholder="Your email address" />
                                                                <button>Continue</button>
                                                                <div className="divider">
                                                                        <span>OR</span>
                                                                </div>
                                                                <button>Continue with Google</button>
                                                                <button>Continue with Microsoft</button>
                                                                <p className='cardp'>Don’t have an account? <a href="#">Sign up</a></p>
                                                        </motion.div>




                                                        <motion.div
                                                                initial={{ y: 120 }}
                                                                animate={{ y: 0 }}
                                                                transition={{ delay: 0.9, duration: 1.7, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        x: 40,
                                                                        transition: { duration: 0.5 }
                                                                }}
                                                                className="card secondcards">
                                                                <motion.div
                                                                        initial={{ rotate: 360 }}
                                                                        animate={{ rotate: 0 }}
                                                                        transition={{ delay: 1.8, duration: 3.5, ease: "easeInOut" }}
                                                                        whileHover={{
                                                                                transition: { duration: 1.5 },
                                                                                rotate: 30,
                                                                        }}

                                                                >
                                                                        <Image
                                                                                src="https://wso2.cachefly.net/wso2/sites/all/image_resources/asgardeo-icon-white-v5.webp"
                                                                                alt="asgardeo icon"
                                                                                width={30}
                                                                                height={25} />
                                                                </motion.div>

                                                                <h5 className='cardtitles'>Enter the temporary passcode from your
                                                                        authenticator app.</h5>

                                                                <div className='otpsection'>

                                                                        <input className='otp' type="text" />

                                                                        <input className='otp' type="text" />

                                                                        <input className='otp' type="text" />

                                                                        <input className='otp' type="text" />

                                                                </div>

                                                                <button>Continue</button>
                                                                <p className='cardp'>Don’t have an account? <a href="#">Sign up</a></p>
                                                        </motion.div>
                                                </motion.div>
                                        </Col>
                                </Row>
                        </Container>
                </div>





                <div className="cSection cWhiteBG cTransparentBg cPaddingBottomZero">
                        <Container>
                                <Row className='midsectionpad'>


                                        <Col sm={12} md={12}>

                                                <motion.h2
                                                        initial={{ opacity: 0 }} // starting state
                                                        animate={{ opacity: 1 }} // ending state
                                                        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }} // animation settings
                                                        className="text-4xl font-bold text-white"
                                                >
                                                        Production-ready identity. Built for your stack
                                                </motion.h2>


                                                <motion.p
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.9, duration: 1.5, ease: "easeInOut" }}
                                                        className="text-4xl font-bold marbot"
                                                >

                                                        Trusted by developers at the world’s fastest-growing companies to build secure login experiences that customers love

                                                </motion.p>


                                                <motion.div 

                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                                                
                                                className='iconcontaniner'>

                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/google-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>


                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/aws-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>


                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/h-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>


                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cisco-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>


                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/linkedin-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>


                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/google-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>


                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/aws-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>


                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/h-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>


                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/cisco-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>


                                                        <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        scale:2.0,
                                                                        rotate: 10,
                                                                }}

                                                        >
                                                                <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/linkedin-icon.webp" alt="asgardeo icon" width={50} height={50} />
                                                        </motion.div>
                                                </motion.div>
                                        </Col>
                                </Row>




                                <Row className='midsectionpad lastpad'>
                                        <Col sm={12} md={12} lg={12} className='flexitem'>

                                                <Col sm={12} md={12} lg={3}>

                                                        <motion.div 
                                                        initial={{ opacity:0 }}
                                                        animate={{ opacity:1 }}
                                                        transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                                                        whileHover={{
                                                                transition: { duration: 0.5 },
                                                                
                                                        }}
                                                        className="bladecards animationbtn2">
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <motion.div

                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        rotate: 10,
                                                                }}
                                                                
                                                                >
                                                                        <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/open-source-initiative.webp" alt="asgardeo icon" width={35} height={35} />

                                                                </motion.div>

                                                                <h5 className='cardtitles2'>Proven Open Source</h5>
                                                                <p class="cardp2">Built on open source tech trusted to secure over one billion identities worldwide</p>


                                                        </motion.div>


                                                </Col>

                                                <Col sm={12} md={12} lg={3}>

                                                        <motion.div 
                                                        initial={{ opacity:0 }}
                                                        animate={{ opacity:1 }}
                                                        transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                                                        whileHover={{
                                                                transition: { duration: 0.5 },
                                                               
                                                        }}
                                                        className="bladecards animationbtn2">
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        rotate: 10,
                                                                }}
                                                                
                                                                >
                                                                        <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/scale-svgrepo.webp" alt="asgardeo icon" width={35} height={35} />

                                                                </motion.div>

                                                                <h5 className='cardtitles2'>Start Free and Scale</h5>
                                                                <p class="cardp2">Start free and scale as you grow. No credit card required</p>


                                                        </motion.div>


                                                </Col>


                                                <Col sm={12} md={12} lg={3}>

                                                        <motion.div 
                                                        
                                                        initial={{ opacity:0 }}
                                                        animate={{ opacity:1 }}
                                                        transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                                                        whileHover={{
                                                                transition: { duration: 0.5 },
                                                                
                                                        }}
                                                        className="bladecards animationbtn2">
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        rotate: 10,
                                                                }}
                                                                
                                                                >
                                                                        <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/open-svgrepo.webp" alt="asgardeo icon" width={35} height={35} />

                                                                </motion.div>

                                                                <h5 className='cardtitles2'>Any App, Any Stack, Anywhere</h5>
                                                                <p class="cardp2">From mobile to SPAs to  server-side apps. From 
                                                                self deploy to SaaS platforms</p>


                                                        </motion.div>


                                                </Col>

                                                <Col sm={12} md={12} lg={3}>
                                                        
                                                        <motion.div  
                                                        initial={{ opacity:0 }}
                                                        animate={{ opacity:1 }}
                                                        transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                                                        whileHover={{
                                                                transition: { duration: 0.5 },
                                                               
                                                                
                                                        }}
                                                        className="bladecards lastcardmob animationbtn2">
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>

                                                                <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 0 }}
                                                                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                                whileHover={{
                                                                        transition: { duration: 0.5 },
                                                                        rotate: 10,
                                                                }}
                                                                
                                                                >
                                                                
                                                                        <Image src="https://wso2.cachefly.net/wso2/sites/all/image_resources/trust-wallet-svgrepo.webp" alt="asgardeo icon" width={35} height={35} />

                                                                </motion.div>

                                                                <h5
                                                                 className='cardtitles2'>Standards You Trust</h5>
                                                                <p class="cardp2">OAuth 2.1, OpenID Connect, SAML 2.0 and SCIM 2.0</p>
                                                        </motion.div>
                                                </Col>
                                        </Col>
                                </Row>

                        </Container>

                </div>
        
        </Layout>
        </>
)
}