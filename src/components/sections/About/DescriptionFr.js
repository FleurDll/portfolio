import React from 'react';
import { AboutDescription, DescriptionSpan } from "./AboutElements";

const DescriptionFr = () => {
    return (
        <AboutDescription>
            J'ai 25ans et je viens de France, bien que j'ai grandi dans différents pays. Je suis actuellement en train de préparer ma prochaine destination : le Canada.
            <br></br>
            <br></br>
            Avec, à la base, un diplôme en Psychologie, J'ai toujours été <DescriptionSpan>curieuse</DescriptionSpan> d'en apprendre plus sur la programmation informatique.
            Et voilà comment fin novembre 2020 j'ai commencé à apprendre du Python. J'imagine que cela m'a plu car, depuis ce jour, je n'ai jamais arrêté. Me spécialisant dans la <DescriptionSpan>MERN stack</DescriptionSpan> (MongoDB, Express, React, Node.js).
            <br></br>
            <br></br>
            Cette nouvelle voie joint mon côté <DescriptionSpan>créatif</DescriptionSpan> et <DescriptionSpan>logique</DescriptionSpan>. Je pousse toujours plus loin mon apprentissage. Bref, en résumé, je m'<DescriptionSpan>amuse</DescriptionSpan> beaucoup.
            <br></br>
            <br></br>
            Si je ne suis pas en train de coder devant mon écran, vous pouvez me trouver en train d'être promenée par mon chien, sur mon vélo ou escaladant des maisons dans un des Assassin's Creed.
        </AboutDescription>
    );
};

export default DescriptionFr;
