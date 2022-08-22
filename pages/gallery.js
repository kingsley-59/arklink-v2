import React from 'react';
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';
import NavBanner from '../components/NavBanner';
import MainGallery from '../components/MainGallery';
import Brands from '../components/Brands';
import Categories from '../components/Categories';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Title = ""

const Home = () => {
  return (
    <>
    <PreHeader />
    <Header />
    <NavBanner heading={'Gallery'}/>
    <MainGallery />
    <Brands />
    <Categories />
    <GallerySection />
    <ContactSection />
    <Footer />
    </>
  )
}

export default Home