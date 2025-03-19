import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Failed to find the root element. Make sure there is a <div id="root"></div> in your HTML.');
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
}

const root = createRoot(rootElement || document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);