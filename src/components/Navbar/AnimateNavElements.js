import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; 

export const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: transparent;
`;

export const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;
export const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        cursor: pointer;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        color: #fff;
    }
`;


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
