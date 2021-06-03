import React from 'react';
import skillsList from "./skillsData";
import { SkillsContainer, SkillsWrapper, Row, SkillElement, AllSkills, Skill } from "./SkillsElements";

const Skills = () => {
    const chunkArray = (array, chunkSize) => {
        var index = 0;
        var arrayLength = array.length;
        var tempArray = [];

        for (index = 0; index < arrayLength; index += chunkSize) {
            let myChunk = array.slice(index, index + chunkSize);
            // Do something if you want with the group
            tempArray.push(myChunk);
        }

        return tempArray;
    };

    const lists = chunkArray(skillsList, 4);

    const screenWidth = window.screen.width;

    const renderedCol1 = lists[0].map((skill) => {
        return (
            <SkillElement key={skill.name} color={skill.color} size={skill.code}>{skill.name}</SkillElement>
        );
    });

    const renderedCol2 = lists[1].map((skill) => {
        return (
            <SkillElement key={skill.name} color={skill.color} size={skill.code}>{skill.name}</SkillElement>
        );
    });

    const renderedCol3 = lists[2].map((skill) => {
        return (
            <SkillElement key={skill.name} color={skill.color} size={skill.code}>{skill.name}</SkillElement>
        );
    });

    const renderedCol4 = lists[3].map((skill) => {
        return (
            <SkillElement key={skill.name} color={skill.color} size={skill.code}>{skill.name}</SkillElement>
        );
    });

    const renderedSkillsSmallScreen = skillsList.map((skill) => {
        return (
            <Skill key={skill.name} color={skill.color}>{skill.name}</Skill>
        );
    })

    return (
        <SkillsContainer id="skills">
            <SkillsWrapper>
                {screenWidth > 768 ?
                    <>
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
                    </>
                    :
                    <AllSkills>{renderedSkillsSmallScreen}</AllSkills>

                }
            </SkillsWrapper>
        </SkillsContainer>
    );
};

export default Skills;
