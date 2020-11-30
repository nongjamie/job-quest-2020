const fizzBuzz = (n) => {
  let answer = '';
  answer += (n % 3 == 0) ? 'Fizz' : '';
  answer += (n % 5 == 0) ? 'Buzz' : '';
  return answer.length > 0 ? answer : 'None';
}

module.exports = fizzBuzz;