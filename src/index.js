import React from 'react';
import ReactDOM from 'react-dom';
import GA4React from "ga-4-react";
import './index.css';
import App from './App';

const ga4react = new GA4React("G-FQMJ7FQ77X");

(async () => {
    await ga4react.initialize();

    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
})();