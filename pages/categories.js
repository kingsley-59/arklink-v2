import React from 'react';
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';
import NavBanner from '../components/NavBanner';
import Brands from '../components/Brands';
import Categories from '../components/Categories';
import ProductSection from '../components/ProductSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Image from 'next/image';

const Data = [
  {src: require('/public/assets/images/pexel-tiles-1.jpg'), text: 'Tiles and floors'},
  {src: require('/public/assets/images/pexel-tiles-2.jpg'), text: 'Marble and stone'},
  {src: require('/public/assets/images/pexel-doors-3.jpg'), text: 'Doors'},
  {src: require('/public/assets/images/pexel-bathroom-1.jpg'), text: 'Sanitary wares'},
  {src: require('/public/assets/images/pexel-bathroom-3.jpg'), text: 'Accessories'},
]

const ImageOverlay = ({src, text}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="image-overlay-container" >
        <Image src={src} alt="" width={'100%'} style={{aspectRatio: 'auto 3 / 4', width: '100%' }}/>
        <div className="image-overlay">
          <div className="image-overlay-content">{text}</div>
        </div>
      </div>
    </div>
  )
}

const CategoryMesh = () => {
  let categories = ['Doors', 'Marble', 'Tiles', 'Sanitary ware'];

  const categorylist = Data.map(({src, text}, idx) => {
    return <ImageOverlay src={src} text={text} key={idx} />
  })

  return (
    <div className="site-section">
      <div className="heading-wrapper text-center">
        <h3 className="fw-bold">We&apos;ve curated and classified our products into different categories</h3>
      </div>
      <div className="mesh-wrapper">
        <div className="row p-5">
          {categorylist}
        </div>
      </div>
    </div>
  )
}

const MiniGallery = () => {
  return (
    <div className="site-section">
      <div className="heading-wrapper text-center">
        <div className="section-title mb-3">Gallery</div>
        <h3 className='mb-3'>Introducing our collection of high quality photos exhibiting  our exotic designs.</h3>
      </div>
      <div className="gallery-wrapper">
        <div className="row flex-wrap">
          
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <>
    <PreHeader />
    <Header />
    <NavBanner heading={'Categories'} />
    <CategoryMesh />
    {/* <MiniGallery /> */}
    <Brands />
    {/* <Categories /> */}
    <GallerySection />
    <ContactSection />
    <Footer />
    </>
  )
}

export default Home