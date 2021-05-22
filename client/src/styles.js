import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  myBtn: {
    background: 'linear-gradient(160deg, #afe0d7 30%, #ff577f 90%)',
    border: 1,
    borderColor: 'white',
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  appBar: {
    position: 'fixed',
    backgroundColor: '#303030',
    color: '#f2f2f2'
  },
  heading: {
  color: '#222',
  },
  image: {
  marginLeft: '15px',
  },
  [theme.breakpoints.down('xs')]: {
      mainContainer: {
      flexDirection: 'column-reverse'
      }
  },
  container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      marginTop: 'auto',
      marginBottom: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexBasis: ' | auto',
  },
  link: {
    flexGrow: 1,
  },
  centerH: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '20vh',
  },
  ulNav: {
    position: 'relative',
    float: 'right',
    minWidth: '35%',
    listStyle: 'none',
    top: 80,
  },
  liNav: {
    display: 'inline',
    width: '100%',
    padding: '3.5%',
  },
  linkNav: {
    textDecoration: 'none',
    color: '#a024fa'
  }
  
      
}));