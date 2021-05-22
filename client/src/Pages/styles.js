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
        borderRadius: 0,
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151515',
      },
      
    toolBar: {
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151515',
        color: '#f2f2f2',
    },
    heading: {
    color: '#f2f2f2',
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
        height: '81vh',
        padding: theme.spacing(8, 0, 6),
        margin: 'auto',
    },
    hero: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerH: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    moreMarginTop: {
        marginTop: '8%',
        marginBottom: '8%',
    },
}));