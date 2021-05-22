import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Grid, CircularProgress } from '@material-ui/core';

// import { deleteProject } from '../../../actions/projects';

const ProjectReadOnly = ({ project, setCurrentId, index }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const urlCheck = new RegExp('^http');
    
    return ( 
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={project.selectedFile} title={project.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{project.creators}</Typography>
                <Typography variant="body2">{moment(project.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                {/* <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(project._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button> */}
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{ project.tags.map((tag) => `#${tag} `) } </Typography>
            </div>
                <Typography className={classes.title} variant="h4" gutterBottom>{project.title}</Typography>
            <CardContent>
                <Typography variant="body1" color="textSecondary">{project.description}</Typography>
            </CardContent>
    
            <CardActions className={classes.cardActions}>
                <Typography variant="subtitle1" color="textSecondary">Project#{index+1}</Typography>
                
                {!urlCheck.test(project.url) ?
                    <Link to={ project.url }>
                    <Button size="small" color="primary" underline="none">
                    <OpenInBrowserIcon fontSize="small" />
                    &nbsp; View More  
                    </Button>
                    </Link>
                :                    
                    <a href={ project.url } target="_blank" textDecoration="none">
                    <Button size="small" color="primary" underline="none">
                        <OpenInBrowserIcon fontSize="small" />
                        &nbsp; View More  
                    </Button>
                    </a>
                }

            </CardActions>
        </Card>
     );
}
 
export default ProjectReadOnly;