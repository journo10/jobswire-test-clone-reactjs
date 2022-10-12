import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { JobSwireProvider } from './context/JobSwireContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <JobSwireProvider>
  <Router>
    <App />
  </Router>
  </JobSwireProvider>
);

