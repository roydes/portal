import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'



class AppToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      appBar: {
        backgroundColor: 'rgb(0,0,0,0)',
        color: 'white',
      },
      links: {
        color: 'white'
      }
    };
    this.toolbarMostChangeAspect = this.toolbarMostChangeAspect.bind(this);
  }

  componentDidMount() {
    if (this.props.behavior) {
      window.addEventListener('scroll', this.toolbarMostChangeAspect);
    }
  }

  toolbarMostChangeAspect() {
    const { behavior } = this.props;
    const changeColorOnScroll = behavior.changeColorOnScroll;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      this.setState({
        appBar: {
          backgroundColor: '#262620',
          color: changeColorOnScroll.color,
          height: '50px',
          minHeight: '50px',
          transition: 'all 0.4s ease-in-out 0s'
        },
        link: {
          height: '50px',
        },
      });
    } else {
      this.setState({
        appBar: {
          backgroundColor: 'rgb(0,0,0,0)',
          color: changeColorOnScroll.color,
          transition: 'all 0.4s ease-in-out 0s',
          height: '70px',
        },
        link: {
          height: '70px',
        },
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} id="AppToolBar">
        <AppBar position="fixed"  style={{...this.state.appBar}}>
          <Toolbar  style={{...this.state.appBar}}>
            <IconButton  style={{...this.state.appBar}} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Button style={{...this.state.appBar}} component={Link} className={classes.link} to="">
              Home
            </Button>
            <Button style={{...this.state.appBar}} component={Link} className={classes.link} to="/skills">
              Skills
            </Button>
            <Button style={{...this.state.appBar}} component={Link} className={classes.link} to="/works">
              Works
            </Button>
            <Button style={{...this.state.appBar}} component={Link} className={classes.link} to="/research">
              Research
            </Button>
            <Button style={{...this.state.appBar}} component={Link} className={classes.link} to="/education">
              Education
            </Button>
            <Button style={{...this.state.appBar}} component={Link} className={classes.link} to="/contact">
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );

  }
  
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'rgb(0,0,0,0)',
    height: '70px',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 'auto',
    width: '100px',
    height: '70px',
    borderRadius: 0,
  },
  link: {
    height: '70px',
    width: '200px',
    borderRadius: 0,
    color: 'white',
    margin: 0,
  } 
};


AppToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppToolbar);