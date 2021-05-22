import React from 'react';
import ProjectReadOnly from './Project/ProjectReadOnly';
import useStyles from './styles.js';
import { useSelector } from 'react-redux';
import { Grid, Grow, Container, CircularProgress } from '@material-ui/core';


const ProjectsReadOnly = ({ setCurrentId }) => {
    const classes = useStyles();
    const projects = useSelector((state) => state.projects);

    // console.log(projects);

    return ( 
        !projects.length ? <CircularProgress /> : (
            <Container maxWidth='lg' >
                <h1>Project List</h1>
                <Grow in>
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>  
                        {projects.map((project, index) => (
                            <Grid  key={index} item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: 'flex' }} >
                                <ProjectReadOnly index={index} project={project} setCurrentId={setCurrentId} />
                            </Grid>
                        ))}
                    </Grid>
                </Grow>
            </Container>
        )
    );
}
 
export default ProjectsReadOnly;