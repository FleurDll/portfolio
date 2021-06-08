import React from 'react';
import FadeIn from 'react-fade-in';
import { animateScroll as scroll } from "react-scroll";
import Pdf from "../../../documents/CV-QC.pdf";
import { Nav, NavContainer, NavLogo, NavMenu, NavItem, LanguageButton, NavLinkS, MobileIcon, NavAnchor } from "./NavbarElements";


const Navbar = ({ toggle, scrollDirection, language, setLanguage }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    let text;

    language ?
        text = {
            first: "About", seconde: "Projects", third: "Contact", fourth: "Resume", fith: "Français"
        }
        :
        text = {
            first: "A Propos", seconde: "Projets", third: "Contact", fourth: "CV", fith: "English"
        }

    return (
        <Nav scrollDirection={scrollDirection}>
            <NavContainer>
                <NavLogo to="/" onClick={toggleHome}>Fleur Dalle</NavLogo>
                <MobileIcon onClick={toggle} />
                <NavMenu>
                    <FadeIn transitionDuration={200}>
                        <NavItem>
                            <NavLinkS to="about" smooth={true} duration={500} spy={true} exact="true">{text.first}</NavLinkS>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={700}>
                        <NavItem>
                            <NavLinkS to="projects" smooth={true} duration={500} spy={true} exact="true">{text.seconde}</NavLinkS>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={1200}>
                        <NavItem>
                            <NavLinkS to="contact" smooth={true} duration={500} spy={true} exact="true">{text.third}</NavLinkS>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={1700}>
                        <NavItem>
                            <NavAnchor href={Pdf} target="_blank" rel="noreferrer">{text.fourth}</NavAnchor>
                        </NavItem>
                    </FadeIn>
                    <FadeIn transitionDuration={1700}>
                        <NavItem>
                            <LanguageButton onClick={() => setLanguage(!language)}>{text.fith}</LanguageButton>
                        </NavItem>
                    </FadeIn>
                </NavMenu>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
