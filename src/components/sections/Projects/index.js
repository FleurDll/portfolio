import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import projectsData from "./projectsData";
import { ProjectsContainer, ProjectsPresentation, ProjectsWrapper, ProjectsTitle } from "./ProjectsElements";
import ProjectCard from "../../ProjectCard";

const Projects = ({ language }) => {
    const screenWidth = window.screen.width;

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh();
    }, []);

    const renderedProjects = projectsData.map((project, index) => {
        return (
            <>
                {index === 0 && <ProjectsTitle>{language ? "Professional" : "Professionnels"}</ProjectsTitle>}
                {index === 1 && <ProjectsTitle>{language ? "Personal" : "Personnels"}</ProjectsTitle>}
                <ProjectCard
                    title={project.name}
                    description={language ? project.enDescription : project.frDescription}
                    tools={project.tools}
                    githubLink={project.github}
                    appLink={project.website}
                    img={project.img}
                    first={project.first}
                />
            </>
        );
    });

    return (
        <ProjectsContainer id="projects" data-aos={screenWidth > 768 && "fade-up"}>
            <ProjectsPresentation>{language ? "Projects" : "Projets"}</ProjectsPresentation>
            <ProjectsWrapper>
                {renderedProjects}
            </ProjectsWrapper>
        </ProjectsContainer>
    );
};

export default Projects;