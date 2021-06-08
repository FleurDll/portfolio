import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { COLOR, SIZE } from "../../stylesConstantes";

export const ProjectContainer = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-template-areas: ${prop => prop.first === "text" ? `"col1 col2"` : `"col2 col1"`};
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    
    @media screen and (max-width: 900px) {
        grid-template-areas: "col2" "col1";
    }
`;

export const ProjectInfo = styled.div`
    grid-area: col1;
    margin: 0 10px;
`;

export const ProjectTitle = styled.a`
    font-size: ${SIZE.lg};
    color: ${COLOR.white};
    font-weight: bold;
    letter-spacing: 3px;
    text-decoration: none;

    &:hover {
        color: ${COLOR.white};
    }
`;

export const ProjectDescription = styled.p`
    margin: 10px 0;
    line-height: 25px;
    font-size: ${SIZE.md};
    color: ${COLOR.grey};

    @media screen and (max-width: 768px) {
        font-size: ${SIZE.sm};
    }
`;

export const ProjectDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProjectTools = styled.div`
    display: flex;
    align-items: center;

    ${'' /* @media screen and (max-width: 390px) {
        display: inline-block;
    } */}
`;

export const ProjectLink = styled.a``;

export const ProjectImageWrapper = styled.a`
    grid-area: col2;
    max-width: 450px;
    max-height: 280px;
    justify-self: center;
    box-shadow: ${COLOR.shadow};
    position: relative;
    display: flex;
    border-radius: 0.5rem;
    

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        ${'' /* z-index: 2; */}
        background: ${prop => prop.hoverImage === "true" ? "transparent" : COLOR.yellowTint};
        border-radius: 0.5rem;
    }

    &:hover {
        background: transparent;
    }

    @media screen and (max-width: 900px) {
        margin: 0 0 20px;
    }

    @media screen and (max-width: 768px) {
        max-width: 350px;
    }

    @media screen and (max-width: 480px) {
        max-width: 300px;
    }
`;

export const ProjectImg = styled.img`
    width: 100%;
    border-radius: 0.5rem;
`;

export const GithubIcon = styled(FiGithub)`
    color: ${COLOR.white};
    font-size: ${SIZE.lg};

    &:hover {
        color: ${COLOR.yellow};
    }
`;