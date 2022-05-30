import React, { useEffect, useRef, useState } from 'react'
import { 
    HeroSection, 
    HeroWraper,
    HeroSlide,
    HeroSlider,
    HeroImage,
    HeroContent,
    HeroH1,
    HeroP,
    Arrow,
    SliderButtons,
    PrewArrow,
    NextArrow
} from './HeroAnimeteElements';
import { Button } from '../ButtonAnimateElements';

const HeroAnimate = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        };

        timeout.current = setTimeout(nextSlide, 5000);

        return function() { 
            if(timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current,length]);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
    <HeroSection>
            <HeroWraper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.Image} alt={slide.alt}/>
                                    <HeroContent>
                                        <HeroH1>{slide.title}</HeroH1>
                                        <HeroP>{slide.price}</HeroP>
                                        <Button to={slide.path} primary='true' style={{maxWidth: '160px'}}>
                                            {slide.label}
                                            <Arrow/>
                                        </Button>
                                    </HeroContent>
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrewArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWraper>
        </HeroSection>
    )
}

export default HeroAnimate