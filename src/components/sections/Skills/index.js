import React from 'react';
import { skills1, skills2, skills3, skills4 } from "./skillsData";
import { SkillsContainer, SkillsWrapper, Row, SkillElement } from "./SkillsElements";

const Skills = () => {
    const screenWidth = window.screen.width;

    const renderedCol1 = skills1.map((skill) => {
        return (
            <SkillElement key={skill.name} size={screenWidth < 980 ? skill.smallScreenSize : skill.size} color={skill.color}>{skill.name}</SkillElement>
        );
    });

    const renderedCol2 = skills2.map((skill) => {
        return (
            <SkillElement key={skill.name} size={screenWidth < 980 ? skill.smallScreenSize : skill.size} color={skill.color}>{skill.name}</SkillElement>
        );
    });

    const renderedCol3 = skills3.map((skill) => {
        return (
            <SkillElement key={skill.name} size={screenWidth < 980 ? skill.smallScreenSize : skill.size} color={skill.color}>{skill.name}</SkillElement>
        );
    });

    const renderedCol4 = skills4.map((skill) => {
        return (
            <SkillElement key={skill.name} size={screenWidth < 980 ? skill.smallScreenSize : skill.size} color={skill.color}>{skill.name}</SkillElement>
        );
    });

    return (
        <SkillsContainer id="skills">
            <SkillsWrapper>
                <Row>
                    {renderedCol1}
                </Row>
                <Row>
                    {renderedCol2}
                </Row>
                <Row>
                    {renderedCol3}
                </Row>
                <Row>
                    {renderedCol4}
                </Row>
            </SkillsWrapper>
        </SkillsContainer>
    );
};

export default Skills;
