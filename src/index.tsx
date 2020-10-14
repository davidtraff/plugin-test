import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

(window as any).React = React;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
