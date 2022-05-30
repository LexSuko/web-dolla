import styled from "styled-components";

export const InfoSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem, 0rem;
`

export const InfoContainer = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const InfoColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    // padding: 1rem, 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    order: ${({raverse}) => (raverse ? '1' : '2')};

`

export const InfoH1 = styled.h1`
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
`

export const InfoP = styled.p`
    margin-bottom: 2rem;
`

export const InfoColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({raverse}) => (raverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({raverse}) => (raverse ? '1' : '1')};
    }

`

export const InfoImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
`