import React from 'react';
import { CardWrapper } from "./CardElements";

const Card = ({ text, pointer, icon }) => {
    return (
        <CardWrapper pointer={pointer}>
            {text}
        </CardWrapper>
    );
};

export default Card;