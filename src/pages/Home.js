import React from 'react';
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from '../components/Footer';

const linksArray = ["Home", "Shop", "About", "Contact"];


const Home = () => {
  return (
    <div>
      homepage
      <Navbar links={linksArray} />
      <CarouselComp/>
      <CarouselComp/>
      <Footer/>
      
    
    </div>
  )
}

export default Home;
