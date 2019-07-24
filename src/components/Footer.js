import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#262626",
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(6, 0),
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 340,
  },
  footerBottom: {
    height: 80,
    backgroundColor: 'black',
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: "100%",
  },
  fab: {
    marginRight: 30,
  },
  fabSocial:{
    background: "#92999e",
    marginRight: 20,
    marginTop: 20,
    '&:hover '  :{
      color: '#E91E63',
    },
  },
  footerCont: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: 'white',
    paddingTop: theme.spacing(3),
    textAlign: 'left',
  },
  footerSubText: {
    display: 'inline-block',
    width: 400,
    color: '#999999',
    paddingTop: theme.spacing(1),
    alignSelf: "flex-start",
    textAlign: 'left',
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleCont: {
    display: 'flex',
    flexDirection: 'row',
  },
  footerP: {
    fontSize: 26,
    color: "white",
    fontWeight: '400',
    display: "inline-block",
    borderRight: '2px solid #E91E63',
    textTransform:  "uppercase",
    paddingRight: theme.spacing(1),
  },
  footerPsm: {
    fontSize: 26,
    color: "white",
    textTransform:  "uppercase",
    paddingLeft: theme.spacing(1),
    fontWeight: '200',
  },
  footerUl: {
    listStyle: "none",
    display: "flex",
    flexDirection: 'column',
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    width: "100%",
    padding: 0,
    margin: 0,
  },
  info: {
    width: 300,
  },
  footerLi: {
    color: '#999999',
    fontSize: "18px",
    marginBottom: theme.spacing(2),
  },
  footerSpan: {
    paddingLeft: theme.spacing(2),
  },
}));


export default function BottomFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
       <Container maxWidth="lg" className={classes.footerCont}>
       <div className = {classes.block}>
       <Typography variant="h5" align="center" gutterBottom className={classes.footerText}>
         BamBooks
       </Typography>

         <Typography variant="subtitle1" align="center" color="textSecondary" component="p" className={classes.footerSubText}>
           This is website version of Lorem ain gravida nibh vel velit ctor aliquet. an itudin, lorem quis bibendum auctoisi elit
         </Typography>

         <div>
         <Fab variant="round" aria-label="Edit" className={classes.fabSocial}>
          <i className="fab fa-twitter fabColor"></i>
         </Fab>

         <Fab variant="round" aria-label="Edit" className={classes.fabSocial}>
          <i className="fab fa-instagram fabColor"></i>
         </Fab>

         <Fab  variant="round" aria-label="Edit" className={classes.fabSocial}>
            <i className="fas fa-envelope fabColor"></i>
         </Fab>

         <Fab variant="round" aria-label="Edit" className={classes.fabSocial}>
            <i className="fab fa-facebook-f fabColor"></i>
         </Fab>
         </div>
         </div>
         <div  className={classes.info}>
         <div className={classes.titleCont}>
         <p className={classes.footerP}>Our</p>
         <p className={classes.footerPsm}>info</p>
         </div>
         <ul className={classes.footerUl}>
            <li className={classes.footerLi}><i className="fas fa-chevron-left footerI" ></i><span className={classes.footerSpan} >About us</span></li>
            <li className={classes.footerLi}><i className="fas fa-chevron-left footerI" ></i><span className={classes.footerSpan}>Privacy</span></li>
            <li className={classes.footerLi}><i className="fas fa-chevron-left footerI" ></i><span className={classes.footerSpan}>Help</span></li>
            <li className={classes.footerLi}><i className="fas fa-chevron-left footerI" ></i><span className={classes.footerSpan}>FAQ</span></li>
         </ul>

         </div>
       </Container>
       <div className={classes.footerBottom}>
       <Fab color="secondary" aria-label="Edit" className={classes.fab}>
          <Icon>arrow_upward</Icon>
       </Fab>
       </div>
     </footer>
   );
}
