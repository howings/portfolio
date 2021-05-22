import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../actions/projects';
import wordsToNumbers from 'words-to-numbers';
import { useCallback, useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import useStyles from './styles';
import { Container, Typography, CssBaseline} from '@material-ui/core'; 
import VolumeUpTwoToneIcon from '@material-ui/icons/VolumeUpTwoTone';

import ProjectsReadOnly from '../components/Projects/ProjectsReadOnly';

const COMMANDS = {
    LOAD_ALL: 'load-all',
    OPEN: 'open',
}


const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const [dispatchTracker, setDispatchTracker] = useState(false);
    const dispatch = useDispatch();
    
    const [alanInstance, setAlanInstance] = useState();
    const projects = useSelector((state) => state.projects);

    const urlCheck = new RegExp('^http');

    let history = useHistory();

    const loadAllProjects = useCallback(() => {

        if (dispatchTracker) {
            alanInstance.playText('Projects are already loaded.');
        } else {
            dispatch(getProjects());
            alanInstance.playText('Just a moment, loading projects.');
            setDispatchTracker(true);
        }
    }, [alanInstance, dispatchTracker])

    const openProject = useCallback(({ detail: { number } }) => {

        if (dispatchTracker) {

            const parsedNumber = number.length > 1 ? wordsToNumbers((number), { fuzzy: true }) : number;
            if (parsedNumber > projects.length) {
                alanInstance.playText('Sorry project number does not exist. Please try again.');
            } else {
                const parsedURL = projects[parsedNumber-1].url;
                // console.log(parsedURL);
                
                if (!urlCheck.test(parsedURL)) { 
                    alanInstance.playText(`Opening project number ${number}`);
                    // return <Redirect to="/CaseStudy" />
                    history.push(parsedURL);
                } else {
                    window.open(projects[parsedNumber-1].url, '_blank');
                    // console.log(projects[1].url);
                    alanInstance.playText(`Opening project number ${number} application in a new window`);
                }
            }
            
        } else {
            alanInstance.playText('Please ask me to display all projects first.');
        }
    }, [alanInstance, dispatchTracker, projects]);

    // add event listener for alanBtn onCommand
    useEffect(() => {
        window.addEventListener(COMMANDS.LOAD_ALL, loadAllProjects)
        window.addEventListener(COMMANDS.OPEN, openProject)

        return () => {
            window.removeEventListener(COMMANDS.LOAD_ALL, loadAllProjects)
            window.removeEventListener(COMMANDS.OPEN, openProject)
        }
    }, [loadAllProjects, openProject]);

    useEffect(() => {
        if (alanInstance === undefined)

        setAlanInstance(
            alanBtn({
                right: '4%',
                key: process.env.REACT_APP_ALAN_KEY, 
                onCommand: ({ command, payload }) => {
                    window.dispatchEvent(new CustomEvent(command, { detail: payload }));
                }
            })
        )
    }, []);

    const classes = useStyles();

    return ( 
        <>
        <CssBaseline />
            <div className={classes.container}>
                <Container maxWidth="lg" className={classes.centerH}>
                    <div className={classes.hero}>
                        <Typography variant="h1" align="center" color="textPrimary">WHAT WOULD YOU LIKE TO SEE?</Typography>
                        <Typography variant="subtitle1" align="center" color="textPrimary">Talk to Alan, your site's assistance, by pressing the microphone button below to start the interaction.</Typography>
                        <Typography variant="subtitle2" align="center" color="textSecondary">***Notice: Please turn on your speakers and microphone for the best experience***</Typography>
                    </div>
                </Container>
            </div>
            <Container maxWidth="lg" className={classes.hero}>
            <div>
                {dispatchTracker ? <ProjectsReadOnly setCurrentId={setCurrentId} /> : null }
            </div>
            </Container>
        <div>
        <Footer />
        </div>
        </>
     );
}
 
export default Home;