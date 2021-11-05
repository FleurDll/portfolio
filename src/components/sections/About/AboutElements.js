import styled, { keyframes, css } from "styled-components";
import { COLOR, SIZE } from "../../../stylesConstantes";

export const AboutContainer = styled.div`
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 0;

    @media screen and (max-width: 768px) {
        padding: 30px 0;
    }
`;

export const AboutPresentation = styled.p`
    padding: 0 0 10px 10px;
    margin-bottom: 30px;
    font-size: ${SIZE.lg};
    font-weight: bold;
    border-bottom: dashed 1px ${COLOR.grey};
`;

export const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AboutTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TextsTop = styled.div`
    margin: 30px 0;
`;

export const AboutTitle = styled.p`
    font-size: 3.2rem;
    color: ${COLOR.white};
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: ${SIZE.lg};
        text-align: center;
    }
`;

export const TextsBottom = styled.div`
`;

export const AboutDescription = styled.p`
    font-size: 1.2rem;
    line-height: 25px;
    color: ${COLOR.grey};
`;

export const DescriptionSpan = styled.span`
    color: ${COLOR.yellow};
`;

export const ResumeButton = styled.a`
    align-self: flex-start;
    margin: 50px 0;
    font-size: ${SIZE.md};
    color: ${COLOR.white};
    border: solid ${COLOR.white};
    padding: 10px;
    border-radius: ${SIZE.borderRadius};
    background: ${COLOR.bg};

    &:hover {
        border-color: ${COLOR.grey};
        color: ${COLOR.grey};
    }
`;

export const AboutTimeline = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 60px;

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const TimeLineBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const styledAnimation = keyframes`
    0% {
        height: 0px;
    }
    100% {
        height: 635px;
    }
`;

export const TimelineAnimation = styled.div`
    background: ${COLOR.yellow};
    height: 635px;
    width: 12px;
    margin: 0 20px;
    border-radius: 40px;
    animation: ${({ scrollDirection }) => scrollDirection === "down" && css`${styledAnimation} 5s ease-in-out`};
    animation: ${({ scrollDirection }) => scrollDirection === "up" && css`${styledAnimation} 5s ease-in-out`};

    @media screen and (max-width: 768px) {
        width: 8px;;
    }
`;

const styledTimeline = css`
    display: grid;
    grid-template-rows: repeat(8, 80px);
    align-items: center;
    color: ${COLOR.grey};

    @media screen and (max-width: 768px) {
        font-size: ${SIZE.xxs};
    }
`;


export const TimelineCountries = styled.div`
    ${styledTimeline};
    text-align: right;
`;

export const TimelineYears = styled.div`
    ${styledTimeline};
    text-align: left;
`;

export const Year = styled.p``;

export const Country = styled.p``;