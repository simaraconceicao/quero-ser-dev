import React from 'react';
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
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
  
  
  export default function DetalheAnfitriao() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
                Tudo pronto para começar a estudar desenvolvimento web?
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Assine o termo de Não ao Preconceito e compartilhe qualquer espaço sem taxas de cadastro, desde uma sala de estar compartilhada até uma segunda casa e outros tipos de propriedade.
              Você escolhe sua disponibilidade, preço e requisitos para os hóspedes. Estamos aqui para ajudar você durante o processo.
              Depois que seu anúncio estiver publicado, hóspedes qualificados poderão entrar em contato. Você pode tirar suas dúvidas com eles antes da estadia através de mensagens.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Comece já
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Conheça a gente melhor
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          </main>
      </React.Fragment>
  )}