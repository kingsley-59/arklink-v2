import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PreHeader from "../../components/PreHeader";
import NavBanner from "../../components/NavBanner";
import Brands from "../../components/Brands";
import CategoryProducts from "../../components/CategoryProducts";
import GallerySection from "../../components/GallerySection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

const Title = "Products - Arklink";

const Products = () => {
  const router = useRouter();
  const { pid } = router.query

  return (
    <>
      <PreHeader />
      <Header />
      <NavBanner heading={pid} />
      <CategoryProducts category={pid} /> 
      <Brands />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Products;
