import React from 'react';
import { InfoColumnLeft, InfoColumnRight, InfoContainer, InfoH1, InfoImg, InfoP, InfoSection } from './InfoAnimateElements';
import { Button } from '../ButtonAnimateElements';

const InfoAnimate = ({heading,paragrapOne,paragrapTwo,buttonLabel,Image,raverse,delay}) => {
  return (
    <InfoSection>
        <InfoContainer>
            <InfoColumnLeft>
                <InfoH1>{heading}</InfoH1>
                <InfoP>{paragrapOne}</InfoP>
                <InfoP>{paragrapTwo}</InfoP>
                <Button to='/' primary='true'>{buttonLabel}</Button>
            </InfoColumnLeft>
            <InfoColumnRight raverse={raverse}>
                <InfoImg src={Image} alt='home'/>
            </InfoColumnRight>
        </InfoContainer>
    </InfoSection>
  )
}

export default InfoAnimate