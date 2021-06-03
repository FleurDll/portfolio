import styled from "styled-components";
import { SIZE, COLOR } from "../../../stylesConstantes";

export const ProjectsContainer = styled.div`
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 0;

    @media screen and (max-width: 768px) {
        padding: 30px 0;
    }
`;

export const ProjectsPresentation = styled.p`
    padding: 0 0 10px 10px;
    margin-bottom: 30px;
    font-size: ${SIZE.lg};
    font-weight: bold;
    border-bottom: dashed 1px ${COLOR.grey};
`;

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProjectsTitle = styled.p`
    align-self: flex-start;
    font-size: ${SIZE.lg};
    color: ${COLOR.yellow};
    font-weight: bold;
    text-transform: uppercase;
    margin: 20px 0;
`;