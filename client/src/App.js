import React from 'react';
import './index.css';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Typography, CssBaseline, Toolbar } from '@material-ui/core'; 
import ListTwoToneIcon from '@material-ui/icons/ListTwoTone';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useStyles from './styles';

import Home from './Pages/Home';
import Cms from './Pages/Cms';
import CaseStudy from './Pages/CaseStudy';
import Featured from './Pages/Featured';
// import Footer from './components/Footer/Footer';


const App = () => {
   const classes = useStyles();

   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);

   const handleMenu = (event) => {
     setAnchorEl(event.currentTarget);
   };
 
   const handleClose = () => {
     setAnchorEl(null);
   };

    return ( 
        <>
        <CssBaseline />
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <div>
                        <IconButton 
                        edge="start"
                        color="inherit" 
                        aria-label="menu"
                        onClick={ handleMenu }
                        >
                            <ListTwoToneIcon className={classes.linkNav}/>
                        </IconButton>
                        <Menu 
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                            style={{ top: '6%'}}
                        >
                            <MenuItem style={{whiteSpace: 'normal', color: '#08f791'}}>"What is this?", "How do I start" or "What can I do here?"</MenuItem>
                            <MenuItem style={{whiteSpace: 'normal'}}>“Who is Fiona Ho?”  or “Tell me about Fiona.”</MenuItem>
                            <MenuItem style={{whiteSpace: 'normal', color: '#08f791'}}>"What can you show me?" or "What do I do now?"</MenuItem>
                            <MenuItem style={{whiteSpace: 'normal'}}>"Show me all of the projects." or "Display all projects."</MenuItem>
                            <MenuItem style={{whiteSpace: 'normal', color: '#08f791'}}>"Open Project number 1" or "Open Project number 2" etc. based on the "Project#"</MenuItem>
                            <MenuItem style={{whiteSpace: 'normal'}}>"Thanks Alan" to stop the AI from listening.</MenuItem>
                            <MenuItem style={{whiteSpace: 'normal', color: '#08f791'}}>Have a casual chat with Alan like: "How old are you?", "You are fired!" or any question you want.</MenuItem>
                        </Menu>
                    </div>
                    <Typography variant="subtitle2" className={classes.link}>
                        Things to Ask
                    </Typography>
                    <Typography variant="subtitle2" className={classes.title}>
                        Fiona W.Ho's Web-dev Portfolio
                    </Typography>
                    <Typography variant="subtitle2" className={classes.link} align="right">
                    <a href='https://alan.app/' target='_blank' className={classes.linkNav}>Alan AI?</a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        <div>
        <Router>
            <div>
                <nav>
                    <ul className={classes.ulNav}>
                        <Typography variant='body2'>    
                        <li className={classes.liNav}>
                            <Link to="/" className={classes.linkNav}>Home</Link>
                        </li>
                        <li className={classes.liNav}>
                            <a href="https://www.linkedin.com/in/fionawho/" className={classes.linkNav} target="_blank" rel="noreferrer">LinkedIn</a>
                        </li>
                        <li className={classes.liNav}>
                            <a href="https://howings.dev.fast.sheridanc.on.ca/ux-mobile"
                            className={classes.linkNav} target="_blank" rel="noreferrer">Resume</a>
                        </li>
                        <li className={classes.liNav}>
                            <Link to="/Cms" className={classes.linkNav}>CMS</Link>
                        </li>
                        </Typography>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/Featured" component={Featured} />
                <Route path="/CaseStudy" component={CaseStudy} />
                <Route path="/Cms" component={Cms} />
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
        </div>
        {/* <div>
        <Footer />
        </div> */}
        </>
    );
}
 
export default App;