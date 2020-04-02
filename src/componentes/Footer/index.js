import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://simaraconceicao.com/">
        Simara Conceição
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">

      </AppBar>
      
          <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          quero ser  &lt;dev&gt;
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          A dor e a delícia da jornada de se tornar uma pessoa desenvolvedora.
        </Typography>
        <Copyright />
      </footer>

      {/* End footer */}
    </React.Fragment>
  );
}