import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link as RouterLink } from 'react-router-dom';

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
 }
}));

const sections = [
  'Romance',
  'Fantasy',
  'Sci-Fi',
  'Biographies',
  'Textbooks',
];


export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="textPrimary">
            BamBooks
          </Typography>
        </Toolbar>

        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
         {sections.map(section => (
           <RouterLink
            to ={{pathname:`/subjectresults/${section}`}}
             color="textPrimary"
             noWrap
             key={section}
             variant="body2"
             href="#"
             className={classes.toolbarLink}
            >
             {section}
           </RouterLink>
         ))}
       </Toolbar>

       <IconButton className={classes.button} aria-label="Search" color="secondary">
        <SearchIcon className={classes.search}/>
      </IconButton>
      </AppBar>
    </div>
  );
}
