const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const check = (gab, resp) => {
  let count = 0;
  for (index in gab) {
    if (resp[index] !== 'N.A') {
    gab[index] === resp[index] ? count += 1 : count -= 0.5; 
  }
  }
  return count;
}  
const point = (gab, resp, check) => check(gab, resp);

console.log(point(RIGHT_ANSWERS, STUDENT_ANSWERS, check));
