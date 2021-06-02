import React from 'react';
import FadeIn from 'react-fade-in';
import { animateScroll as scroll } from "react-scroll";
import { Nav, NavContainer, NavLogo, NavMenu, NavItem, NavLinkS, MobileIcon } from "./NavbarElements";


const Navbar = ({ toggle, scrollDirection }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <Nav scrollDirection={scrollDirection}>
            <NavContainer>
                <NavLogo to="/" onClick={toggleHome}>Fleur Dalle</NavLogo>
                <MobileIcon onClick={toggle} />
                <NavMenu>
                    <FadeIn transitionDuration={200}>
                        <NavItem>
                            <NavLinkS to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinkS>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={700}>
                        <NavItem>
                            <NavLinkS to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Projects</NavLinkS>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={1200}>
                        <NavItem>
                            <NavLinkS to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Contact</NavLinkS>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={1700}>
                        <NavItem>
                            <NavLinkS to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Resume</NavLinkS>
                        </NavItem>
                    </FadeIn>
                </NavMenu>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
