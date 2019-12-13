import React from 'react';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import EscolherData from './Inputs/EscolherData'
import Hospedes from './Inputs/Hospedes'
// import GoogleMaps from './Inputs/GoogleMaps'
import Local from '../Formulario/Inputs/Local'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Formulario() {
  const classes = useStyles();

  return (
    <React.Fragment>
            <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
              Qual o seu destino dos sonhos?
            </Typography>
            <Grid container spacing={2} justify="center">
                <EscolherData/>
                <Hospedes/>
                <Local/>
                {/* <GoogleMaps/> */}
                                          
            </Grid>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Buscar
                  </Button>
                </Grid>                
            </Grid>
            </div>
          </Container>
        </div>
        </main>
   </React.Fragment>
  );
}