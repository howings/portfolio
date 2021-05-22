import React from 'react';
import useStyles from './styles';
import { Container, Typography, CssBaseline } from '@material-ui/core'; 
import Footer from '../components/Footer/Footer';

const CaseStudy = () => {

    const classes = useStyles();

    return ( 
        <>
        <CssBaseline>
            <div className={classes.container}>
                <Container maxWidth="lg" className={classes.centerH}>
                    <div className={classes.hero}>
                        <Typography variant="h1" align="center" gutterBottom>COMING SOON</Typography>
                        <Typography variant="h2" align="center" color="textSecondary">UX/UI Zara Shopping Cart Case Study</Typography>
                    </div>
                </Container>
            </div>
        </CssBaseline>
        <div>
            <Footer />
        </div>
        </>
     );
}
 
export default CaseStudy;