import React from 'react';
import { AboutDescription, DescriptionSpan } from "./AboutElements";

const DescriptionFr = () => {
    return (
        <AboutDescription>
            J'ai 25ans et je suis française, bien que j'ai grandi dans différents pays. Je suis actuellement en train de préparer ma prochaine destination : le <DescriptionSpan>Canada</DescriptionSpan>.
            <br></br>
            <br></br>
            Avec, à la base, un diplôme en Psychologie, J'ai toujours été <DescriptionSpan>curieuse</DescriptionSpan> d'en apprendre plus sur la programmation informatique.
            Et voilà comment fin novembre 2020, j'ai commencé à apprendre Python. J'imagine que cela m'a plu car, depuis ce jour, je n'ai jamais arrêté. Me spécialisant dans la <DescriptionSpan>MERN stack</DescriptionSpan> (MongoDB, Express, React, Node.js).
            <br></br>
            <br></br>
            Cette nouvelle voie me permet de lier mes côtés <DescriptionSpan>logique</DescriptionSpan> et <DescriptionSpan>créatif</DescriptionSpan>. Je pousse toujours plus loin mon apprentissage. Bref, en résumé, je m'<DescriptionSpan>amuse</DescriptionSpan> beaucoup.
            <br></br>
            <br></br>
            Si je ne suis pas en train de coder, vous pouvez me trouver en train d'être promenée par mon chien Hilda, sur mon vélo ou escaladant des maisons dans un des Assassin's Creed.
        </AboutDescription>
    );
};

export default DescriptionFr;
