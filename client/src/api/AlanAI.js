// Use this sample to create your own voice commands
intent('hello', 'hi', (p) => {
    p.play('(hello | hi) there, I am Alan your navaigation assistance.');
});

intent('What does this app do?', 'What can I do here?', 'What do I do now?',
       reply('This is a voice interactive portfolio.'
));

// intent('Start a command', (p) => {
//     p.play({ command: 'testCommand' });
// })

const API_KEY = '53f0e19e538845cb830f98d6cfef2281';
let savedArticles = [];

// News by Source
intent('Give me the $(source* (.*)) news', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        
        
        if(!articles.length) {
            p.play('Sorry, please try searching for news from a different source');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        p.play(`Here are the (latest|recent) ${p.source.value}.`);
    });
})

// Custom My RESTful API Section -- not working...
let savedProjects = [];

intent('Show me all the projects.', (p) => {
    const URL = "http://127.0.0.1:5000/projects";
    
    api.request(URL, (error, response, body) => {
        const projects = body.json();
       
        if(!projects.length) {
                p.play('Sorry, there is no project to display');
                return;
            }
        
        savedProjects = projects;
        
        p.play({ command: 'loadAllProjects', projects });
        p.play(`Here are all the projects, enjoy!`);
    })
})

// Custom Portfolio Section
intent('(Show me|Display) all (of the|) projects', (p) => {
    p.play({ command: 'loadAllProjects' });
});

// 04-19-2021 copy
// Use this sample to create your own voice commands
intent('hello', 'hi', (p) => {
    p.play('(hello | hi) there, I am Alan, your navigation assistance.');
});

intent('What does this app do?', 'What can I do here?',
       reply('This is a voice interactive portfolio developed by Fiona Ho. (Please | Just) ask me more questions.'
));

intent('What can you show me?', 'What do I do now?', (p) => {
    p.play('I can display some web and mobile projects here.');
//     add yes or no options here if yes then run loadAllProjects
    p.play(' Would you like me to display them?');
    p.then(confirmation);
});

intent('Who is Fiona Ho?', 'Tell me about Fiona.', (p) => {
    p.play('My client, Fiona, is an incredibly friendly and talented Digital Content Developer based in Oakville, Canada.');
});

// Custom Portfolio Section
intent('(Show me|Display) all (of the|) projects', (p) => {
    p.play({ command: 'loadAllProjects' });
});

const confirmation = context(() => {
    intent('yes', async (p) => {
        p.play({ command: 'loadAllProjects' });
        p.play('Ok, ');
    })
    intent('no', (p) => {
        p.play('Sure, no problem.');
    })
});

// 04-20-2021 copy
// Use this sample to create your own voice commands
// Use this sample to create your own voice commands
intent('hello', 'hi', 'what\'s up', (p) => {
    p.play('(hello | hi) there, I am Alan, your navigation assistance.');
});

intent('What does this app do?', 'What can I do here?',
       reply('This is a voice interactive portfolio developed by Fiona Ho. (Please | Just) ask me more questions.'
));

intent('What can you show me?', 'What do I do now?', (p) => {
    p.play('I can display some web and mobile projects here.');
//     add yes or no options here if yes then run loadAllProjects
    p.play(' Would you like me to display them?');
    p.then(confirmation);
});

intent('Who is Fiona Ho?', 'Tell me about Fiona.', (p) => {
    p.play('My client, Fiona, is an incredibly friendly and talented Digital Content Developer based in Oakville, Canada.');
});

// Custom Portfolio Section
intent('(Show me|Display) all (of the|) projects', (p) => {
    p.play({ command: 'load-all' });
});

// Open project or go back
intent('Open project number $(number* (.*)) please.', (p) => {
    if(p.number.value) {
        p.play({ command:'open', payload:{ number: p.number.value }});   
    }else {
        p.play('Sorry I didn\'t catch the project number, please try again' );
    }
});


// context
const confirmation = context(() => {
    intent('(yes|okay) (display it|show me|I would like to)', async (p) => {
        p.play({ command: 'load-all' });
        p.play('Ok, ');
    })
    intent('(no|nah) (don\'t display it|no need|I don\'t like)', (p) => {
        p.play('Sure, no problem.');
    })
});



