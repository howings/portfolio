import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="overline" color="textSecondary">
      {'Copyright © fionaho.com'}  
      {' '}     
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '120vh',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '18vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    marginTop: '10%',
    position: 'relative',
    bottom: -20,
    width: '100%',
    padding: theme.spacing(3, 2),
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <div >
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth="lg" className={classes.wrapper}>
          <Typography variant="caption">All creativity rights reserved. Thank you for your visit! Please see Resume for contact info.</Typography>
            <Copyright />
          </Container>
        </footer>
      </div>
  );
}