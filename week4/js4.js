const printVacations = arr => {
  let locations = ''; 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      locations = locations + arr[i][j];
    }
    console.log(`${arr[i][0]} really wants to go to ${locations}`);
  }
};

printVacations([ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London']]);

