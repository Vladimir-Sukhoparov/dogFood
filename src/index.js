import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h1>Hello, React!</h1>;
    


const root = ReactDOM.createRoot(
    document.querySelector('#root')
);
root.render(element);