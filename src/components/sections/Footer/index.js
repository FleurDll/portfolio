import React from 'react';
import { FooterContainer, CopyRight, CopyRightIcon, SocialMediaInfo, GithubIcon, SocialItem, EmailIcon, LinkedInIcon } from "./FooterElements";

const Footer = () => {

    const currentYear = new Date().getFullYear();


    return (
        <FooterContainer>
            <SocialMediaInfo>
                <SocialItem target="_blank" href=""><LinkedInIcon /></SocialItem>
                <SocialItem target="_blank" href="https://github.com/FleurDll"><GithubIcon /></SocialItem>
                <SocialItem target="_blank" href="mailto: fleur.dalle@hotmail.com?subject = Portfolio"><EmailIcon /></SocialItem>
            </SocialMediaInfo>
            <CopyRight>Fleur Dalle<CopyRightIcon />{currentYear} All rights reserved.</CopyRight>
        </FooterContainer>
    );
};

export default Footer;
