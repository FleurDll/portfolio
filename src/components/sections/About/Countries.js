import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Country } from "./AboutElements";

const Countries = ({ countries }) => {
    const renderedCountries = countries.map(country => {
        return <Country key={uuidv4()}>{country}</Country>
    });

    return (
        <>
            { renderedCountries}
        </>
    );
};

export default Countries;
