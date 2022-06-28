//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
const n = +input[0];
//* 함수 콜 (고정)
let answer = solution(n);
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution(n) {
  let count = 0;
  while (n >= 0) {
    if (n % 5 === 0) {
      count += n / 5;
      return count;
    }

    n -= 3;
    count++;
  }

  return -1;
}
