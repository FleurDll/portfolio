import React from 'react';
import { SocialInfoContainer, SocialItems, GithubIcon, SocialItem, Line, LinkedInIcon, EmailIcon } from "./SocialInfoElements";

const SocialInfo = () => {
    return (
        <SocialInfoContainer>
            <SocialItems>
                <SocialItem target="_blank" href="https://www.linkedin.com/in/fleur-dalle-21b577213/"><LinkedInIcon /></SocialItem>
                <SocialItem target="_blank" href="https://github.com/FleurDll"><GithubIcon /></SocialItem>
                <SocialItem target="_blank" href="mailto: fleur.dalle@hotmail.com?subject = Portfolio"><EmailIcon /></SocialItem>
            </SocialItems>
            <Line></Line>
        </SocialInfoContainer>
    );
};

export default SocialInfo;
