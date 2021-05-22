import { makeStyles } from '@material-ui/core/styles';

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
  myBtn2: {
    background: 'linear-gradient(160deg, #08f791 30%, #a024fa 90%)',
    border: 1,
    borderColor: 'white',
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(160, 36, 250, .3)',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '10px'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    margin: '10px',
  },
}));
