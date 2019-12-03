import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeHeader } from './redux/appActions'
import { MuiThemeProvider } from '@material-ui/core/styles';

import AppBanner from './components/AppBanner/AppBanner';
import AppRoutes from './AppRoutes';
import AppToolbar from './components/AppToolbar/AppToolbar';
import AppTheme from './AppTheme';
import Footer from './components/Footer/Footer';
import './App.scss';
import './assets/styles/texts.scss';
import './assets/styles/animations.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isSidenavOpened: false };
  }

  render() {
    return (
      <MuiThemeProvider theme={AppTheme}>
        <div className="App">
          <AppToolbar behavior = {{changeColorOnScroll: { height: 300, color: 'white'}}}></AppToolbar>
          <AppBanner></AppBanner>
          <AppRoutes></AppRoutes>
          <Footer></Footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSidenavOpened: state.isSidenavOpened }
}
const mapDispatchToProps = {changeHeader}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

