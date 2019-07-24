import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Image from '../images/yellow.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import NavigationIcon from '@material-ui/icons/Navigation';
import Slider from "react-slick";
import SliderArrowNext from '../global/SliderArrowNext.js';
import SliderArrowPrev from '../global/SliderArrowPrev.js';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  title: {
    height: 400,
    width: "100%",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },
  mainTitle:{
    color: 'white',
  },
  search: {
    height: 210,
    width: '35%',
    backgroundColor: "#E91E63",
    margin: "0 auto",
    position: 'absolute',
    top: 400,
    left: "32%",
  },
  searchTitle:{
    fontWeight: 200,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    color: 'white',
  },
  searchLine: {
    width: '90%',
  },
  card: {
    width: 200,
    maxWidth: 230,
    height: 400,
  },
  media: {
    height: 300,
  },
  fab: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 20,
  },
  fabLink:{
    textDecoration: "none",
  },
  down: {
    fontSize: 50,
    color: '#000000',
    marginBottom: 50,
    marginTop: 20,
    animation: 'bounce 2s infinite ease-in-out;'
  },
  titleH3: {
    color: 'black',
    backgroundColor: "none",
  },
  slider: {
    marginTop: 50,
    width: "80%",
  },
  link: {
    textDecoration: "none",
    color: 'black',
    '&:hover':{
      color: '#e94155',
      textDecoration: "underline",
    },
  }
}))

export default function Title() {

  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: <SliderArrowPrev
    to="prev"/>,
    nextArrow: <SliderArrowNext
    to="next"/>
  };

const [books, setBooks] = useState([]);
const [booksFantasy, setBooksFantasy] = useState([]);
const [booksScience, setBooksScience] = useState([]);
const [value, setValue] = React.useState("");


useEffect(()=> {
  axios.get ('https://cors-anywhere.herokuapp.com/openlibrary.org/subjects/romance.json?details=true&limit=10')
  .then(response => {
    setBooks(response.data.works);
  });
  axios.get ('https://cors-anywhere.herokuapp.com/openlibrary.org/subjects/fantasy.json?details=true&limit=10')
  .then(response => {
    setBooksFantasy(response.data.works);
  });

  axios.get ('https://cors-anywhere.herokuapp.com/openlibrary.org/subjects/science.json?details=true&limit=10')
  .then(response => {
    setBooksScience(response.data.works);
  });
}, [])

  return (
    <main>
      <div className={classes.title}>
        <Typography variant="h1" color='secondary' className={classes.mainTitle} >
          BamBooks
        </Typography>
      </div>

      <div className={classes.search}>
      <Typography variant="h6" className={classes.searchTitle}>
        Find the Book you want...
      </Typography>

      <TextField
      className={classes.searchLine}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="Please, enter the name"
        fullWidth
        margin="normal"
        value={value}
        autoComplete ="off"
        onChange={(e, newValue) => {
        setValue(e.target.value);
      }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <RouterLink to ={{pathname:`/searchresults/${value}`}} className={classes.fabLink}>
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon}/>
        Search
      </Fab>
      </RouterLink>
      </div>

      <div>
      <Icon className={classes.down}>arrow_downward</Icon>
      </div>


      <div>
      <Typography variant="h2" component="h4">
        Romantic
      </Typography>

      <Slider {...settings} className={classes.slider}>

       {books.map(i => (
        <Card className={classes.card} key={i.lending_edition}>
        <RouterLink to ={{pathname:`/books/${i.lending_edition}`}} className={classes.link}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={'http://covers.openlibrary.org/b/id/'+i.cover_id+'-L.jpg'}
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardContent>
          <Typography gutterBottom variant="subtitle2" component="h2">
            {i.title}
          </Typography>
          </CardContent>
        </RouterLink>
        </Card>
        ))}
    </Slider>
</div>
    <div>
    <Typography variant="h2" component="h4">
      Fantasy
    </Typography>

    <Slider {...settings} className={classes.slider}>

     {booksFantasy.map(i => (
      <Card className={classes.card} key={i.openlibrary_edition}>
      <RouterLink to ={{pathname:`/books/${i.openlibrary_edition}`}} className={classes.link}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={'http://covers.openlibrary.org/b/id/'+i.cover_id+'-L.jpg'}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="subtitle2" component="h2">
          {i.title}
        </Typography>
        </CardContent>
      </RouterLink>
      </Card>
      ))}
  </Slider>
</div>

  <div>
  <Typography variant="h2" component="h4">
    Science
  </Typography>

  <Slider {...settings} className={classes.slider}>

   {booksScience.map(i => (
    <Card className={classes.card} key={i.openlibrary_edition}>
    <RouterLink to ={{pathname:`/books/${i.openlibrary_edition}`}} className={classes.link}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={'http://covers.openlibrary.org/b/id/'+i.cover_id+'-L.jpg'}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
      <Typography gutterBottom variant="subtitle2" component="h2">
        {i.title}
      </Typography>
      </CardContent>
    </RouterLink>
    </Card>
    ))}
    </Slider>
    </div>
</main>
  );
}
