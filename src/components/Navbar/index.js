import React , {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLike
} from './NavbarElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(true);
    const [chack, setChack] = useState(true);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
        console.log('Click logo');
    }

    const toggleNavLink = () => {
        // setChack();
        // document.getElementById('home').classList.add('yoooo');
        if(chack === true){
            console.log('Click Menu Link '+chack);
            setChack(false);
        }
        else {
            console.log('Click Menu Link '+chack);
            setChack(true);
        }
        
    }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/web-dolla' onClick={toggleHome}>dolla</NavLogo>
                {/* Mobile resport */}
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                {/* window resport */}
                <NavMenu>
                    <NavItem>
                        <NavLinks id='likk' to='about' onClick={toggleNavLink} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Dicover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLike to='/signin'>Sign In</NavBtnLike>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar