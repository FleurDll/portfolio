import React from 'react';
import { AboutDescription, DescriptionSpan } from "./AboutElements";

const DescriptionEn = ({ age }) => {

    return (
        <AboutDescription>
            I'm a {age} years old <DescriptionSpan>software developer</DescriptionSpan> from France, although I grew up between different countries. I'm currently working in Montreal, Canada, at <a href="https://mphase.ca/" target="_blank" rel="noreferrer"><DescriptionSpan>mPhase</DescriptionSpan></a>.
            <br></br>
            <br></br>
            Starting with a diploma in psychology, I've always been curious to learn more about computer science.
            And just like that, late Novembre 2020 I started learning Python. I guess I liked it because I never stopped since then! Specializing myself in the <DescriptionSpan>MERN stack</DescriptionSpan> (MongoDB, Express, React, Node.js).
            <br></br>
            <br></br>
            This new path allows me to join my <DescriptionSpan>logical</DescriptionSpan> and <DescriptionSpan>creative</DescriptionSpan> sides. I always push my learnings further and never give up. Well, in short, i'm having a lot of <DescriptionSpan>fun</DescriptionSpan>.
            <br></br>
            <br></br>
            If not coding, you can find me being walked by my dog Hilda, on my bike, ​​or climbing houses in Assassin's Creed games.
        </AboutDescription>
    );
};

export default DescriptionEn;
