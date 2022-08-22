import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';
import NavBanner from '../components/NavBanner';
import AboutSection from '../components/AboutSection';
import Brands from '../components/Brands';
import Categories from '../components/Categories';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Title = "About Us - Arklink Investment";

const AboutMains = () => {
    return (
        <Container className="site-section bg-white" fluid>
            <Container className='section-title text-center mb-5'>About Us</Container>
            <Row className="m-auto mb-5 justify-content-around align-items-center">
                <Col lg={5} md={6} xs={10} className="p-3">
                    <div className="about-section-heading text-center mb-3">
                        Some Header Text About Content
                    </div>
                    <p className="about-text text-left">
                    This content will be a bit descriptive. Having passed the message that we sell 
                    ceramic tiles and marble, we will now move forward to saying a few things about us 
                    as a company. Definitely, it won;t be as long as the text in the about page.
                    </p>
                    <p className="about-text text-left">
                    This content will be a bit descriptive. Having passed the message that we sell 
                    ceramic tiles and marble, we will now move forward to saying a few things about us as a company.
                    </p>
                </Col>
                <Col lg={5} md={5} xs={10} className="">
                    <div className="about-hero-image about-hero-1">
                    <div className="about-hero-overlay p-3 d-flex justify-content-center align-items-center">
                        <Button className="about-hero-btn btn-outline-primary">Learn More</Button>
                    </div>
                    </div>
                </Col>
            </Row>
            <Row className="m-auto mb-5 justify-content-around align-items-center">
                <Col lg={5} md={5} xs={10} className="">
                    <div className="about-hero-image about-hero-2">
                    <div className="about-hero-overlay p-3 d-flex justify-content-center align-items-center">
                        <Button className="about-hero-btn btn-outline-primary">Learn More</Button>
                    </div>
                    </div>
                </Col>
                <Col lg={5} md={6} xs={10} className="p-3">
                    <div className="about-section-heading text-center mb-3">
                        Some Header Text About Content
                    </div>
                    <p className="about-text text-left">
                    This content will be a bit descriptive. Having passed the message that we sell 
                    ceramic tiles and marble, we will now move forward to saying a few things about us 
                    as a company. Definitely, it won;t be as long as the text in the about page.
                    </p>
                    <p className="about-text text-left">
                    This content will be a bit descriptive. Having passed the message that we sell 
                    ceramic tiles and marble, we will now move forward to saying a few things about us as a company.
                    </p>
                </Col>
            </Row>
            <Row className="m-auto mb-3 justify-content-around align-items-center">
                <Col lg={5} md={6} xs={10} className="p-3">
                    <div className="about-section-heading text-center mb-3">
                        Some Header Text About Content
                    </div>
                    <p className="about-text text-left">
                    This content will be a bit descriptive. Having passed the message that we sell 
                    ceramic tiles and marble, we will now move forward to saying a few things about us 
                    as a company. Definitely, it won;t be as long as the text in the about page.
                    </p>
                    <p className="about-text text-left">
                    This content will be a bit descriptive. Having passed the message that we sell 
                    ceramic tiles and marble, we will now move forward to saying a few things about us as a company.
                    </p>
                </Col>
                <Col lg={5} md={5} xs={10} className="">
                    <div className="about-hero-image about-hero-3">
                    <div className="about-hero-overlay p-3 d-flex justify-content-center align-items-center">
                        <Button className="about-hero-btn btn-outline-primary">Learn More</Button>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

const Home = () => {
  return (
    <>
    <PreHeader />
    <Header />
    <NavBanner heading={'About Us'} />
    {/* <AboutMains /> */}
    <AboutSection showAll={true} />
    <Categories />
    <Brands />
    <GallerySection />
    <ContactSection />
    <Footer />
    </>
  )
}

export default Home