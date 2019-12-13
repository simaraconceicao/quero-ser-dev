import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function HeroUnit() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">

      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
              Qual o seu destino dos sonhos?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              "Planejando direitinho, todo mundo viaja." É possível visitar qualquer lugar do mundo
              ou explorar os bairros aí na sua cidade. A Cultura Negra sempre tem uma história pra contar.
              O que você deseja fazer hoje?
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Ver Experiências
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Reservar Acomodações
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        </main>
    </React.Fragment>
)}