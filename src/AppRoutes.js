import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import './App.scss'

export default class AppRoutes extends Component {
  render() {
    return (
       <div className="App-container">
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/skills"  component={SkillsPage}></Route>
          <Route path="/education" component={HomePage}></Route>
          <Route path="/works"  component={HomePage}></Route>
          <Route path="/research"  component={HomePage}></Route>
          <Route path="/contact" component={HomePage}></Route>
        </div>
    );
  }
}

