import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
    },
    toolbarTitle: {
        flex: 1,
    },
});

const TopBar = (props) => {
  const { classes } = props;
  return (
      <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
              <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                  Company name
              </Typography>
              <span>sdfsdf</span>
              <Button href="/security/registration" variant="outlined">Registration</Button>
              <Button color="primary" variant="outlined">
                  Login
              </Button>
          </Toolbar>
      </AppBar>
  );
};

export default withStyles(styles)(TopBar);
