const printVacations = arr => {
  let locations = ``; 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      locations = locations + arr[i][j];
    }
    console.log(`${arr[i][0]} really wants to go to ${locations}.`);
  }
};

printVacations([ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London']]);

const moreVacations = arr => {
  for (let i = 0; i < arr.length; i++) {
    let locations = ``;
    for (let j = 0; j < arr[i][1].length; j++) {
      locations = locations + arr[i][1][j];
    };
    console.log(`${arr[i][0]} is willing to go to ${locations}.`)
  }
};

moreVacations([ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]);

// Challenge
const muliplicationTable1To10 = () => {
  for (let x = 1; x <=10; x++) {
    for (let y = 1; y <= 10; y++) {;
      console.log(`${x} x ${y} = ${x * y}`)
    }
  }
};

muliplicationTable1To10();