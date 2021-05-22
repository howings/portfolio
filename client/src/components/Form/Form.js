import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core'; 
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createProject, updateProject } from '../../actions/projects';
import { useSelector } from 'react-redux';

import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const project = useSelector((state) => currentId ? state.projects.find((p) => p._id === currentId) : null);
    const uploadLabel = 'Upload an Image';

    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        creators: '',
        tags: '',
        selectedFile: '',
        url: ''
    });

    useEffect(() => {
        if(project) setProjectData(project)
    }, [project]);
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateProject(currentId, projectData));
        } else {
            dispatch(createProject(projectData));
        }
        clear();
    };
    
    const clear = () => {
        setCurrentId(null);
        setProjectData({
            title: '',
            description: '',
            creators: '',
            tags: '',
            selectedFile: '',
            url: ''
        });
    };

    return ( 
        <Paper className="classes.paper">
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Edit Project Info' : 'Insert New Project' }</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={projectData.title}onChange={(e) => setProjectData({...projectData, title: e.target.value})} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={projectData.description} onChange={(e) => setProjectData({...projectData, description: e.target.value})} />
                <TextField name="creators" variant="outlined" label="Creators" fullWidth value={projectData.creators} onChange={(e) => setProjectData({...projectData, creators: e.target.value})} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={projectData.tags} onChange={(e) => setProjectData({...projectData, tags: e.target.value.split(',')})}/>
                <TextField name="url" variant="outlined" label="URL" fullWidth value={projectData.url} onChange={(e) => setProjectData({...projectData, url: e.target.value})} />
                <div className={classes.fileInput}>
                    <Typography variant="body2">{uploadLabel}</Typography>
                    <FileBase type="file" name="" multiple={false} onDone={({base64}) => setProjectData({...projectData, selectedFile:  base64})} />
                </div>
                <Button className={`${classes.buttonSubmit} ${classes.myBtn}`} fullWidth type="submit" variant="contained" color="primary" size="large">Submit</Button>
                <Button className={`${classes.buttonSubmit} ${classes.myBtn2}`} onClick={clear} fullWidth variant="contained" color="secondary" size="large">Clear</Button>
            </form>
        </Paper>
     );
}
 
export default Form;