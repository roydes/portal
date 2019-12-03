import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeHeader } from '../../redux/appActions';
import { CSSTransition } from 'react-transition-group';

class AppBanner extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
          height: window.innerHeight,
          transform: 'translate3d(0, 0, 0)',
        };
        console.log(this.props)
        this.translateBanner = this.translateBanner.bind(this);
      }
    
      componentDidMount() {
        console.log(this.props)
        window.addEventListener('scroll', this.translateBanner);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.translateBanner);
      }
    
      translateBanner() {
        const windowScrollTop = window.pageYOffset / 7;

        this.setState({
          transform: 'translate3d(0, ' + windowScrollTop + 'px, 0)'
        });
      }
    
      render() {
        const headerTitle = this.props.headerTitle
        const headerSubtitle = this.props.headerSubtitle
    
        return (
            <CSSTransition
                in={true}
                appear={true}
                timeout={600}
                classNames="fade">
                <div className="App-banner" style={{ backgroundImage: `url(${this.props.headerBackground})`, ...this.state }}>
                  <div className="Wrapper">
                    <div className="Header-text">
                      <h1 className="title-large">{headerTitle}</h1>
                      <h3 className="subtitle">{headerSubtitle}</h3>
                    </div>
                  </div>
                </div>
            </CSSTransition>
        );
      }
    }
    
const mapStateToProps = (state) => {
    return {
        headerTitle: state.headerAppearance.headerTitle,
        headerSubtitle: state.headerAppearance.headerSubtitle,
        headerBackground: state.headerAppearance.headerBackground
    }
}
const mapDispatchToProps = {changeHeader}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppBanner);