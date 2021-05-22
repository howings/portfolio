import { useCallback, useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import ProjectsReadOnly from '../components/Projects/ProjectsReadOnly';
import { getProjects } from '../actions/projects';
import useStyles from '../styles';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


const COMMANDS = {
    LOAD_ALL: 'loadAllProjects'
}

const useAlan = () => {
    const [alanInstance, setAlanInstance] = useState();

    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();

    const loadAllProjects = useCallback(() => {
        alanInstance.playText('All projects are loaded.');
    }, [alanInstance])


    // add event listener for alanBtn onCommand
    useEffect(() => {
        window.addEventListener(COMMANDS.LOAD_ALL, loadAllProjects)

        return () => {
            window.removeEventListener(COMMANDS.LOAD_ALL, loadAllProjects)
        }
    }, [loadAllProjects]);

    useEffect(() => {
        if (alanInstance != null) return

        setAlanInstance(
            alanBtn({
                right: '4%',
                key: process.env.REACT_APP_ALAN_KEY, 
                onCommand: ({ command }) => {
                    window.dispatchEvent(new CustomEvent(command))
                }
            })
        )
    }, []);


    return null
}
 
export default useAlan;