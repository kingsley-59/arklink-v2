import React from 'react'
import Slider from "react-slick";

const ProductCard = ({name}) => {
    let styles = {
        aspectRatio: "auto 4 / 3"
    }
    return (
        <div className='bg-primary category-wrapper d-flex align-items-center justify-content-center p-3 mx-3' style={styles}>
            <span className="text-white"> {name} </span>
        </div>
    )
}

const Product = ({product}) => {
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
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <div className='mb-4'>
            <div className="section-subtitle text-center mb-3">{product}</div>
            <div className="product-wrapper">
                <Slider {...settings} className='mb-3'>
                    <div> <ProductCard name='8 x 6 Tiles' /> </div>
                    <div> <ProductCard name='4 x 6 Tiles' /> </div>
                    <div> <ProductCard name='12 x 9 Tiles' /> </div>
                    <div> <ProductCard name='12 x 10 Tiles' /> </div>
                    <div> <ProductCard name='9 x 9 Tiles' /> </div>
                </Slider>
            </div>
            <div className="text-center mt-5">
                <a href={`/products/${product.toLowerCase()}`} className="btn btn-lg text-white text-decoration-none">See all products</a>
            </div>
        </div>
    )
}

const AllProducts = () => {
  return (
    <div className="site-seciton p-5">
        <div className="section-title text-center mb-3">Products</div>
        <Product product='Tiles' />
        <Product product='Marble' />
        <Product product='Doors' />
    </div>
  )
}

export default AllProducts