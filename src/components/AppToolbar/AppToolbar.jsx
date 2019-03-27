import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


function AppToolbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Button  className={classes.button}>
            <Link className={classes.link} to="">Home</Link>
          </Button>
          <Button  className={classes.button}>
            <Link className={classes.link} to="/skills">Skills</Link>
          </Button>
          <Button  className={classes.button}>
            <Link className={classes.link} to="/works">Works</Link>
          </Button>
          <Button  className={classes.button}>
            <Link className={classes.link} to="/research">Research</Link>
          </Button>
          <Button  className={classes.button}>
            <Link className={classes.link}  to="/contact">Contact</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'rgb(0,0,0,0)'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    height: '70px',
    width: '100px',
    borderRadius: 0,
  },
  button: {
    borderRadius: 0,
    height: '70px',
    width: '200px',
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  } 
};


AppToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppToolbar);