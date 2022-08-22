import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'


const AboutSection = ({content, showAll}) => {
    const defaultAboutText = `
        This content will be a bit descriptive. Having passed the message that we sell 
        ceramic tiles and marble, we will now move forward to saying a few things about us 
        as a company. Definitely, it won't be as long as the text in the about page.
        This content will be a bit descriptive. Having passed the message that we sell 
        ceramic tiles and marble, we will now move forward to saying a few things about us as a company.
    `
    const aboutEssay = content?.about_essay ?? defaultAboutText
    
    return (
        <Container className="site-section bg-white" fluid>
            <Container className='section-title text-center mb-5'>About Us</Container>
            <Row className="m-auto justify-content-around align-items-center">
                <Col lg={5} md={6} xs={10} className="p-3">
                    <div className="about-section-heading text-center mb-3">
                        What you need to know about Arklink.
                    </div>
                    <p className="about-text text-left">
                        {showAll ? aboutEssay : slashText(aboutEssay)}
                    </p>
                </Col>
                <Col lg={5} md={5} xs={10} className="">
                    <div className="about-hero-image about-hero-1">
                    <div className="about-hero-overlay p-3 d-flex justify-content-center align-items-center">
                        <a href='/contact#get-quote'><Button className="about-hero-btn btn-outline-primary">Get quote</Button></a>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;


function slashText(text, lenght = 50) {
    let textArray = text.split(" ")
    if (textArray <= lenght) {
        return textArray.join(" ")
    }
    let newTextArray = textArray.slice(0, lenght+1)
    let result = newTextArray.join(" ")
    return result + '...';
}