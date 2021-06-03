import styled, { keyframes } from "styled-components";
import { COLOR, SIZE } from "../../../stylesConstantes";

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`;

export const HeroTexts = styled.div`
`;

export const Heading = styled.div`
    ${'' /* margin-bottom: 20px; */}
    ${'' /* margin: auto; */}

    @media screen and (max-width: 768px) {
        
    }
`;

export const HeroText1 = styled.p`
    font-size: ${SIZE.lg};
    color: ${COLOR.yellow};
    font-weight: bold;
`;

export const HeroText2 = styled.p`
    font-size: 100px;
    color: ${COLOR.white};
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: ${SIZE.heading};
    }
`;

export const HeroText3 = styled.p`
    font-size: ${SIZE.heading};
    color: ${COLOR.white};
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: ${SIZE.xl};
    }
`;

export const SpanText = styled.span`
`;

export const Subtitle = styled.p`
    font-size: ${SIZE.lg};
    color: ${COLOR.grey};

    @media screen and (max-width: 768px) {
        font-size: ${SIZE.md};
    }
`;

const scrollDown = keyframes`
    0%{
		background-position: 0 -60px;
	}
	75% {
		background-position: 0 0;
	}
	100%{
		background-position: 0 60px;
	}
`;

export const ScrollDown = styled.div`
    width: 4px;
    border-radius: 10px;
	height: 60px;
	position: absolute;
	bottom: 80px;
	left: 0;
	right: 0;
	margin: 0 auto;
	overflow: hidden;
`;

export const Line = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(to bottom, rgba(255, 250, 100, 1) 50%, rgba(150, 101, 255, 0) 50%);
    background-position: 0 -60px;
    background-size: 100% 200%;
    animation: ${scrollDown} 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
`;