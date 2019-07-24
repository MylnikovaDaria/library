import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Image from '../images/book_placeholder.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  cards: {
     display: 'flex',
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'center',
     paddingTop: theme.spacing(4),
   },
    card:{
      maxWidth: '100%',
      width: '25%',
      minWidth: 250,
      margin:theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    media: {
      height: 300,
      backgroundSize: 'contain',
    },
    link: {
      textDecoration: "none",
      color: "black",
    }
}));

export default function Seacrh({match}) {
  const classes = useStyles();
  let [books, setBooks] = useState([]);

  let term = match.params.id;

  let index = 0;

  useEffect(()=> {
    axios.get ('https://cors-anywhere.herokuapp.com/openlibrary.org/search.json?title='+ term)
    .then(response => {
      setBooks(response.data.docs);
  })}, [])


  return (
    <div className={classes.cards}>
    {books.map(i => (
     <Card className={classes.card} key={index++}>
     <RouterLink to ={{pathname:`/books/${Array.isArray(i.edition_key) ? i.edition_key[0] : i.edition_key}`}} className={classes.link}>
       <CardActionArea>
         <CardMedia
           className={classes.media}
           image={ (i.cover_i !== undefined) ? 'http://covers.openlibrary.org/b/id/'+i.cover_i+'-L.jpg' : Image}
           title="Contemplative Reptile"
         />
       </CardActionArea>
       <CardContent>
       <Typography gutterBottom variant="subtitle2" component="h2">
         {i.title}
       </Typography>
       <Typography gutterBottom variant="subtitle2" component="h2">
         {i.author_name}
       </Typography>
       </CardContent>
     </RouterLink>
     </Card>
     ))}
     </div>
  );
}
