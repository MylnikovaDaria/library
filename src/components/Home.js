import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from '../images/yellow.png';
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom'
import Slider from "react-slick";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Icon from '@material-ui/core/Icon';
import SliderArrowNext from '../global/SliderArrowNext.js';
import SliderArrowPrev from '../global/SliderArrowPrev.js';


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
    maxWidth: 200,
  },
  media: {
    height: 160,
  },
  fab: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 20,
  },
  down: {
    fontSize: 50,
    color: '#000000',
    marginBottom: 40,
    marginTop: 20,
    animation: 'bounce 2s infinite ease-in-out;'
  },
  titleH3: {
    color: 'black',
    backgroundColor: "none",
  },
  slider: {
    marginTop: 50,
    width: "75%",
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

  return (
    <main>
      <div className={classes.title}>
        <Typography variant="h1" color="inherit" className={classes.mainTitle}>
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
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        Search
      </Fab>
      </div>

      <div>
      <Icon className={classes.down}>arrow_downward</Icon>
      </div>


      <div>
      <Typography variant="h2" component="h4">
        Popular books
      </Typography>

      <Slider {...settings} className={classes.slider}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
    </Slider>
    </div>
</main>
  );
}
