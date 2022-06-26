//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
const n = +input[0];
const numsA = input[1].split(' ').map((num) => +num);
const m = +input[2];
const numsB = input[3].split(' ').map((num) => +num);
//* 함수 콜 (고정)
let answer = solution();
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution() {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(numsA[i], (map.get(numsA[i]) || 0) + 1);
  }

  let answer = [];
  for (let i = 0; i < m; i++) {
    answer.push(map.get(numsB[i]) || 0);
  }

  return answer.join(' ');
}
