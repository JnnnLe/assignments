// Hackerrank challenge:
const getGrade = score => {
  if (25 < score && score <= 30) { return `A` }
  if (20 < score && score <= 25) { return `B` }
  if (15 < score && score <= 20) { return `C` }
  if (10 < score && score <= 15) { return `D` }
  if (5 < score && score <= 10) { return `E` }
  if (0 <= score && score <= 5) { return `F` }
};