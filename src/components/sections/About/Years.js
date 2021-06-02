import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Year } from "./AboutElements";

const Years = ({ years }) => {
    const renderedYears = years.map(year => {
        return <Year key={uuidv4()}>{year}</Year>
    });

    return (
        <>
            { renderedYears}
        </>
    );
};

export default Years;