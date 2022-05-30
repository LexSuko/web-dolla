import React from 'react'
import { 
    CloseIcon, 
    Icon, 
    SidebarContainer, 
    SidebarLink, 
    SidebarMenu, 
    SidebarWrapper,
    BtnWrap 
} from './SidebarAnimateElements';
import {menuData} from '../../Data/MenuData';
import {Button} from '../ButtonAnimateElements';

const SidebarAnimate = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                {menuData.map((item, index) => (
                    <SidebarLink to={item.Link} key={index}>{item.title}</SidebarLink>
                ))}
            </SidebarMenu>
            <BtnWrap>
                <Button to='/contact' primary="true" big='true'>Contact Us</Button>
            </BtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SidebarAnimate