import styled, { keyframes } from "styled-components";

export const SkillsContainer = styled.div`
    margin-top: 150px;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
    }
`;

export const SkillsWrapper = styled.div`
    display: grid;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-column-gap: 100px;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: grid;
    }
`;

const movingSkill = keyframes`
    0% {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(1.08, 1.08);
    }
    50% {
        transform: scale(1, 1);
    }
    75% {
        transform: scale(1.07, 1.07);
    }
    10% {
        transform: scale(1.03, 1.03);
    }
`;

export const SkillElement = styled.p`
    text-align: center;
    position: abolute;
    font-size: ${prop => `${prop.size}px`};
    font-weight: bold;
    justify-self: center;
    animation: ${movingSkill} 9s linear infinite;
    color: ${prop => prop.color};

    @media screen and (max-width: 768px) {
        animation: none;
    }
`;

export const AllSkills = styled.div`
    display: inline-block;
    text-align: center;
`;

export const Skill = styled.p`
    display: inline-block;
    padding: 10px;
    color: ${prop => prop.color};
`;