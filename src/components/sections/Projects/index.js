import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectsContainer, ProjectsPresentation, ProjectsWrapper, ProjectsTitle } from "./ProjectsElements";
import ProjectCard from "../../ProjectCard";

const Projects = () => {
    const screenWidth = window.screen.width;

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh();
    }, []);

    return (
        <ProjectsContainer id="projects" data-aos={screenWidth > 768 && "fade-up"}>
            <ProjectsPresentation>Projects</ProjectsPresentation>
            <ProjectsWrapper>
                <ProjectsTitle>Professional</ProjectsTitle>
                <ProjectCard
                    title="Real Estate"
                    description="Showcase website for a real estate agent. You can find what services she offers and all the properties that she sells. I build this website with an admin part where my client can independently change each text, photos and add / remove properties."
                    tools={["React", "Sanity", "Styled-Components"]}
                    githubLink="https://github.com/FleurDll/Realestate-client"
                    appLink="https://www.ameliedufour.com/"
                    img="realEstate"
                    first="text"
                />
                <ProjectsTitle>Personal</ProjectsTitle>
                <ProjectCard
                    title="Workout Generator"
                    description="Each time I got ready for my workout, I would wrote down my list of exercises. I wanted to make my daily life easier and therefore create a generator of sports sessions. This generator draws from my exercise database and loads a custom workout that has a logic in the sequence of exercises."
                    tools={["React", "Redux", "Nodejs", "MongoDB"]}
                    githubLink="https://github.com/FleurDll/Realestate-client"
                    appLink="https://workoutgeneratorfd.herokuapp.com/"
                    img="workoutGenerator"
                    first="image"
                />
                <ProjectCard
                    title="Flags Game"
                    description="A quiz that tests your flags knowledge. It boosts you to become better thanks to scores and ranking. You can challenge your friends in specific categories: Europe, Africa, Asia, Oceania, Americas. Or in the World category for the bravest (250 countries !). It is also a way for me to share my love for memorizing country information (flags, location, ...)."
                    tools={["React", "Redux", "HarperDB", "API"]}
                    githubLink="https://github.com/FleurDll/FlagsGame-Redux"
                    appLink="https://flags-game-fd.netlify.app/#/"
                    img="flagsGame"
                    first="text"
                />
                <ProjectCard
                    title="How's the Weather?"
                    description="Fullstack website that gives current and forcast weather. It detects your location and / or allows you to search for a city. It has a darkmode theme and both English and French languages are available. In the backend there is a database that stores all the searched cities."
                    tools={["JavaScript", "Nodejs", "MongoDB", "API"]}
                    githubLink="https://github.com/FleurDll/Weather"
                    appLink="https://howstheweatherapp.herokuapp.com/"
                    img="meteo"
                    first="image"
                />
            </ProjectsWrapper>
        </ProjectsContainer>
    );
};

export default Projects;
