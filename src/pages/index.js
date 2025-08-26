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
        <Layout>
  
  
    <div className="cIntro cGrayBackground">
        <Container>
            <Row>
                <Col sm={12} md={12}>
        
                <h1>H1</h1>
                
                
              
                </Col>
               
               
            </Row>
        </Container>
    </div>

    <div className="cSection cWhiteBG cTransparentBg">
        <Container>
            <Row>
       
       
            </Row>
        </Container>
    </div>

    <div className="cSection cWhiteBG cTransparentBg cPaddingBottomZero">
        <Container>
            <Row>
               
            
            
            </Row>
        </Container>
    </div>
    <div className="cSection  cTransparentBg cAIblade">
        <Container>
            <Row>
            
            
            </Row>
        </Container>
    </div>
   
   


    
    

    <div className="cSection cGrayBackground cFooterSection cPurpleSection">
        <Container>
            <Row>

               
            </Row>
        </Container>
    </div>





</Layout>
        )
        }




