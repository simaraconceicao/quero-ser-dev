// import React from 'react'
// import './styles.css'

// export default function Mensagem (props) {
//   return (
//     <div className='mensagem'>
//       <img
//         className='mensagem__perfil'
//         src={props.mensagem.autora.imagem}
//         alt='foto-perfil-usuario'
//       />
//       <div>
//         <h2 className='mensagem__nome'>{props.mensagem.autora.nome}</h2>
//         <h3 className='mensagem__subtitulo'>{props.mensagem.subtitulo}</h3>
//         <hr />
//         <p>{props.mensagem.texto}</p>
//       </div>
//     </div>
//   )
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imagem}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.preco}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.endereco}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Reservar Agora
        </Button>
    </CardActions>
    </Card>
  );
}