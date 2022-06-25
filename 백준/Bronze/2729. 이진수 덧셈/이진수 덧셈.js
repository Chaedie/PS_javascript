//* 인풋 - 디폴트
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
const n = +input[0];

for (let i = 0; i < n; i++) {
  const [a, b] = input[i + 1].split(' ');
  const answer = solution(a, b);
  console.log(answer.trim());
}

//* 로직함수
function solution(a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}
