import styled from "styled-components";
import { SIZE, COLOR } from "../../../stylesConstantes";

export const ContactContainer = styled.div`
    ${'' /* min-height: 100vh; */}
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 0;

    @media screen and (max-width: 768px) {
        padding: 30px 0;
    }
`;

export const ContactPresentation = styled.p`
    padding: 0 0 10px 10px;
    margin-bottom: 30px;
    font-size: ${SIZE.lg};
    font-weight: bold;
    border-bottom: dashed 1px ${COLOR.grey};
`;

export const ContactTitle = styled.p`
    font-size: 3.2rem;
    color: ${COLOR.white};
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: ${SIZE.lg};
        text-align: center;
    }
`;

export const ContactForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    @media screen and (max-width: 768px) {
        width: 350px;
    }

    @media screen and (max-width: 480px) {
        width: 230px;
    }
`;

export const ContactNameMail = styled.div`
    
`;

export const ContactInput = styled.input`
    ${'' /* background: #121212 !important; */}

    @media screen and (max-width: 600px) {
        width: 350px !important;
        margin: 0 0 10px 0 !important;
    }

    @media screen and (max-width: 480px) {
        width: 230px !important;
        margin: 0 0 5px 0 !important;
    }
    
`;

export const ContactInputMessage = styled.div`
`;

export const ContactButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    font-size: ${SIZE.md};
    border: none;
    border-radius: ${SIZE.borderRadius};
    background: ${COLOR.lightBg};
    color: ${COLOR.white};
    width: 480px;
    margin-top: 20px;

    &:hover {
        background: ${COLOR.lightestBg};
    }

    @media screen and (max-width: 768px) {
        width: 350px;
    }

    @media screen and (max-width: 480px) {
        width: 230px;
    }
`;