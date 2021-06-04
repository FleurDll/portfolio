import React from 'react';
import { AboutDescription, DescriptionSpan } from "./AboutElements";

const DescriptionFr = () => {
    return (
        <AboutDescription>
            J'ai 25ans et je suis française, bien que j'ai grandi dans différents pays. Je suis actuellement en train de préparer ma prochaine destination : le Canada.
            <br></br>
            <br></br>
            Avec, à la base, un diplôme en Psychologie, J'ai toujours été <DescriptionSpan>curieuse</DescriptionSpan> d'en apprendre plus sur la programmation informatique.
            Et voilà comment fin novembre 2020 j'ai commencé à apprendre du Python. J'imagine que cela m'a plu car, depuis ce jour, je n'ai jamais arrêté. Me spécialisant dans la <DescriptionSpan>MERN stack</DescriptionSpan> (MongoDB, Express.js, React.js, Node.js).
            <br></br>
            <br></br>
            Cette nouvelle voie lie mes besoins de <DescriptionSpan>créativité</DescriptionSpan> et de <DescriptionSpan>raisonement logique</DescriptionSpan>.
            {/* Cette nouvelle voie m'épanouit aussi bien pour le côté <DescriptionSpan>créativif</DescriptionSpan> que pour le <DescriptionSpan>raisonement logique</DescriptionSpan> nécessaire. */} Je pousse toujours plus loin mon apprentissage. Bref, en résumé, je m'amuse beaucoup.
            <br></br>
            <br></br>
            Si je ne suis pas en train de coder devant mon écran, vous pouvez me trouver en train d'être promené par mon chien, sur mon vélo ou escaladant des maisons dans un des Assassin's Creed.
        </AboutDescription>
    );
};

export default DescriptionFr;
