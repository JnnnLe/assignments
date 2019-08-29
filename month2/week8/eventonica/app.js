const inquirer = require('inquirer');
const axios = require('axios');
//connection available to all
const connection = require('./connection');

//for the display of data
const eventfulKey = process.env.EVENTFUL_API_KEY;
const eventful = require('eventful-node');
const client = new eventful.Client(eventfulKey);

const app = {};

app.startQuestion = (closeConnectionCallback) => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentence',
      'Create a new user',
      'Find one event of a particular type in San Francisco next week',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event',
      'Exit'
    ],
    name:'action',
}).then((res) => {
  const continueCallback = () => app.startQuestion(closeConnectionCallback);

  if (res.action === 'Complete a sentence') {
    app.completeSentence(continueCallback);
  }
  if (res.action === 'Create a new user') {
    app.createNewUser(continueCallback);
  }
  if (res.action === 'Find one event of a particular type in San Francisco next week') {
    app.searchEventful(continueCallback);
  }
  if (res.action === 'Mark an existing user to attend an event in database') {
    app.matchUserWithEvent(continueCallback);
  }
  if (res.action === 'See all events that a particular user is going to') {
    app.seeEventsOfOneUser(continueCallback);
  }
  if (res.action === 'See all the users that are going to a particular event') {
    app.seeUsersOfOneEvent(continueCallback);
  }
  if (res.action === 'Exit') {
    closeConnectionCallback();
    return;
  }
})
};

app.completeSentence = (continueCallback) => {
  //YOUR WORK HERE
  console.log('1. Please write code for this function');
  //End of your work
  continueCallback();
};

app.createNewUser = (continueCallback) => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'location',
      message: 'What is your location?'
    }
  ]).then( answer => {
    //update in database
    connection.query('INSERT INTO users (name, location) VALUES ($1, $2)', [answer.name, answer.location], (error, results) => {
      if (error) {
        throw error
      }
      console.log('User added with name: ', answer.name);
    })
  }).then( () => {
      setTimeout(() => {
      continueCallback()
    }, 2000)
  });

 };

app.searchEventful = async (continueCallback) => {
  let userResults = {};
  const { query } = await inquirer.prompt([
    {
      type: "text",
      name: "query",
      message: "What would you like to do or who would you like to see?",
    }
  ]);

  // formats data from API, Inquirer Api call (native to API)
  client.searchEvents({
    keywords: query,
    location: 'San Francisco',
    date: "Next Week"
  }, async (err, data) => {
    if (err) {
      return console.error(err);
    }
    let resultEvents = data.search.events.event;
    console.log('Received ' + data.search.total_items + ' events');
    console.log('Event listings: ');
    console.log("===========================================================")
    console.log('title: ',resultEvents[0].title);
    console.log('date: ',resultEvents[0].start_time);
    console.log('location: ',resultEvents[0].venue_name);
    console.log('address: ',resultEvents[0].venue_address);

    userResults.host_name = resultEvents[0].title;
    userResults.date = resultEvents[0].start_time.slice(0,10);
    userResults.location = `${resultEvents[0].venue_name} - ${resultEvents[0].venue_address}`;

    const { addEventQuestion } = await inquirer.prompt([
      {
        type: "text",
        name: "addEventQuestion",
        message: "Would you add this event to your list?",
      }
    ]);
    
    if (addEventQuestion == 'yes' || addEventQuestion == 'y') {
      const { name } = await inquirer.prompt([
        {
          type: "text",
          name: "name",
          message: "What is your name?",
        }
      ]);
      
      //update in database
      connection.query('UPDATE users SET events_attending = $1 WHERE name= $2', [userResults.host_name, name], (error, results) => {
        if (error) {
          throw error;
        }
        console.log('Event added ', userResults.host_name, ' to ', name);
        //last fn to execute
        continueCallback();
      });
    } else {
      continueCallback();
    }
  });
};

app.matchUserWithEvent = (continueCallback) => {
  console.log('5. Please write code for this function');
  //End of your work
  continueCallback();
  
  
};

app.seeEventsOfOneUser = async (continueCallback) => {
  const { userName } = await inquirer.prompt([
    {
      type: "text",
      name: "userName",
      message: "Who is the user you would like to connect to?"
    }
  ]);
  
  connection.query('SELECT * FROM users WHERE name = $1', [userName], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(
      '\n', '===========================================================', '\n',
      userName, 'is planning to attend', results.rows[0].events_attending, '\n',
      '===========================================================', '\n'
      );
    continueCallback();
  });
};

app.seeUsersOfOneEvent = (continueCallback) => {
  //YOUR WORK HERE

  console.log('6. Please write code for this function');
  //End of your work
  continueCallback();
};  

module.exports = app;