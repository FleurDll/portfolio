import styled, { css } from "styled-components";
import { SIZE, COLOR } from "../../stylesConstantes";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";

export const Nav = styled.nav`
    display: flex;
    transform: ${({ scrollDirection }) => scrollDirection === "down" ? "translateY(-70px)" : "translateY(0px)"};
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px -10px ${COLOR.shadow};
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    height: 70px;
    position: sticky;
    top: 0;
    z-index: 10;
    margin-top: -70px;
    padding: 0px 20px;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-self: flex-start;
    align-items: center;
    cursor: pointer;
    font-size: ${SIZE.md};
    color: ${COLOR.grey};
    font-weight: bold;
    text-decoration: none;
    padding: 10px 0;

    &:hover {
        color: ${COLOR.yellow};
    }
`;

export const MobileIcon = styled(CgMenuRight)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 4rem;
        cursor: pointer;
        color: ${COLOR.yellow};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
`;

export const styledLink = css`
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    margin: 1rem;
    padding: 10px 0;
    cursor: pointer;
    font-weight: bold;
    font-size: ${SIZE.md};
    color: ${COLOR.grey};

    &:hover {
        border-bottom: solid ${COLOR.yellow};
        transition: 0.15s border-bottom ease;
        color: ${COLOR.grey};
    }
`;

export const NavLinkS = styled(LinkS)`
    ${styledLink};
`;

export const NavLinkRouter = styled(LinkR)`
    ${styledLink};
`;