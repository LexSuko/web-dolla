import React from 'react';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SildebarWrapper,
    SildebarMenu,
    SildebarLike,
    SildebarBtnWrap,
    SildebarRoute
} from './SidebarElements';

const Slidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SildebarWrapper>
            <SildebarMenu>
                <SildebarLike to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>About</SildebarLike>
                <SildebarLike to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>discover</SildebarLike>
                <SildebarLike to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Services</SildebarLike>
                <SildebarLike to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>Signup</SildebarLike>
            </SildebarMenu>
            <SildebarBtnWrap>
                <SildebarRoute to='/signin'>Sign in</SildebarRoute>
            </SildebarBtnWrap>
        </SildebarWrapper>
    </SidebarContainer>
  )
}

export default Slidebar