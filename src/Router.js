import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Link from '@material-ui/core/Link';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

export default function LinkRouter() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Footer/>
      </div>
    </Router>
  );
}
