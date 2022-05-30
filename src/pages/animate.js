import React, { useState } from 'react';
import HeroAnimate from '../components/HeroSection/HeroAnimate';
import InfoAnimate from '../components/InfoSection/InfoAnimate';
import AnimateNav from '../components/Navbar/AnimateNav';
import SidebarAnimate from '../components/Sidebar/SidebarAnimate';
import { SliderData } from '../Data/SliderData';
import {InfoDataOne, InfoDataTwo, InfoDataThree} from '../components/InfoSection/DataAnimate'

const Animate = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen)
    console.log('toggle = '+isOpen);
  }

  return (
    <>
      <AnimateNav toggle={toggle}/>
      <SidebarAnimate isOpen={isOpen} toggle={toggle} />
      <HeroAnimate slides={SliderData}/>
      <InfoAnimate {...InfoDataOne}/>
      <InfoAnimate {...InfoDataTwo}/>
      <InfoAnimate {...InfoDataThree}/>
    </>
  )
}

export default Animate