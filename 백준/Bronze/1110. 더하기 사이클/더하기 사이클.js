//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
const n = input[0];

//* 함수 콜 (고정)
let answer = solution(+n);
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution(n) {
  let num = n;
  let count = 0;
  let newNum = 0;

  while (true) {
    let tens = (num % 10) * 10;
    let units = (Math.floor(num / 10) + (num % 10)) % 10;
    newNum = tens + units;
    count++;
    num = newNum;
    if (newNum === Number(n)) {
      return count;
    }
  }
}
