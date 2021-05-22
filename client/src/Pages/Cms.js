import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid, CssBaseline} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Form from '../components/Form/Form';
import Projects from '../components/Projects/Projects';
import useStyles from './styles';
import { getProjects } from '../actions/projects';
// import Footer from '../components/Footer/Footer';

const Cms = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);
    // }, [dispatch, currentId]);

    return ( 
        <>
            <CssBaseline />
            <div className={classes.container}>
                <Container maxWidth="lg" className={classes.centerH,  classes.moreMarginTop}>
                <Typography className={classes.heading} variant="h1" align="center">CMS</Typography>
                <Typography variant="h6" align="center" color="primary">Demo for internal use only.</Typography>
                    <Grow in>
                    <Container className={classes.moreMarginTop}>
                        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Projects setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid> 
                    </Container>
                    </Grow>
                </Container>
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </>
    );
}
 
export default Cms;