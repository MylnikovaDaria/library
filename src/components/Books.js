import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Image from '../images/book_placeholder.png';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
    paddingTop: theme.spacing(2),
  },
  cardTop: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: theme.spacing(4),
  },
  media: {
    height: 500,
    maxHeight: 500,
    width: 400,
    backgroundSize: 'contain',
    paddingLeft: 30,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  bookTitle: {
    marginBottom: 30,
  },
  bookTitleSpan: {
    fontSize: 22,
    color: '#E91E63',
  },
  cardContentTop: {
    width: '60%',
  },
  bookTitleDate: {
    fontWeight: "bold",
    color: "black",
  },
  bookTitleP: {
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
},
bookSubject: {
  fontSize: 18,
},
bookTitleSubjects: {
  marginTop: theme.spacing (4),
}
}));

export default function SingleBook({match}) {
  const classes = useStyles();
  let [book, setBook] = useState({});
  let [cover, setCover] = useState([]);
  let [authors, setAuthors] = useState([]);
  let [subjects, setSubject] = useState([]);

  let bookId = match.params.id;


  useEffect(()=> {
    let key = "OLID:"+ bookId;
    axios.get ('https://cors-anywhere.herokuapp.com/openlibrary.org/api/books?bibkeys='+key+'&jscmd=details&format=json')
    .then(response => {

      let details = response.data[key].details;
      setBook(details);
      setCover((details.cover !== undefined) ? details.covers[0] : null);
      setAuthors((details.authors !== undefined) ? details.authors[0].name : "");
      setSubject((details.subjects !== undefined) ? details.subjects : []);
  })}, [])


  return (
    <Card className={classes.card}>
      <div className={classes.cardTop}>
        <CardMedia
          className={classes.media}
          image={(cover != null) ? 'http://covers.openlibrary.org/b/id/'+cover+'-L.jpg' : Image}
          title="Cover"
        />

      <CardContent className={classes.cardContentTop}>

      <Typography variant="h3" color="initial" component="h2" className={classes.bookTitle}>
        {book.title}
      </Typography>

        <Typography variant="h5" color="initial" component="h2">
        <span className={classes.bookTitleSpan}>by</span> {authors}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p" className={classes.bookTitleP}>
        Published <span className={classes.bookTitleDate}>{book.publish_date} </span> by {book.publishers} in {book.publish_places} .
        </Typography>


        <Typography variant=" body1" color="initial" component="span" className={classes.bookTitleSubjects}>
        <span className={classes.bookTitleSpan}>Subjects: </span>
        {subjects.map(i => (<span className={classes.bookSubject}>{i}, </span>))}
        etc.
        </Typography>
      </CardContent>
      </div>
    </Card>
  );
}
