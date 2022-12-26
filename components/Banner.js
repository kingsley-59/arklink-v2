import Link from 'next/link';
import React from 'react';
import { Container, Button } from 'react-bootstrap'

const Banner = ({content}) => {
  const defaultBannerHeading = "The brand you can trust for best quality materials."
  const defaultBannerText = "Arklink investment limited is your one-stop shop for all products and services related to building materials, especially tiles, marbles, doors, and bathroom decor."
  
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
          <Link className='border-0' href='/categories'><Button className="btn btn-lg border-0">See Categories</Button></Link>
        </Container>
    </Container>
    </>
  )
}

export default Banner