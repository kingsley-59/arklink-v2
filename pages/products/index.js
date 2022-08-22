import React from "react";
import Header from "../../components/Header";
import PreHeader from "../../components/PreHeader";
import NavBanner from "../../components/NavBanner";
import Brands from "../../components/Brands";
import ProductSection from "../../components/ProductSection";
import GallerySection from "../../components/GallerySection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

const Title = "Products - Arklink";

const Products = () => {
  return (
    <>
      <PreHeader />
      <Header />
      <NavBanner heading={"Products"} />
      <ProductSection />
      <Brands />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Products;
