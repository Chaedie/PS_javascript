//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
const num = input[0];
//* 함수 콜 (고정)
let answer = solution(num);
console.log(typeof answer === 'number' ? answer : answer.trim());
//* 로직함수
function solution(num) {
  const arr = new Array(10).fill(0);
  for (let i = 0; i < num.length; i++) {
    arr[num[i]]++;
  }
  arr[6] = Math.ceil((arr[6] + arr[9]) / 2);
  arr[9] = 0;

  return Math.max(...arr);
}
