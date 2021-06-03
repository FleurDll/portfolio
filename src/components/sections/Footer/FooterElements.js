import styled, { css } from "styled-components";
import { BiCopyright } from "react-icons/bi";
import { COLOR, SIZE } from "../../../stylesConstantes";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    color: ${COLOR.grey};
    font-size: ${SIZE.xs};
`;

export const CopyRight = styled.p`
    display: flex;
    align-items: center;
`;

export const CopyRightIcon = styled(BiCopyright)`
`;

export const SocialMediaInfo = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        margin: 30px 0;
    }
`;

export const SocialItem = styled.a``;

const styledIcon = css`
    font-size: 25px;
    color: ${COLOR.grey};
    margin: 0 20px;

    &:hover {
        color: ${COLOR.yellow};
    }
`;

export const LinkedInIcon = styled(FiLinkedin)`
    ${styledIcon};
`;

export const EmailIcon = styled(FiMail)`
    ${styledIcon};
`;

export const GithubIcon = styled(FiGithub)`
    ${styledIcon};
`;