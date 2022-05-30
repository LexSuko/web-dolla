import React, { useState } from 'react';
import Sildebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeobjOne, homeobjThree, homeobjTwo } from '../components/InfoSection/Data';

import Sevices from '../components/Services/';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
        <Sildebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeobjOne} />
        <InfoSection {...homeobjTwo} />
        <Sevices />
        <InfoSection {...homeobjThree} />
        <Footer/>
    </>
  )
}

export default Home