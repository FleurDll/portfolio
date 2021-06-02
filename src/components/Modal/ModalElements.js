import styled from "styled-components";
import { COLOR, SIZE } from "../../stylesConstantes";

export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;

    opacity: ${({ show }) => (show ? "1" : "")};
    pointer-events: ${({ show }) => (show ? "visible" : "invisible")};
`;

export const ModalContent = styled.div`
    width: 500px;
    background-color: ${COLOR.white};
    transition: all 0.3s ease-in-out;
    border-radius: ${SIZE.borderRadius};

    @media screen and (max-width: 500px) {
        max-width: 320px;
    }
`;

export const ModalHeader = styled.div`
    padding: 10px;
`;

export const ModalTitle = styled.h2`
    color: ${COLOR.lightBg};
`;

export const ModalBody = styled.div`
    padding: 10px;
    border-top: 1px solid ${COLOR.grey};
    color: ${COLOR.lightBg};
`;

export const ModalFooter = styled.div`
    padding: 10px;
`;

export const ModalCloseButton = styled.button`
    border: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    color: #fff;
    border-radius: ${SIZE.borderRadius};
    background: ${COLOR.grey};
    padding: 12px;
    text-align: center;
    letter-spacing: 1px;
    box-shadow: ${COLOR.shadow};
    cursor: pointer;
    float: right;

    &:hover{
        transform: scale(1.04, 1.04);
    }
`;