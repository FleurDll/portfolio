import React from 'react';
import FadeIn from 'react-fade-in';
import { HeroContainer, SpanText, Line, ScrollDown, HeroTexts, Heading, HeroText1, HeroText2, HeroText3, Subtitle } from "./HeroElements";

const Hero = ({ scrollNav }) => {
    return (
        <HeroContainer id="hero" scrollNav={scrollNav}>
            <HeroTexts>
                <Heading>
                    <FadeIn delay={300}>
                        <HeroText1>Hi, I'm</HeroText1>
                        <HeroText2>Fleur,</HeroText2>
                        <HeroText3>
                            a <SpanText scrollNav={scrollNav}>Fullstack developer</SpanText>.
                        </HeroText3>
                        <Subtitle>
                            Just me having fun writing some code.
                    </Subtitle>
                    </FadeIn>
                </Heading>
            </HeroTexts>
            <ScrollDown><Line></Line></ScrollDown>
        </HeroContainer>
    );
};

export default Hero;
