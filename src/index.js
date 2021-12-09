import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import {
   
    Routes,
    Route,
    
    } from "react-router-dom";

import App from './App';

ReactDOM.render( 
    <React.StrictMode> 
    <Router> 
    <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
      </Routes>
       
    </Router>,
    </React.StrictMode>,
    document.getElementById('root')
    );