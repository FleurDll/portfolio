import styled from "styled-components";
import { COLOR } from "../../stylesConstantes";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

export const SocialInfoContainer = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 20px;
    right: auto;
    z-index: 10;
    color: ${COLOR.white};

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const SocialItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SocialItem = styled.a`
    margin: 10px 0;
    padding: 5px;
    font-size: 30px;
    color: ${COLOR.white};

    &:hover {
        color: ${COLOR.yellow};
    }

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`;

export const GithubIcon = styled(FiGithub)`
`;

export const LinkedInIcon = styled(FiLinkedin)`
`;

export const EmailIcon = styled(FiMail)`
`;

export const Line = styled.div`
    height: 200px;
    width: 1px;
    background: ${COLOR.white};
    margin: 0 auto;
`;