import React from 'react'
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";

const Bouquet = ({activeTab, setActiveTab}) => {
  return (
    <div className="page-content">
       <Navbar activeTab={activeTab}  setActiveTab={setActiveTab} />
    </div>
  )
}

export default Bouquet
