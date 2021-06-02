import styled from "styled-components";
import { COLOR } from "../../stylesConstantes";

export const HomeContainer = styled.div`
    background: ${COLOR.bg};
    color: ${COLOR.white};
    padding: 0 150px;
    cursor: none;

    @media screen and (max-width: 900px) {
        padding: 0 50px 0 80px;
    }
`;