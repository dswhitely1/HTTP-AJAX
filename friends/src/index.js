import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App/layout/App';

const rootElement = document.getElementById( 'root' );
const friendsApp  = <Router><App /></Router>;

render( friendsApp, rootElement );