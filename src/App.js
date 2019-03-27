import React, { Component } from 'react';
import AppToolbar from './components/AppToolbar/AppToolbar.jsx';
import Footer from './components/Footer/Footer';
import AppRoutes from './AppRoutes'
import './App.scss';
import { AppTheme } from './AppTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

class App extends Component {
  constructor(props) {
    super(props);
    const windowScrollTop = window.pageYOffset / 3;
    this.state = {
      transform: "translate3d(0, " + windowScrollTop + "px, 0)",
      isSidenavOpened: true
    };
    this.setBannerTransform = this.setBannerTransform.bind(this);
  }
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0, " + windowScrollTop + "px, 0)"
    });
    window.addEventListener("scroll", this.setBannerTransform);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.setBannerTransform);
  }
  setBannerTransform() {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0, " + windowScrollTop + "px, 0)"
    });
  }
  setBannerTransform() {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  }
  render() {
    return (
      <MuiThemeProvider theme={AppTheme}>
        <div className="App">
        <AppToolbar></AppToolbar>
        <div className="App-banner" style={{...this.state}}></div>
        <div className="App-container">
              <div className="App-card">
                <AppRoutes></AppRoutes>
              </div>
          </div>
        </div>
        <Footer></Footer>
      </MuiThemeProvider>
    );
  }
}

export default App;

