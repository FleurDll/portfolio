import styled from "styled-components";
import { COLOR } from "../../stylesConstantes";

export const HomeContainer = styled.div`
    background: ${COLOR.bg};
    color: ${COLOR.white};
    padding: 0 150px;
    cursor: none;

    @media screen and (max-width: 1080px) {
        padding: 0 100px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 50px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 25px;
    }
`;