import ReactDOM from 'react-dom';
import React from 'react';
import App from './app.jsx';

let componentWhereToStartDrawing = document.querySelector('#app');
ReactDOM.render(<App />, componentWhereToStartDrawing);