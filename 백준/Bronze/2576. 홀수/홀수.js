//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
const nums = input.map((x) => +x);
//* 함수 콜 (고정)
let answer = solution(nums);
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution(nums) {
  let odds = [];
  let sumOdds = 0;

  for (let num of nums) {
    if (num % 2 === 1) {
      odds.push(num);
      sumOdds += num;
    }
  }

  if (sumOdds === 0) {
    return -1;
  }

  return [sumOdds, Math.min(...odds)].join('\n');
}
