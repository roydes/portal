import React, { Component } from 'react';
import AppToolbar from './components/AppToolbar/AppToolbar.jsx';
import Footer from './components/Footer/Footer';
import AppRoutes from './AppRoutes'
import './App.scss';
import './assets/styles/texts.scss'
import { AppTheme } from './AppTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';


class App extends Component {
  constructor(props) {
    super(props);
    const windowScrollTop = window.pageYOffset /  3;
    this.state = {
      height: window.innerHeight, 
      transform: "translate3d(0, " + windowScrollTop + "px, 0)",
      isSidenavOpened: true
    };
    this.setBannerTransform = this.setBannerTransform.bind(this);
  }
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 1.5;
    this.setState({
      transform: "translate3d(0, " + windowScrollTop + "px, 0)"
    });
    window.addEventListener("scroll", this.setBannerTransform);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.setBannerTransform);
  }
  setBannerTransform() {
    const windowScrollTop = window.pageYOffset /  3;
    this.setState({
      transform: "translate3d(0, " + windowScrollTop + "px, 0)"
    });
  }
  render() {
    return (
      <MuiThemeProvider theme={AppTheme}>
        <div className="App">
          <AppToolbar
            behavior = {{changeColorOnScroll: {
              height: 300,
              color: 'white'
            }}}
          >
          </AppToolbar>
          <div className="App-banner" style={{...this.state}}>
            <div className="Wrapper">
              <div className="Header-text">
                <h1 className="title-large">Roides Javier Cruz Lara</h1>
                <h3 className="subtitle"> MSc in Computer Science, Software Engineer, Researcher and Frontend Developer</h3>
              </div>
            </div>
          </div>
          <AppRoutes></AppRoutes>
        </div>
        <Footer></Footer>
      </MuiThemeProvider>
    );
  }
}

export default App;

