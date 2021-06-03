import React from 'react';
import FadeIn from 'react-fade-in';
import { animateScroll as scroll } from "react-scroll";
import Pdf from "../../documents/CV-FLEUR DALLE.pdf";
import { Nav, NavContainer, NavLogo, NavMenu, NavItem, NavLinkS, MobileIcon, NavAnchor } from "./NavbarElements";


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
                            <NavLinkS to="about" smooth={true} duration={500} spy={true} exact="true">About</NavLinkS>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={700}>
                        <NavItem>
                            <NavLinkS to="projects" smooth={true} duration={500} spy={true} exact="true">Projects</NavLinkS>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={1200}>
                        <NavItem>
                            <NavLinkS to="contact" smooth={true} duration={500} spy={true} exact="true">Contact</NavLinkS>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={1700}>
                        <NavItem>
                            <NavAnchor href={Pdf} target="_blank" rel="noreferrer">Resume</NavAnchor>
                        </NavItem>
                    </FadeIn>
                </NavMenu>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
