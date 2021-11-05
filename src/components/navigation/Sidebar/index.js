import React from 'react';
// import Pdf from "../../../documents/CV-portfolio-FLEURDALLE.pdf";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLanguage } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, language, setLanguage }) => {
    let text;
    language ?
        text = {
            first: "About", seconde: "Projects", third: "Contact", fourth: "Resume", fith: "Français"
        }
        :
        text = {
            first: "A Propos", seconde: "Projets", third: "Contact", fourth: "CV", fith: "English"
        }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>{text.first}</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>{text.seconde}</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>{text.third}</SidebarLink>
                    {/* <SidebarAnchor href={Pdf} target="_blank" rel="noreferrer">{text.fourth}</SidebarAnchor> */}
                    <SidebarLanguage onClick={() => setLanguage(!language)}>{text.fith}</SidebarLanguage>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
