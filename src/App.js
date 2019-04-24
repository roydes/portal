import React, { Component } from 'react';
import AppToolbar from './components/AppToolbar/AppToolbar.jsx';
import Footer from './components/Footer/Footer';
import AppRoutes from './AppRoutes'
import './App.scss';
import './assets/styles/texts.scss'
import './assets/styles/animations.scss'
import { AppTheme } from './AppTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { changeHeader } from './redux/appActions' 

class App extends Component {
  constructor(props) {
    super(props);
    const windowScrollTop = window.pageYOffset /  3;
    this.state = {
      height: window.innerHeight, 
      transform: 'translate3d(0, ' + windowScrollTop + 'px, 0)',
      isSidenavOpened: true
    };
    this.translateBanner = this.translateBanner.bind(this);
  }
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 1.5;
    this.setState({
      transform: 'translate3d(0, ' + windowScrollTop + 'px, 0)'
    });
    window.addEventListener('scroll', this.translateBanner);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.translateBanner);
  }
  translateBanner() {
    const windowScrollTop = window.pageYOffset /  3;
    this.setState({
      transform: 'translate3d(0, ' + windowScrollTop + 'px, 0)'
    });
  }
  render() {
    const headerTitle = this.props.headerTitle
    const headerSubtitle = this.props.headerSubtitle 
    console.log(headerTitle, headerSubtitle)
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
          <CSSTransition
            in={true}
            appear={true}
            timeout={600}
            classNames="fade">
            <div className="App-banner" style={{...this.state}}>
              <div className="Wrapper">
                <div className="Header-text">
                  <h1 className="title-large">{headerTitle}</h1>
                  <h3 className="subtitle">{headerSubtitle}</h3>
                </div>
              </div>
            </div>
          </CSSTransition>
          <AppRoutes></AppRoutes>
        </div>
        <Footer></Footer>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    headerTitle: state.headerAppearance.headerTitle,
    headerSubtitle: state.headerAppearance.headerSubtitle
  }
}
const mapDispatchToProps = {changeHeader}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

