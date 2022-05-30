import React from 'react';
import { 
    Nav,
    Logo,
    MenuBars,
    NavMenu,
    NavMenuLinks,
    NavBtn
} from './AnimateNavElements';
import {Button} from "../ButtonAnimateElements";
import { menuData } from '../../Data/MenuData';

const AnimateNav = ({ toggle }) => {
  return (
    <>
        <Nav>
            <Logo to='/'>ELIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) =>  (
                    <NavMenuLinks to={item.Link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/web-dolla' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    </>
  )
}

export default AnimateNav