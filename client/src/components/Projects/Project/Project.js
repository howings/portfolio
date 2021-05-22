import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteProject } from '../../../actions/projects';

const Project = ({ project, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    
    return ( 
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={project.selectedFile} title={project.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{project.creators}</Typography>
                <Typography variant="body2">{moment(project.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(project._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{ project.tags.map((tag) => `#${tag} `) } </Typography>
            </div>
                <Typography className={classes.title} variant="h4" gutterBottom>{project.title}</Typography>
            <CardContent>
                <Typography variant="body1" color="textSecondary">{project.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteProject(project._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                {/* <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {project.likeCount}
                </Button> */}
            </CardActions>
        </Card>
     );
}
 
export default Project;