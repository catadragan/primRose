import React from 'react';
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from '../components/Footer';




const Home = ({activeTab, setActiveTab}) => {
  return (
    <div>
      homepage
      <Navbar activeTab={activeTab} />
      <CarouselComp/>
      <CarouselComp/>
      <Footer/>
      
    
    </div>
  )
}

export default Home;
