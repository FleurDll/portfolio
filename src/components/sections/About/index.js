import React from 'react';
import Pdf from "../../../documents/CV-V2.pdf";
import Skills from "../Skills";
import Years from "./Years";
import Countries from "./Countries";
import { AboutContainer, AboutPresentation, ResumeButton, AboutWrapper, AboutTexts, TextsTop, AboutTitle, TextsBottom, AboutTimeline, TimelineCountries, TimelineAnimation, TimelineYears, TimeLineBar, TimeLineStop } from "./AboutElements";
import DescriptionEn from './DescriptionEn';
import DescriptionFr from './DescriptionFr';

const About = ({ scrollDirection, language }) => {
    return (
        <AboutContainer id="about">
            <AboutPresentation>{language ? "About" : "A Propos"}</AboutPresentation>
            <AboutWrapper>
                <AboutTexts>
                    <TextsTop>
                        <AboutTitle>{language ? "Enthusiastic self-taught developer," : "Développeuse autodidacte,"}</AboutTitle>
                    </TextsTop>
                    <TextsBottom>
                        {language ? <DescriptionEn /> : <DescriptionFr />}
                    </TextsBottom>
                    <ResumeButton href={Pdf} target="_blank" rel="noreferrer">{language ? "Resume" : "CV"}</ResumeButton>
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
                            countries={language ? ["Milan", "Sydney", "Zurich", "Copenhagen", "Warsaw", "Lille", "Brussels", "Montreal"] : ["Milan", "Sydney", "Zurich", "Copenhague", "Varsovie", "Lille", "Bruxelles", "Montreal"]}
                        />
                    </TimelineYears>
                </AboutTimeline>
            </AboutWrapper>
            <Skills />
        </AboutContainer>
    );
};

export default About;
