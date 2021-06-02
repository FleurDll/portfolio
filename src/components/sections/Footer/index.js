import React from 'react';
import { FooterContainer, CopyRight, CopyRightIcon } from "./FooterElements";

const Footer = () => {

    const currentYear = new Date().getFullYear();


    return (
        <FooterContainer>
            <CopyRight>Fleur Dalle<CopyRightIcon />{currentYear} All rights reserved.</CopyRight>
        </FooterContainer>
    );
};

export default Footer;
