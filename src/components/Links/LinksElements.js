import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";

export const IconWrapper = styled.a`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    background: #5d2fdf;
    color: #f7f7f7;
    cursor: pointer;
    transition-property: background, box-shadow;
    transition-duration: 0.35s;

    &:hover {
        background: #5526c5;
    }

    &:focus {
        box-shadow: 0 0 0 10px #8659e9;
    }
`;

const linkAnimation = keyframes`
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-17px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-2px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
`;

export const GithubIcon = styled(GrGithub)`
    cursor: pointer;
    transform-origin: bottom;
    width: 50px;
    height: 50px;

    animation-duration: 2s;
    animation-iteration-count: infinite;
    ${'' /* animation-name: ${linkAnimation}; */}
    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
`;

export const LinkedInIcon = styled(GrLinkedin)`
    color: red;
`;

export const EmailIcon = styled(GrMail)``;