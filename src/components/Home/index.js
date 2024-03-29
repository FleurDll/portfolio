import React, { useEffect, useState } from 'react';
import { HomeContainer } from "./HomeElements";
import Navbar from "../navigation/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Cursor from '../Cursor';
import Projects from '../sections/Projects';
import SocialInfo from '../Socialnfo';
import Footer from '../sections/Footer';
import Sidebar from '../navigation/Sidebar';

const Home = ({ emailJSKey }) => {
    const [scrollDirection, setScrollDirection] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState(true);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDirection(scrollY > lastScrollY ? "down" : "up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDirection]);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const screenWidth = window.screen.width;

    return (
        <>
            <Navbar scrollDirection={scrollDirection} toggle={toggle} language={language} setLanguage={setLanguage} />
            <Sidebar toggle={toggle} isOpen={isOpen} language={language} setLanguage={setLanguage} />
            <HomeContainer>
                <Hero language={language} />
                <About scrollDirection={scrollDirection} language={language} />
                <Projects language={language} />
                <Contact emailJSKey={emailJSKey} language={language} />
                {screenWidth > 768 && <Cursor />}
                <Footer language={language} />
            </HomeContainer>
            <SocialInfo />
        </>
    );
};

export default Home;
