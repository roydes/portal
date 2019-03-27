import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import { CSSTransition } from 'react-transition-group';

export default class AppRoutes extends Component {
  render() {
    return (
        <div className="App-card">
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/skills"  component={SkillsPage}></Route>
          <Route path="/works"  component={HomePage}></Route>
          <Route path="/research"  component={HomePage}></Route>
          <Route path="/contact" component={HomePage}></Route>
        </div>
    );
  }
}

