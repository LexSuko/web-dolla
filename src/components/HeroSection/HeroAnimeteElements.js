import styled, { css } from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

export const HeroWraper = styled.div`
    // margin-top: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    transition: 0.5s ease-in-out;
`;

export const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::befor {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.6) 100%);
    }
`;

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 130vh;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;
`;

export const HeroH1 = styled.h1`
    font-size: clamp(1rem, 8vw, 20rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
`

export const HeroP = styled.p`
    margin-bottom: 25px;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
`

export const Arrow = styled(IoMdArrowRoundForward)`
    width: 20px;
    height: 20px;
    margin-bottom: -5px;
    margin-left: 5px;
`;

export const arrowButton = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;
    margin-bottom: 70px;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`

export const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

export const PrewArrow = styled(IoArrowBack)`
    ${arrowButton}
`;

export const NextArrow = styled(IoArrowForward)`
    ${arrowButton}
`;