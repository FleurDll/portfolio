import styled from "styled-components";
import { COLOR, SIZE } from "../../stylesConstantes";

export const CardWrapper = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    font-size: ${SIZE.xs};
    border-radius: ${SIZE.borderRadius};
    background: ${COLOR.lightBg};
    color: ${COLOR.white};
    cursor: ${prop => prop.pointer === "yes" && "pointer"};
    margin: 0 2px;
`;