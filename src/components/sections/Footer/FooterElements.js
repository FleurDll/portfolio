import styled from "styled-components";
import { BiCopyright } from "react-icons/bi";
import { COLOR, SIZE } from "../../../stylesConstantes";

export const FooterContainer = styled.div`
    display: flex;
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
`