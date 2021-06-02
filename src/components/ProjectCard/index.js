import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from "../Card";
import realEstateImg from "../../images/realEstate.png";
import workoutGeneratorImg from "../../images/workoutGenerator.png";
import flagsGameImg from "../../images/flagsGame.png";
import meteoImg from "../../images/meteo.png";
import { ProjectContainer, GithubIcon, ProjectInfo, ProjectImageWrapper, ProjectImg, ProjectTitle, ProjectDescription, ProjectDetails, ProjectTools, ProjectLink } from "./ProjectCardElements";

const ProjectCard = ({ title, description, tools, githubLink, appLink, first, img }) => {
    const [hoverImage, setHoverImage] = useState(false);

    let imgSrc = "";

    switch (img) {
        case "realEstate":
            imgSrc = realEstateImg;
            break;
        case "workoutGenerator":
            imgSrc = workoutGeneratorImg;
            break;
        case "flagsGame":
            imgSrc = flagsGameImg;
            break;
        case "meteo":
            imgSrc = meteoImg;
            break;
        default:
            break;
    }

    return (
        <ProjectContainer first={first}>
            <ProjectInfo>
                <ProjectTitle target="_blank" href={appLink}>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <ProjectDetails>
                    <ProjectLink target="_blank" href={githubLink}><GithubIcon /></ProjectLink>
                    <ProjectTools>
                        {tools.map(tool => {
                            return <Card key={uuidv4()} text={tool} pointer="no" />;
                        })}
                    </ProjectTools>
                </ProjectDetails>
            </ProjectInfo>
            <ProjectImageWrapper
                onMouseEnter={() => setHoverImage(true)}
                onMouseLeave={() => setHoverImage(false)}
                target="_blank"
                href={appLink}
                hoverImage={hoverImage.toString()}>
                <ProjectImg
                    src={imgSrc}
                    alt="Project Image"
                />
            </ProjectImageWrapper>
        </ProjectContainer>
    );
};

export default ProjectCard;
