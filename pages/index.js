import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import Brands from '../components/Brands';
import Categories from '../components/Categories';
import ProductSection from '../components/ProductSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


const Home = () => {

  const [content, setContent] = useState({})

  useEffect(() => {
      let url = `${API_URL}/api/content`
      axios.get(url)
      .then(({data}) => {
          if (typeof data === 'object' && data?.id) {
            setContent(data)
          }
      })
      .catch(error => {
          console.log(error.message)
          // alert("Something went wrong! Please check your network and reload page.")
      })
  }, [])

  return (
    <>
    <PreHeader content={content} />
    <Header />
    <Banner content={content} />
    <AboutSection content={content} showAll={true} />
    <Brands />
    <Categories />
    <ProductSection />
    <GallerySection />
    <ContactSection />
    <Footer content={content} />
    </>
  )
}

export default Home