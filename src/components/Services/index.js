import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServiesIcon,
    ServiesH2,
    ServiesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServiesIcon src={Icon1}/>
                <ServiesH2>Reduce expenses</ServiesH2>
                <ServiesP>We help reduce fess andincrease your overeall revenue.</ServiesP>
            </ServicesCard>
            <ServicesCard>
                <ServiesIcon src={Icon2}/>
                <ServiesH2>Virtuak Offices</ServiesH2>
                <ServiesP>You can assces our platform online anywhere in the world.</ServiesP>
            </ServicesCard>
            <ServicesCard>
                <ServiesIcon src={Icon3}/>
                <ServiesH2>Premium Benfilts</ServiesH2>
                <ServiesP>Unlock our special membership card that returns 5% card back.</ServiesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services