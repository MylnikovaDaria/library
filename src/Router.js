import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Books from './components/Books.js';
import SearchResults from './components/SearchResults.js';
import SubjectResults from './components/SubjectResults.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';



const HomeLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/home"{...props} />);
const RomanceLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/subjectresults/:id"{...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    backgroundColor: 'white',
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",

  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    marginRight: '10%' ,
  },
  toolbarLink: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    flexShrink: 0,
    textDecoration: "none",
    color: 'black',
    borderTop: '3px solid transparent',
    '&:hover':{
      borderTop: '3px solid #e94155',
      textDecoration: "none",
    },
  },
  button: {
   marginRight: theme.spacing(2),
   height: 48,
 },
 search: {
   '&:hover':{
     color: '3px solid #e94155',
   },
 },
}));

const sections = [
  'Romance',
  'Fantasy',
  'Sci-Fi',
  'Biographies',
  'Textbooks',
];

export default function LinkRouter() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <Link component={HomeLink} to="/" className={classes.mainlink}>
          <Typography variant="h6" color="textPrimary">
            BamBooks
          </Typography>
          </Link>
        </Toolbar>

        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
           <RouterLink

            component={RomanceLink} to="/subjectresults/romance"
             color="textPrimary"
             noWrap
             variant="body2"
             href="#"
             className={classes.toolbarLink}
            >
             Romance
           </RouterLink>

           <RouterLink
            to ={{pathname:`/subjectresults/fantasy`}}
             color="textPrimary"
             noWrap
             variant="body2"
             href="#"
             value={value}
             className={classes.toolbarLink}
            >
             Fantasy
           </RouterLink>

           <RouterLink
            to ={{pathname:`/subjectresults/sci-fi`}}
             color="textPrimary"
             noWrap
             variant="body2"
             href="#"
             className={classes.toolbarLink}
            >
             Sci-Fi
           </RouterLink>

           <RouterLink
            to ={{pathname:`/subjectresults/biographies`}}
             color="textPrimary"
             noWrap
             variant="body2"
             href="#"
             className={classes.toolbarLink}
            >
             Biographies
           </RouterLink>

           <RouterLink
            to ={{pathname:`/subjectresults/textbooks`}}
             color="textPrimary"
             noWrap
             variant="body2"
             href="#"
             className={classes.toolbarLink}
            >
             Textbooks
           </RouterLink>
       </Toolbar>

       <IconButton className={classes.button} aria-label="Search" color="secondary">
        <SearchIcon className={classes.search}/>
      </IconButton>
      </AppBar>


        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route path ='/books/:id' component={Books}/>
        <Route path ='/searchresults/:id' component={SearchResults}/>
        <Route path ='/subjectresults/:id' component={SubjectResults}/>
        <Footer/>
      </div>
    </Router>
  );
}
