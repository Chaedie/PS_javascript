//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
const n = +input[0];

//* 함수 콜 (고정)
for (let i = 1; i <= n; i++) {
  const N = input[2 * i - 1];
  const nums = input[2 * i].split(' ').map((num) => +num);
  const answer = solution(N, nums);
  console.log(answer.trim());
}

//* 로직함수
function solution(N, nums) {
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}
