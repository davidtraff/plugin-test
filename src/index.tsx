import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Viktigt här är ju att exponera React-libbet på något vis till alla plugins. Detta funkar ju, men inte så värst optimalt.
(window as any).React = React;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
