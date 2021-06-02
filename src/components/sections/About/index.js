import React from 'react';
import Skills from "../Skills";
import Years from "./Years";
import Countries from "./Countries";
import { AboutContainer, AboutPresentation, AboutWrapper, AboutTexts, TextsTop, AboutTitle, TextsBottom, AboutDescription, AboutTimeline, DescriptionSpan, TimelineCountries, TimelineAnimation, TimelineYears, TimeLineBar, TimeLineStop } from "./AboutElements";

const About = ({ scrollDirection }) => {
    return (
        <AboutContainer id="about">
            <AboutPresentation>About</AboutPresentation>
            <AboutWrapper>
                <AboutTexts>
                    <TextsTop>
                        <AboutTitle>Enthusiastic self-taught developer,</AboutTitle>
                    </TextsTop>
                    <TextsBottom>
                        <AboutDescription>
                            I'm a 25 years old <DescriptionSpan>web developer</DescriptionSpan> from France, although I grew up between different countries. I'm currently preparing for my future destination: Canada.
                            <br></br>
                            <br></br>
                            Starting with a psychology diploma, I've always been curious to learn more about computer science.
                            And just like that, late Novembre 2020 I started learning Python. I guess I too was struck by the passion for code, oops. I never stopped since then, specializing myself in the <DescriptionSpan>MERN stack</DescriptionSpan>.
                            <br></br>
                            <br></br>
                            My needs for <DescriptionSpan>logic</DescriptionSpan>, <DescriptionSpan>structure</DescriptionSpan> and <DescriptionSpan>creativity</DescriptionSpan> are finally fulfilled by this new path. I always push my learnings further and never give up. Well, in short, i'm having a lot of fun.
                            <br></br>
                            <br></br>
                            If not coding in front of my screen, you can find me being walked by my dog Hilda, on my bike, ​​or climbing houses in Assassin's Creed games.
                        </AboutDescription>
                    </TextsBottom>
                </AboutTexts>
                <AboutTimeline>
                    <TimelineCountries>
                        <Years
                            years={[1995, 1998, 2000, 2003, 2005, 2009, 2014, 2021]}
                        />
                    </TimelineCountries>
                    <TimeLineBar>
                        <TimelineAnimation scrollDirection={scrollDirection}></TimelineAnimation>
                        <TimeLineStop></TimeLineStop>
                    </TimeLineBar>

                    <TimelineYears>
                        <Countries
                            countries={["Milan", "Sydney", "Zurich", "Copenhagen", "Warsaw", "Lille", "Brussels", "Montreal"]}
                        />
                    </TimelineYears>
                </AboutTimeline>
            </AboutWrapper>
            <Skills />
        </AboutContainer>
    );
};

export default About;
