import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

const API_URL = process.env.REACT_APP_API_URL;

const ProductCard = ({item, name}) => {
  let styles = {
      aspectRatio: "auto 4 / 3",
      backgroundImage: `url('${item?.photo_url}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
  }
  return (
      <div className='bg-primary category-wrapper d-flex align-items-center justify-content-center p-3 mx-3' style={styles}>
          <span className="text-white bg-dark bg-opacity-50 rounded p-2"> {name} </span>
      </div>
  )
}

const DummySlides = () => {
  return (
    <>
      <div> <ProductCard name='8 x 6 Tiles' /> </div>
      <div> <ProductCard name='4 x 6 Tiles' /> </div>
      <div> <ProductCard name='12 x 9 Tiles' /> </div>
      <div> <ProductCard name='12 x 10 Tiles' /> </div>
      <div> <ProductCard name='9 x 9 Tiles' /> </div>
    </>
  )
}

const Product = ({product, data}) => {
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
                <div> <ProductCard item={data[0] ?? {}} name={data[0]?.name ?? '8 x 6 Tiles'} /> </div>
                <div> <ProductCard item={data[1] ?? {}} name={data[1]?.name ?? '4 x 6 Tiles'} /> </div>
                <div> <ProductCard item={data[2] ?? {}} name={data[2]?.name ?? '12 x 9 Tiles'} /> </div>
                <div> <ProductCard item={data[3] ?? {}} name={data[3]?.name ?? '12 x 10 Tiles'} /> </div>
                <div> <ProductCard item={data[4] ?? {}} name={data[4]?.name ?? '9 x 9 Tiles'} /> </div>
              </Slider>
          </div>
          <div className="text-center mt-5">
            <a href={`/products/${product.toLowerCase()}`} className="btn btn-lg text-white rounded-0 bg-opacity-50 text-decoration-none">See more</a>
          </div>
      </div>
  )
}

const ProductSection = () => {
  const [tilesCollection, setTilesCollection] = useState([])
  const [marbleCollection, setMarbleCollection] = useState([])
  const [bathroomCollection, setBathroomCollection] = useState([])

  // call products api and pass result to product components
  useEffect(() => {
    axios.get(`${API_URL}/api/products`)
    .then(({data}) => {
      if(data?.length !== 0) {
        let {tiles, marble, bathroom} = sortProducts(data)
        setTilesCollection(tiles)
        setMarbleCollection(marble)
        setBathroomCollection(bathroom)
        console.log(tiles)
        console.log(marble)
        console.log(bathroom)
      }
    })
    .catch(error => {
      console.log(error.message)
      // alert("Couldn't fetch products! Please check your network and try again.")
    })
  }, [])

  // separate products according to their collections
  function sortProducts (products = []) {
    let tiles = []
    let marble = []
    let bathroom = []
    products?.forEach((item) => {
      switch (item.category) {
        case 'tiles':
          tiles.push(item)
          // setTilesCollection([...tilesCollection, item])
          break;
        case 'marble':
          marble.push(item)
          // setMarbleCollection([...marbleCollection, item])
          break;

        default:
          bathroom.push(item)
          // setBathroomCollection([...bathroomCollection, item])
          break;
      }
    });
    if (products.length > 0) {
      console.log(products)
    }
    return {tiles, marble, bathroom}
  }
  
  return (
    <div className="site-seciton p-5">
        <div className="section-title text-center mb-3">Products</div>
        <Product product='Tiles Collection' data={tilesCollection} />
        <Product product='Marble Collection' data={marbleCollection} />
        <Product product='Bathroom Collection' data={bathroomCollection} />
        {/* <div className="text-center mt-5">
            <a href="/products" className="btn btn-lg text-white text-decoration-none">See all products</a>
        </div> */}
    </div>
  )
}

export default ProductSection