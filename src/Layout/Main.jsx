import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Cards from '../Components/Card/Card';
import Footer from '../Components/Footer/Footer';
import OurGallery from '../Components/OurGallery/OurGallery';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Cards></Cards>
      <OurGallery></OurGallery>
      <Footer></Footer>
    </div>
  );
};

export default Main;