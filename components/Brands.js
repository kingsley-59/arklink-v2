import Image from "next/image";
import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
// import logo from "../assets/images/logo.svg";

const BrandDetails = [
  {src: require('/public/assets/images/b_logo_a.jpg'), altName: ''},
  {src: require('/public/assets/images/b_logo_b.jpg'), altName: ''},
  {src: require('/public/assets/images/b_logo_c.jpg'), altName: ''},
  {src: require('/public/assets/images/b_logo_d.jpg'), altName: ''},
  {src: require('/public/assets/images/b_logo_e.jpg'), altName: ''},
  {src: require('/public/assets/images/b_logo_f.jpg'), altName: ''},
  {src: require('/public/assets/images/b_logo_g.jpg'), altName: ''},
]

const LogoCard = ({src, name}) => {
    return (
        <div className="brand mx-3">
            <div className="card border p-3 border-0">
              <div className="card-body d-flex justify-content-center ">
                <Image src={src} alt={name} className='w-100' />
              </div>
            </div>
        </div>
    );
}


const Responsive = () => {

  const brandlist = BrandDetails.map(({src, altName}, idx) => {
    return (
      <div key={idx}><LogoCard src={src} name={altName} /></div>
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
  };

  return (
    <div className="mb-3">
      <h3 className="text-center text-green mb-3"><strong>Brands in our Collection</strong></h3>
      <div className="m-auto text-center mb-3" style={{maxWidth: 600}}>
        Our huge inventyory is graced with quality products from the most prestigious companies arount the world.
        From chinaware manufacturers to Turkish door companies and Italian toilet equipments.
      </div>
      <Slider {...settings} className="mb-3">
        { brandlist }
      </Slider>
    </div>
  )
}

const Brands = () => {
  return (
    <Container className="site-section border" fluid>
        <Responsive />
    </Container>
  )
}

export default Brands