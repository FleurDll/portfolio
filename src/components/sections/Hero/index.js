import React from 'react';
import FadeIn from 'react-fade-in';
import { HeroContainer, Line, ScrollDown, HeroTexts, Heading, HeroText1, HeroText2, HeroText3, Subtitle } from "./HeroElements";

const Hero = ({ scrollNav, language }) => {
    const screenWidth = window.screen.width;

    let text;

    language ?
        text = {
            first: "Hi, I'm", seconde: "Fleur,", third: "a Fullstack developer.", fourth: "Just me having fun imaging and creating things."
        }
        :
        text = {
            first: "Salut ! Je m'appelle", seconde: "Fleur,", third: "je suis développeuse Fullstack.", fourth: "Je m'amuse à imaginer et créer des choses."
        }

    return (
        <HeroContainer id="hero" scrollNav={scrollNav}>
            <HeroTexts>
                <Heading>
                    <FadeIn delay={300}>
                        <HeroText1>{text.first}</HeroText1>
                        <HeroText2>{text.seconde}</HeroText2>
                        <HeroText3>
                            {text.third}
                        </HeroText3>
                        <Subtitle>
                            {text.fourth}
                        </Subtitle>
                    </FadeIn>
                </Heading>
            </HeroTexts>
            {screenWidth > 480 && <ScrollDown><Line></Line></ScrollDown>}
        </HeroContainer>
    );
};

export default Hero;
