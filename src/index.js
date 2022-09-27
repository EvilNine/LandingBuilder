import React from 'react';
import { createRoot } from 'react-dom/client';
import "grapesjs/dist/css/grapes.min.css"
import {GlobalStyle} from './styles/main';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);