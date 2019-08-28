const inquirer = require('inquirer');
// const { prompt } = require('enquirer');
const axios = require('axios');
//connection available to all
const connection = require('./connection');

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
  });

  continueCallback();
 };

app.searchEventful = (continueCallback) => {
  inquirer.prompt([
    {
      type: "text",
      name: "query",
      message: "What would you like to do or who would you like to see?",
    }
  ])
   .then(function (answer) {
      axios.get("https://sanfrancisco.eventful.com/events?q=" + answer.query)
        .then((response) => {
          console.log('This is the res:', response);  
        })
        .catch(function (error) {
          console.log(error);
        });
    })

  continueCallback();
};

app.matchUserWithEvent = (continueCallback) => {
  //YOUR WORK HERE

  console.log('4. Please write code for this function');
  //End of your work
  continueCallback();
};

app.seeEventsOfOneUser = (continueCallback) => {
  //YOUR WORK HERE

  console.log('5. Please write code for this function');
  //End of your work
  continueCallback();
};

app.seeUsersOfOneEvent = (continueCallback) => {
  //YOUR WORK HERE

  console.log('6. Please write code for this function');
  //End of your work
  continueCallback();
};  

module.exports = app;