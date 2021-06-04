import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { COLOR } from "../../stylesConstantes";

export const SidebarContainer = styled.aside`
    display: grid;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background : ${COLOR.lightBg};
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: ${COLOR.yellow};
    font-size: 50px;
`;

export const SidebarWrapper = styled.div`
    color: ${COLOR.white};
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-row: repeat(6, 60px);
    }
`;

const styledItemSidebar = css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${COLOR.white};
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        color: #7BC8F0;
    }
`;

export const SidebarLink = styled(LinkS)`
    ${styledItemSidebar};
`;

export const SidebarAnchor = styled.a`
    ${styledItemSidebar};
`;

export const SidebarLanguage = styled.p`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 1.6rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${COLOR.grey};
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        color: #7BC8F0;
    }
`;