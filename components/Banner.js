import Link from 'next/link';
import React from 'react';
import { Container, Button } from 'react-bootstrap'

const Banner = ({content}) => {
  const defaultBannerHeading = "Some Pretty Text To Convince Customers To Buy From Us."
  const defaultBannerText = "Some more text to say addition reasons why our brand is most exceptionas and why you need to click the goddam buttom before your bloody ass gets spanked"
  
  return (
    <>
    <Container className="site-banner p-4" id="" fluid>
        <Container className="banner-heading text-center mb-4 text-white">
          {content?.banner_heading ?? defaultBannerHeading}
        </Container>
        <Container className="banner-text text-center mb-4 text-white">
          {content?.bannerText ?? defaultBannerText}
        </Container>
        <Container className="banner-btn text-center">
          <Link href='/categories'><Button className="btn">See Categories</Button></Link>
        </Container>
    </Container>
    </>
  )
}

export default Banner