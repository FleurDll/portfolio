import React from 'react';
// import Pdf from "../../../documents/CV-portfolio-FLEURDALLE.pdf";
import Skills from "../Skills";
import Years from "./Years";
import Countries from "./Countries";
import { AboutContainer, AboutPresentation, AboutWrapper, AboutTexts, TextsTop, AboutTitle, TextsBottom, AboutTimeline, TimelineCountries, TimelineAnimation, TimelineYears, TimeLineBar } from "./AboutElements";
import DescriptionEn from './DescriptionEn';
import DescriptionFr from './DescriptionFr';

const About = ({ scrollDirection, language }) => {

    const getAge = () => {
        var today = new Date();
        var birthDate = new Date("1995/10/22");
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <AboutContainer id="about">
            <AboutPresentation>{language ? "About" : "A Propos"}</AboutPresentation>
            <AboutWrapper>
                <AboutTexts>
                    <TextsTop>
                        <AboutTitle>{language ? "Enthusiastic self-taught developer," : "Développeuse autodidacte,"}</AboutTitle>
                    </TextsTop>
                    <TextsBottom>
                        {language ? <DescriptionEn age={getAge()} /> : <DescriptionFr age={getAge()} />}
                    </TextsBottom>
                    {/* <ResumeButton href={Pdf} target="_blank" rel="noreferrer">{language ? "Resume" : "CV"}</ResumeButton> */}
                </AboutTexts>
                <AboutTimeline>
                    <TimelineCountries>
                        <Years
                            years={[1995, 1998, 2000, 2003, 2005, 2009, 2014, 2021]}
                        />
                    </TimelineCountries>
                    <TimeLineBar>
                        <TimelineAnimation scrollDirection={scrollDirection}></TimelineAnimation>
                    </TimeLineBar>
                    <TimelineYears>
                        <Countries
                            countries={language ? ["Milan", "Sydney", "Zurich", "Copenhagen", "Warsaw", "Lille", "Brussels", "Montreal"] : ["Milan", "Sydney", "Zurich", "Copenhague", "Varsovie", "Lille", "Bruxelles", "Montréal"]}
                        />
                    </TimelineYears>
                </AboutTimeline>
            </AboutWrapper>
            <Skills />
        </AboutContainer>
    );
};

export default About;
