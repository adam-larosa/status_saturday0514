import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';

import Swapi from './Swapi'
import People from './People'



const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

root.render( <Swapi /> );




