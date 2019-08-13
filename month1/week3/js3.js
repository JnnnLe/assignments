// Hackerrank challenge:
const getGrade = score => {
  if (25 < score && score <= 30) { return `A` }
  if (20 < score && score <= 25) { return `B` }
  if (15 < score && score <= 20) { return `C` }
  if (10 < score && score <= 15) { return `D` }
  if (5 < score && score <= 10) { return `E` }
  if (0 <= score && score <= 5) { return `F` }
};

// planning on going to the movies with friends who are not really friends, get the popcorn ready
const movieNight = friendsArr => {
  let going = [];

  for (let friend of friendsArr) {
    while (going.length <= 3) {

      if (going.length == 2) {
        going.push(`B`);
        return going;
      }

      if (friend === `D`) {
        if (going.length < 2 && going[0] !== 'M') {
        going.push(`D`, `A`);
        }
      }

      if (friend == `P` || friend == `M`) {
        if (friend.length == 1) {
          if (going.length === 1 && going[0] !== `D`) {
            going.push(`P`, `M`);
            return going;
          } 
        }

        if (going.length === 0) {
          going.push(`P`, `M`, `B`);
          return going;
        }
      }
    }
  }

  return going;
};