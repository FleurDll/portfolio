import React from 'react';
import { FooterContainer, CopyRight, CopyRightIcon, SocialMediaInfo, GithubIcon, SocialItem, EmailIcon, LinkedInIcon } from "./FooterElements";

const Footer = ({ language }) => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <SocialMediaInfo>
                <SocialItem target="_blank" href=""><LinkedInIcon /></SocialItem>
                <SocialItem target="_blank" href="https://github.com/FleurDll"><GithubIcon /></SocialItem>
                <SocialItem target="_blank" href="mailto: fleur.dalle@hotmail.com?subject = Portfolio"><EmailIcon /></SocialItem>
            </SocialMediaInfo>
            <CopyRight>Fleur Dalle<CopyRightIcon />{currentYear} {language ? "All rights reserved." : "Tous droits réservés."} </CopyRight>
        </FooterContainer>
    );
};

export default Footer;
